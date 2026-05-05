import { CHARACTERS } from '@/data/characters';
import { COUPLES } from '@/data/couples';
import { ARTISTS } from '@/data/artists';
import { SCENE_PRESETS } from '@/data/scenes';
import { POSES } from '@/data/poses';
import { CAMERA_MOVEMENTS, CAMERA_FOCUS, TRANSITIONS, SCENE_MOODS, SCENE_ACTIONS } from '@/data/videoScenes';
import { TOD_OPTIONS, WEATHER_OPTIONS, FURNITURE_OPTIONS, BG_OPTIONS } from '@/components/builder/SceneSection';
import { OUTFIT_OPTIONS } from '@/components/builder/UserSlotCard';
import { VIBES } from '@/components/builder/VibeSection';
import { BuilderState, VideoScene } from './types';

/** Generic lookup */
function lookup<T extends { value: string; prompt: string }>(options: T[], id: string): string {
  return options.find(o => o.value === id)?.prompt ?? id;
}

function isNone(val: string): boolean {
  return !val || val === '_none' || val === '_custom';
}

/** Build character summary for video context */
function buildCharacterSummary(state: BuilderState): string {
  const lines: string[] = [];

  // Couple characters
  state.coupleSlots.forEach(slot => {
    if (!slot.coupleKey) return;
    const couple = COUPLES.find(c => c.id === slot.coupleKey);
    if (!couple) return;
    const pos = slot.userPosition === 'between' ? 'YOU sitting BETWEEN them' : 'YOU sitting BESIDE them';
    lines.push(`• ${couple.char1PromptName.split('(')[0].trim()} × ${couple.char2PromptName.split('(')[0].trim()} (ex-couple from "${couple.source}") — ${pos}`);
  });

  // Individual characters
  state.characterSlots.forEach(slot => {
    if (!slot.characterKey) return;
    const char = CHARACTERS.find(c => c.id === slot.characterKey);
    if (!char) return;
    lines.push(`• ${char.promptName.split('(')[0].trim()}`);
  });

  // Artist/band characters
  state.artistSlots.forEach(slot => {
    if (!slot.artistKey) return;
    const artist = ARTISTS.find(a => a.id === slot.artistKey);
    if (!artist) return;
    if (artist.type === 'solo') {
      lines.push(`• ${artist.label} (musician)`);
    } else {
      const members = artist.members ?? [];
      let displayMembers = members;
      if (slot.displayMode === 'vocalist-only') displayMembers = members.filter(m => m.role === 'vocalist');
      else if (slot.displayMode === 'custom' && slot.selectedMembers.length > 0) displayMembers = members.filter(m => slot.selectedMembers.includes(m.id));
      lines.push(`• ${artist.label}: ${displayMembers.map(m => m.name).join(', ')}`);
    }
  });

  // User
  const userPose = lookup(POSES, state.userPose);
  const userOutfit = lookup(OUTFIT_OPTIONS, state.userOutfit);
  lines.push(`• [YOU — Reference Person] wearing ${userOutfit}, ${userPose}`);

  return lines.join('\n');
}

/** Build the scene context from image state */
function buildSceneContext(state: BuilderState): string {
  const preset = SCENE_PRESETS.find(p => p.id === state.scenePresetId);
  const loc = state.sceneCustomDetail || preset?.loc || state.scenePresetId;
  const tod = lookup(TOD_OPTIONS, state.tod);
  const weather = lookup(WEATHER_OPTIONS, state.weather);
  const furniture = !isNone(state.furniture) ? lookup(FURNITURE_OPTIONS, state.furniture) : '';
  const vibe = lookup(VIBES, state.vibe);

  let bgText = '';
  if (state.bgProps === '_custom' && state.bgCustom) {
    bgText = state.bgCustom;
  } else if (!isNone(state.bgProps)) {
    bgText = lookup(BG_OPTIONS, state.bgProps);
  }

  const parts = [
    `Location: ${loc}`,
    `Time: ${tod}`,
    `Atmosphere: ${weather}`,
  ];
  if (furniture) parts.push(`Furniture: ${furniture}`);
  if (bgText) parts.push(`Background: ${bgText}`);
  parts.push(`Mood: ${vibe}`);

  return parts.join('\n');
}

