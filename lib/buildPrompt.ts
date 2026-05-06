import { CHARACTERS } from '@/data/characters';
import { COUPLES } from '@/data/couples';
import { COUPLE_POSES } from '@/data/couplePoses';
import { ARTISTS } from '@/data/artists';
import { SCENE_PRESETS } from '@/data/scenes';
import { FOOD_OPTIONS } from '@/data/food';
import { POSES } from '@/data/poses';
import { USER_POSITIONS } from '@/data/positions';
import { COUPLE_CHAR_POSES } from '@/components/builder/CoupleSlotCard';
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
• Treat this as identity-critical photo compositing, not character design

POSE OVERRIDE — CRITICAL
• From the uploaded reference photo, extract ONLY: face, facial features, hair style, and general fashion sense
• COMPLETELY IGNORE the body pose, posture, hand position, head tilt, and body angle from the reference photo
• The POSE and BODY POSITION of [YOU / Reference Person] MUST follow EXACTLY what is specified in the CHARACTERS section above — NOT the pose in the reference photo
• If the prompt says "sitting with arms crossed" but the reference photo shows the person standing — the generated image MUST show the person SITTING with arms crossed
• The reference photo is for FACE IDENTITY ONLY — all body language and positioning comes from the prompt`;

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

  // ── Resolve centralized user position ──
  const userPosEntry = USER_POSITIONS.find(p => p.value === state.userPosition);
  const userPosText = userPosEntry?.prompt ?? '';
  const isCouplePosition = ['between-couple', 'beside-couple', 'center-between-both', 'between-left-couple', 'between-right-couple', 'far-from-couples'].includes(state.userPosition);
  const isBetweenCouple = state.userPosition === 'between-couple';

  // ── Check for active couple slots ──
  const activeCouples = state.coupleSlots.filter(s => s.coupleKey);
  const hasCouples = activeCouples.length > 0;

  // ── Build couple character entries ──
  const coupleContextLines: string[] = [];

  activeCouples.forEach((slot, coupleIdx) => {
    const couple = COUPLES.find(c => c.id === slot.coupleKey);
    if (!couple) return;
    if (couple.char1IsFilmLiveAction || couple.char2IsFilmLiveAction) hasFilmChar = true;
    const couplePoseText = COUPLE_POSES.find(p => p.value === slot.couplePose)?.prompt ?? slot.couplePose;
    const artText = lookup(ART_STYLES, slot.artStyle);

    const resolveCharPose = (poseId: string): string => {
      if (!poseId) return '';
      if (COUPLE_CHAR_POSES[poseId]) return COUPLE_CHAR_POSES[poseId];
      return lookup(POSES, poseId);
    };
    const c1PoseText = slot.advancedMode && slot.char1Pose ? resolveCharPose(slot.char1Pose) : '';
    const c2PoseText = slot.advancedMode && slot.char2Pose ? resolveCharPose(slot.char2Pose) : '';
    const c1PoseLine = c1PoseText ? `\n   • Pose: ${c1PoseText}` : '';
    const c2PoseLine = c2PoseText ? `\n   • Pose: ${c2PoseText}` : '';

    // Determine if user is between THIS specific couple
    const userBetweenThis = isBetweenCouple && activeCouples.length === 1;
    const userBetweenLeftCouple = state.userPosition === 'between-left-couple' && coupleIdx === 0;
    const userBetweenRightCouple = state.userPosition === 'between-right-couple' && coupleIdx === 1;
    const insertUserBetween = userBetweenThis || userBetweenLeftCouple || userBetweenRightCouple;

    if (insertUserBetween) {
      // Char 1 → YOU → Char 2
      charLines.push(
        `${i}. ${couple.char1PromptName}\n   • Part of former couple from "${couple.source}"${c1PoseLine}\n   • Art style: ${artText}`
      );
      i++;
      charLines.push(
        `${i}. [REFERENCE PERSON — YOU — sitting BETWEEN this former couple]\n   • Face: CRITICAL — reconstruct face from the uploaded reference photo (face and hair ONLY — IGNORE the pose in the reference photo)\n   • Outfit: ${userOutfitText}\n   • Pose: ${userPoseText} (THIS overrides whatever pose is in the reference photo)\n   • Art style: fully photorealistic, natural cinematic lighting`
      );
      i++;
      charLines.push(
        `${i}. ${couple.char2PromptName}\n   • Part of former couple from "${couple.source}"${c2PoseLine}\n   • Art style: ${artText}`
      );
      i++;
    } else {
      // Char 1 → Char 2 (user added separately)
      charLines.push(
        `${i}. ${couple.char1PromptName}\n   • Part of former couple from "${couple.source}"${c1PoseLine}\n   • Art style: ${artText}`
      );
      i++;
      charLines.push(
        `${i}. ${couple.char2PromptName}\n   • Part of former couple from "${couple.source}"${c2PoseLine}\n   • Art style: ${artText}`
      );
      i++;
    }

    const dynamicLine = slot.advancedMode ? '' : `\nCouple dynamic: ${couplePoseText}`;
    coupleContextLines.push(
      `COUPLE — ${couple.char1PromptName.split('(')[0].trim()} × ${couple.char2PromptName.split('(')[0].trim()}\n` +
      `Source: "${couple.source}"\n` +
      `Why they broke up: ${couple.breakupReason}${dynamicLine}`
    );
  });

  // ── Add user entry (always, whether couples exist or not) ──
  // If user was NOT already inserted between a couple above, add them here
  const userAlreadyInserted = isBetweenCouple && activeCouples.length === 1
    || state.userPosition === 'between-left-couple'
    || state.userPosition === 'between-right-couple';

  if (!userAlreadyInserted) {
    const posLine = userPosText ? `\n   • Position: ${userPosText}` : '';
    charLines.push(
      `${i}. [REFERENCE PERSON — real individual from uploaded reference photo]\n   • Face: CRITICAL — reconstruct face with 100% exactness from the uploaded reference photo (face and hair ONLY — IGNORE the body pose in the reference photo)\n   • Outfit: ${userOutfitText}\n   • Pose: ${userPoseText} (THIS overrides whatever pose is in the reference photo — follow this pose EXACTLY)${posLine}\n   • Art style: fully photorealistic, natural cinematic lighting`
    );
    i++;
  }

  // ── Build individual character entries ──
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

  // ── Build artist/band entries ──
  const activeArtists = state.artistSlots.filter(s => s.artistKey);
  const hasArtists = activeArtists.length > 0;
  const artistContextLines: string[] = [];

  activeArtists.forEach(slot => {
    const artist = ARTISTS.find(a => a.id === slot.artistKey);
    if (!artist) return;
    const poseText = lookup(POSES, slot.pose);
    const artText = lookup(ART_STYLES, slot.artStyle);

    if (artist.type === 'solo') {
      charLines.push(
        `${i}. ${artist.promptName}\n   • Pose: ${poseText}\n   • Art style: ${artText}`
      );
      i++;
      artistContextLines.push(
        `ARTIST — ${artist.label}\nReal-world musician hanging out in the scene, casually present as part of the nongkrong gathering.`
      );
    } else {
      const members = artist.members ?? [];
      let displayMembers = members;
      if (slot.displayMode === 'vocalist-only') {
        displayMembers = members.filter(m => m.role === 'vocalist');
      } else if (slot.displayMode === 'custom' && slot.selectedMembers.length > 0) {
        displayMembers = members.filter(m => slot.selectedMembers.includes(m.id));
      }

      displayMembers.forEach(m => {
        charLines.push(
          `${i}. ${m.promptName}\n   • Pose: ${poseText}\n   • Art style: ${artText}`
        );
        i++;
      });

      artistContextLines.push(
        `BAND — ${artist.label}\nMembers present: ${displayMembers.map(m => m.name).join(', ')}\n` +
        `Real-world musicians casually hanging out in the nongkrong scene.`
      );
    }
  });

  // Build setting details — only include non-empty lines
  const settingLines: string[] = [];
  if (furnitureText) settingLines.push(`Furniture / seating: ${furnitureText}`);
  if (foodText) settingLines.push(`On the table: ${foodText}`);
  if (bgPropsText) settingLines.push(`Background: ${bgPropsText}`);

  // Build concept text — explicitly restrict to listed characters only
  const totalCharCount = charLines.length;
  let conceptText = `CONCEPT\n"The Man Who Can't Be Moved" — a creative fan art crossover scene. The characters listed below are gathering in one location. This is a fictional scene for entertainment purposes.\n\n⚠️ STRICT CHARACTER LOCK: This scene contains EXACTLY ${totalCharCount} characters/people — NO MORE, NO LESS. Do NOT add any characters that are not explicitly listed in the CHARACTERS section below. Do NOT invent, assume, or hallucinate additional characters based on the theme or concept. If a character is not listed below, they DO NOT EXIST in this image.`;
  if (hasCouples) {
    conceptText += `\n\nBETWEEN / BESIDE COUPLE ELEMENT\nThis scene also features the "Between Couple / Beside Couple" concept — where YOU (the reference person) are placed in the middle of or next to a famous couple who broke up or divorced.`;
  }
  if (hasArtists) {
    conceptText += `\n\nARTIST / BAND ELEMENT\nReal-world musicians are also present at this gathering — hanging out casually in the same location. They are NOT performing; they are just chilling as part of the group.`;
  }

  const sections = [
    DISCLAIMER,
    conceptText,
    `SCENE\nLocation: ${loc}\nTime: ${todText}\nAtmosphere: ${weatherText}`,
    settingLines.length > 0 ? `SETTING DETAILS\n${settingLines.join('\n')}` : '',
    `CHARACTERS (strict left-to-right order in frame)\n${charLines.join('\n\n')}`,
    coupleContextLines.length > 0 ? coupleContextLines.join('\n\n') : '',
    artistContextLines.length > 0 ? artistContextLines.join('\n\n') : '',
    `MOOD / EMOTIONAL ATMOSPHERE\n${vibeText}`,
    `CAMERA\nAngle: ${cameraAngleText}\nComposition: ${compositionText}`,
    `RENDERING STYLE\n${photoStyleText}`,
    hasFilmChar ? FILM_NOTE : '',
    `RENDERING RULES\n• EXACTLY ${totalCharCount} characters in this image — no more, no fewer. Do NOT add any character not listed above.\n• Photorealistic characters: full cinematic HDR, natural skin texture, accurate hair, realistic lighting\n• Anime/cel-shaded characters: 2D Spider-Verse visual language, Ben-Day halftone dots, thick black ink outlines, vibrant flat fill colors\n• Standard anime characters: clean lineart, vibrant expressive colors\n• All characters share consistent lighting from the scene's ${todText}\n• No masks — all faces fully visible or in side profile\n• FORBIDDEN: Do NOT add background characters, passersby, bystanders, or any other person not explicitly listed in the CHARACTERS section`,
    FACE_FIDELITY,
  ].filter(Boolean);

  return sections.join('\n\n');
}
