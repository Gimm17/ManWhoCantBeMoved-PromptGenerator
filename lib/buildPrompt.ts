import { CHARACTERS } from '@/data/characters';
import { SCENE_PRESETS } from '@/data/scenes';
import { FOOD_OPTIONS } from '@/data/food';
import { POSES } from '@/data/poses';
import { ART_STYLES, PHOTO_STYLES, CAMERA_ANGLES, COMPOSITIONS } from '@/data/styles';
import { TOD_OPTIONS, WEATHER_OPTIONS, FURNITURE_OPTIONS, BG_OPTIONS } from '@/components/builder/SceneSection';
import { OUTFIT_OPTIONS } from '@/components/builder/UserSlotCard';
import { VIBES } from '@/components/builder/VibeSection';
import { BuilderState } from './types';

/** Generic lookup: find prompt text by ID from any option array */
function lookup<T extends { value: string; prompt: string }>(options: T[], id: string): string {
  return options.find(o => o.value === id)?.prompt ?? id;
}

/** Check if a value is "none" or empty */
function isNone(val: string): boolean {
  return !val || val === '_none' || val === '_custom';
}

const DISCLAIMER = `[CREATIVE FAN ART — FICTIONAL CROSSOVER SCENE — FOR ENTERTAINMENT PURPOSES ONLY — NON-COMMERCIAL]`;

const FILM_NOTE = `
NOTE ON FILM / DRAMA / LIVE-ACTION CHARACTERS
For any live-action film or drama character in this scene, a separate character reference image has been uploaded alongside this prompt. Use that reference image to accurately reconstruct the character's face, costume, and distinctive physical features.`;

const FACE_FIDELITY = `
FACE FIDELITY — REFERENCE PERSON — NON-NEGOTIABLE
• DO NOT beautify, slim, idealize, or stylize the face in any way
• DO NOT apply AI face-averaging, facial structure changes, or any artistic reinterpretation
• Every feature must exactly match the reference photo: eyes, nose, lip line, jawline, cheekbones, skin tone, glasses frame, hair style and color
• The person must be immediately recognizable as the same individual from the reference photo
• Treat this as identity-critical photo compositing, not character design`;

export function buildPrompt(state: BuilderState): string {
  const preset = SCENE_PRESETS.find(p => p.id === state.scenePresetId);
  const loc = state.sceneCustomDetail || preset?.loc || (state.scenePresetId === 'custom' ? 'custom location as described' : state.scenePresetId);

  // Resolve all IDs to prompt text
  const todText = lookup(TOD_OPTIONS, state.tod);
  const weatherText = lookup(WEATHER_OPTIONS, state.weather);
  const userOutfitText = lookup(OUTFIT_OPTIONS, state.userOutfit);
  const userPoseText = lookup(POSES, state.userPose);
  const vibeText = lookup(VIBES, state.vibe);
  const cameraAngleText = lookup(CAMERA_ANGLES, state.cameraAngle);
  const photoStyleText = lookup(PHOTO_STYLES, state.photoStyle);
  const compositionText = lookup(COMPOSITIONS, state.composition);

  // Nullable fields — only include if set
  const furnitureText = !isNone(state.furniture) ? lookup(FURNITURE_OPTIONS, state.furniture) : '';
  const foodText = !isNone(state.food) ? lookup(FOOD_OPTIONS, state.food) : '';

  // Background: custom text or preset or none
  let bgPropsText = '';
  if (state.bgProps === '_custom' && state.bgCustom) {
    bgPropsText = state.bgCustom;
  } else if (!isNone(state.bgProps)) {
    bgPropsText = lookup(BG_OPTIONS, state.bgProps);
  }

  let hasFilmChar = false;
  const charLines: string[] = [];
  let i = 1;

  state.characterSlots.forEach(slot => {
    if (!slot.characterKey) return;
    const char = CHARACTERS.find(c => c.id === slot.characterKey);
    if (!char) return;
    if (char.isFilmLiveAction) hasFilmChar = true;
    const poseText = lookup(POSES, slot.pose);
    const artText = lookup(ART_STYLES, slot.artStyle);
    charLines.push(
      `${i}. ${char.promptName}\n   • Pose: ${poseText}\n   • Art style: ${artText}`
    );
    i++;
  });

  charLines.push(
    `${i}. [REFERENCE PERSON — real individual from uploaded reference photo]\n   • Face: CRITICAL — reconstruct face with 100% photographic exactness from the uploaded reference photo\n   • Outfit: ${userOutfitText}\n   • Pose: ${userPoseText}\n   • Art style: fully photorealistic, natural cinematic lighting`
  );

  // Build setting details — only include non-empty lines
  const settingLines: string[] = [];
  if (furnitureText) settingLines.push(`Furniture / seating: ${furnitureText}`);
  if (foodText) settingLines.push(`On the table: ${foodText}`);
  if (bgPropsText) settingLines.push(`Background: ${bgPropsText}`);

  const sections = [
    DISCLAIMER,
    `CONCEPT\n"The Man Who Can't Be Moved" — a fictional gathering of iconic characters who all share the same emotional experience: being left behind by someone they loved, unable to fully move on. This is a creative fan art crossover scene.`,
    `SCENE\nLocation: ${loc}\nTime: ${todText}\nAtmosphere: ${weatherText}`,
    settingLines.length > 0 ? `SETTING DETAILS\n${settingLines.join('\n')}` : '',
    `CHARACTERS (strict left-to-right order in frame)\n${charLines.join('\n\n')}`,
    `MOOD / EMOTIONAL ATMOSPHERE\n${vibeText}`,
    `CAMERA\nAngle: ${cameraAngleText}\nComposition: ${compositionText}`,
    `RENDERING STYLE\n${photoStyleText}`,
    hasFilmChar ? FILM_NOTE : '',
    `RENDERING RULES\n• Photorealistic characters: full cinematic HDR, natural skin texture, accurate hair, realistic lighting\n• Anime/cel-shaded characters: 2D Spider-Verse visual language, Ben-Day halftone dots, thick black ink outlines, vibrant flat fill colors\n• Standard anime characters: clean lineart, vibrant expressive colors\n• All characters share consistent lighting from the scene's ${todText}\n• No masks — all faces fully visible or in side profile`,
    FACE_FIDELITY,
  ].filter(Boolean);

  return sections.join('\n\n');
}