/** Generate video prompt for a single scene */
function buildSingleScenePrompt(
  state: BuilderState,
  scene: VideoScene,
  sceneIndex: number,
  totalScenes: number,
  characterSummary: string,
  sceneContext: string
): string {
  const camMove = lookup(CAMERA_MOVEMENTS, scene.cameraMovement);
  const camFocus = lookup(CAMERA_FOCUS, scene.cameraFocus);
  const sceneAction = lookup(SCENE_ACTIONS, scene.sceneAction);
  const transition = lookup(TRANSITIONS, scene.transition);
  const mood = lookup(SCENE_MOODS, scene.sceneMood);
  const dur = scene.durationSeconds;

  // Time breakdown: split into 3 beats
  const beat1End = Math.round(dur * 0.3);
  const beat2End = Math.round(dur * 0.7);

  const header = `[SCENE ${sceneIndex + 1} of ${totalScenes} — Duration: ${dur} seconds]`;

  const sections = [
    header,
    `[CAMERA MOVEMENT: ${camMove}]`,
    `[CAMERA FOCUS: ${camFocus}]`,
    '',
    'VISUAL SETUP:',
    sceneContext,
    '',
    'CHARACTERS IN SCENE:',
    characterSummary,
    '',
    'WHAT CHARACTERS ARE DOING:',
    sceneAction,
    '',
    `SCENE MOOD:`,
    mood,
    '',
    scene.description ? `ADDITIONAL DIRECTION:\n${scene.description}` : '',
    '',
    'ACTION TIMELINE:',
    `0s–${beat1End}s: Opening beat — ${camMove}. ${sceneAction.split('.')[0] || 'Characters are in their initial positions'}.`,
    `${beat1End}s–${beat2End}s: Middle beat — the emotional core. Camera ${scene.cameraFocus.includes('closeup') ? 'holds tight on the subject' : 'captures the scene'}. ${scene.description || 'Subtle micro-expressions and body language reveal inner emotions.'}`,
    `${beat2End}s–${dur}s: Closing beat — emotional peak or settling. Final character reaction before ${sceneIndex < totalScenes - 1 ? 'transition' : 'end'}.`,
    '',
    'AUDIO DIRECTION:',
    'Ambient: environmental sounds matching the location (traffic, nature, crowd murmur)',
    'Music: emotional underscore matching the mood — lo-fi, piano, or ambient strings',
    'Foley: subtle character sounds (breathing, fabric movement, glass clink)',
    '',
    sceneIndex < totalScenes - 1 ? `TRANSITION TO NEXT SCENE: ${transition}` : 'END OF SEQUENCE',
    '',
    'RENDERING RULES:',
    '• Maintain photorealistic quality — cinematic HDR, natural skin texture, film grain',
    '• [YOU / Reference Person] face must remain 100% faithful to uploaded reference photo',
    '• Consistent lighting throughout the scene matching the established time of day',
    '• Camera movement must be smooth and cinematic — no jarring or artificial motion',
    '• Character movements must be natural and subtle — no exaggerated or robotic motions',
    `• Total duration must not exceed ${dur} seconds`,
  ].filter(Boolean);

  return sections.join('\n');
}

/** Main export: build all scene prompts */
export function buildVideoPrompt(state: BuilderState, scenes: VideoScene[]): string[] {
  const characterSummary = buildCharacterSummary(state);
  const sceneContext = buildSceneContext(state);

  return scenes.map((scene, i) =>
    buildSingleScenePrompt(state, scene, i, scenes.length, characterSummary, sceneContext)
  );
}
