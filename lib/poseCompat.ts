/**
 * Pose ↔ Position Compatibility System
 * Single source of truth for posture tagging across ALL sections
 */

export type Posture = 'sitting' | 'standing' | 'ground' | 'lying' | 'any';

// ── Sitting pose prefixes/values ──
const SITTING_PREFIXES = [
  'duduk-', 'makan-', 'minum-', 'slurp-', 'tiup-', 'gigit-', 'aduk-',
  'cheers-', 'buka-tutup-', 'pegang-gelas-', 'pegang-snack-',
  'ambil-ciki', 'makan-ciki', 'buka-bungkus-', 'lempar-snack-', 'bagi-snack',
  'ngerokok-', 'main-hp', 'main-ml', 'hp-', 'earphone-',
  'baca-', 'nulis-', 'lipat-', 'pegang-kacamata',
  'menunduk-', 'ketawa-', 'senyum-', 'berfikir-', 'ngobrol-',
  'hela-', 'garuk-', 'tepuk-', 'nunjuk-', 'kepala-rebah',
];

const STANDING_VALUES = [
  'berdiri-silang', 'berdiri-saku', 'berdiri-tembok',
  'berdiri-ngerokok', 'berdiri-minum', 'tangan-di-bahu',
];

const GROUND_VALUES = ['jongkok', 'crouching-spider'];
const LYING_VALUES = ['rebahan'];
const SITTING_EXACT = ['duduk-pinggir'];

/** Get posture from a user pose value */
export function getPosePosture(poseValue: string): Posture {
  if (!poseValue) return 'any';

  // Check exact sitting values first
  if (SITTING_EXACT.includes(poseValue)) return 'sitting';
  if (STANDING_VALUES.includes(poseValue)) return 'standing';
  if (GROUND_VALUES.includes(poseValue)) return 'ground';
  if (LYING_VALUES.includes(poseValue)) return 'lying';

  // Check prefixes for sitting
  for (const prefix of SITTING_PREFIXES) {
    if (poseValue.startsWith(prefix) || poseValue === prefix) return 'sitting';
  }

  return 'any';
}

// ── Position posture map (all sections) ──
const POSITION_POSTURE_MAP: Record<string, Posture> = {
  // Couple individual
  'between': 'sitting',
  'beside': 'sitting',

  // Global user positions (2 couples)
  'center-between-both': 'sitting',
  'left-side': 'sitting',
  'right-side': 'sitting',
  'behind-watching': 'any',
  'far-away': 'any',
  'standing-above': 'standing',
  'across-table': 'sitting',
  'leaning-wall': 'standing',
  'walking-past': 'standing',

  // Band user positions
  'center-band': 'sitting',
  'beside-vocalist': 'sitting',
  // 'across-table' already mapped above
  // 'behind-watching' already mapped above
  'edge-group': 'any',
  'leaning-near': 'standing',
};

/** Get posture from a position value (couple, global, band) */
export function getPositionPosture(posValue: string): Posture {
  if (!posValue) return 'any';
  return POSITION_POSTURE_MAP[posValue] ?? 'any';
}

/** Check if a pose posture and position posture are compatible */
export function isPostureCompatible(posePosture: Posture, positionPosture: Posture): boolean {
  if (posePosture === 'any' || positionPosture === 'any') return true;
  return posePosture === positionPosture;
}

/** Check compatibility between a pose value and position value directly */
export function isPosePositionCompatible(poseValue: string, positionValue: string): boolean {
  return isPostureCompatible(getPosePosture(poseValue), getPositionPosture(positionValue));
}

/** Get a human-readable posture label in Indonesian */
export function getPostureLabel(posture: Posture): string {
  switch (posture) {
    case 'sitting': return 'duduk';
    case 'standing': return 'berdiri';
    case 'ground': return 'jongkok/bawah';
    case 'lying': return 'rebahan';
    default: return '';
  }
}
