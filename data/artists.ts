/** Artist & Group Band data — grouped by region */

export type ArtistRegion = 'western' | 'id' | 'kr' | 'jp' | 'ph';

export interface BandMember {
  id: string;
  name: string;
  role: string;
  promptName: string;
}

export interface Artist {
  id: string;
  label: string;
  promptName: string;
  type: 'solo' | 'band';
  region: ArtistRegion;
  members?: BandMember[];
}

export interface ArtistRegionGroup {
  id: ArtistRegion;
  label: string;
}

export const ARTIST_REGIONS: ArtistRegionGroup[] = [
  { id: 'western', label: '🇺🇸 Western' },
  { id: 'id', label: '🇮🇩 Indonesia' },
  { id: 'kr', label: '🇰🇷 Korean' },
  { id: 'jp', label: '🇯🇵 Jepang' },
  { id: 'ph', label: '🇵🇭 Filipina' },
];

export const ARTISTS: Artist[] = [
  // ── 🇺🇸 Western ──
  {
    id: 'JUSTIN_BIEBER',
    label: 'Justin Bieber 🇺🇸',
    promptName: 'Justin Bieber (Canadian pop singer), wearing casual streetwear hoodie and sneakers, youthful face with light stubble',
    type: 'solo',
    region: 'western',
  },
  {
    id: 'NIKI',
    label: 'NIKI (88rising) 🇮🇩🇺🇸',
    promptName: 'NIKI Zefanya (Indonesian-American R&B singer from 88rising), long dark hair, soft feminine features, wearing stylish casual outfit',
    type: 'solo',
    region: 'western',
  },
  {
    id: 'JOJI',
    label: 'Joji (88rising) 🇯🇵🇺🇸',
    promptName: 'Joji (George Miller, Japanese-Australian lo-fi R&B artist from 88rising), dark hair, melancholic expression, wearing dark casual clothes',
    type: 'solo',
    region: 'western',
  },
  {
    id: 'LANY',
    label: 'LANY (band) 🇺🇸',
    promptName: 'LANY (American indie pop band)',
    type: 'band',
    region: 'western',
    members: [
      { id: 'LANY_PAUL', name: 'Paul Klein', role: 'vocalist', promptName: 'Paul Jason Klein (vocalist of LANY), tall, slim build, messy light brown hair, wearing fitted casual clothes' },
      { id: 'LANY_LES', name: 'Les Priest', role: 'keyboardist', promptName: 'Charles Leslie Priest (keyboardist/guitarist of LANY), dark hair, glasses, wearing indie casual style' },
      { id: 'LANY_JAKE', name: 'Jake Goss', role: 'drummer', promptName: 'Jake Clifford Goss (drummer of LANY), beard, relaxed build, wearing simple casual clothes' },
    ],
  },
  {
    id: 'THE_SCRIPT',
    label: 'The Script (band) 🇮🇪',
    promptName: 'The Script (Irish pop rock band)',
    type: 'band',
    region: 'western',
    members: [
      { id: 'SCRIPT_DANNY', name: 'Danny O\'Donoghue', role: 'vocalist', promptName: 'Danny O\'Donoghue (vocalist of The Script), dark hair, strong jawline, wearing leather jacket over casual tee' },
      { id: 'SCRIPT_MARK', name: 'Mark Sheehan', role: 'guitarist', promptName: 'Mark Sheehan (guitarist of The Script), shaved head, warm expression, wearing casual dark clothes' },
      { id: 'SCRIPT_GLEN', name: 'Glen Power', role: 'drummer', promptName: 'Glen Power (drummer of The Script), light hair, friendly face, wearing simple casual outfit' },
    ],
  },

  // ── 🇮🇩 Indonesia ──
  {
    id: 'FIERSA_BESARI',
    label: 'Fiersa Besari 🇮🇩',
    promptName: 'Fiersa Besari (Indonesian indie singer-songwriter), long dark hair, beard, wearing flannel shirt and jeans, bohemian traveler look',
    type: 'solo',
    region: 'id',
  },
  {
    id: 'PAMUNGKAS',
    label: 'Pamungkas 🇮🇩',
    promptName: 'Pamungkas (Indonesian indie soul singer), curly dark hair, warm expression, wearing casual earth-tone clothes',
    type: 'solo',
    region: 'id',
  },

  // ── 🇰🇷 Korean ──
  {
    id: 'IU',
    label: 'IU (아이유) 🇰🇷',
    promptName: 'IU (Lee Ji-eun, Korean singer-actress), petite, delicate features, long dark hair, wearing elegant casual Korean fashion',
    type: 'solo',
    region: 'kr',
  },

  // ── 🇯🇵 Jepang ──
  {
    id: 'YOASOBI',
    label: 'YOASOBI (duo) 🇯🇵',
    promptName: 'YOASOBI (Japanese music duo)',
    type: 'band',
    region: 'jp',
    members: [
      { id: 'YOASOBI_IKURA', name: 'ikura (幾田りら)', role: 'vocalist', promptName: 'ikura / Lilas Ikuta (vocalist of YOASOBI), young Japanese woman, bright expressive face, long dark hair' },
      { id: 'YOASOBI_AYASE', name: 'Ayase', role: 'producer/composer', promptName: 'Ayase (composer/producer of YOASOBI), young Japanese man, stylish dark hair, wearing modern streetwear' },
    ],
  },
];

/** Band user position options (nongkrong context) */
export const BAND_USER_POSITIONS = [
  { value: 'center-band', label: 'Duduk di tengah band members', prompt: '[YOU / Reference Person] is sitting at the CENTER of the band members — surrounded by musicians in a casual hangout setting, part of the inner circle' },
  { value: 'beside-vocalist', label: 'Duduk di samping vocalist', prompt: '[YOU / Reference Person] is sitting RIGHT NEXT TO the vocalist — shoulder to shoulder, closest to the frontperson of the band in a casual nongkrong setting' },
  { value: 'across-table', label: 'Duduk di seberang (hadapan mereka)', prompt: '[YOU / Reference Person] is sitting ACROSS the table from the band members — facing them directly, like a casual fan meeting over food and drinks' },
  { value: 'behind-watching', label: 'Di belakang — nyimak dari belakang', prompt: '[YOU / Reference Person] is positioned BEHIND the band members — watching from the back, observing their group dynamic from the outside' },
  { value: 'edge-group', label: 'Di pinggir grup — agak menjauh', prompt: '[YOU / Reference Person] is at the EDGE of the group — slightly separated, not quite part of the band\'s inner circle but present in the same space' },
  { value: 'leaning-near', label: 'Berdiri/bersandar di dekat mereka', prompt: '[YOU / Reference Person] is STANDING or LEANING near the band — not sitting with them but close enough to be part of the scene, casually observing' },
];

/** Display mode options for bands */
export const BAND_DISPLAY_MODES = [
  { value: 'full-band', label: 'Full band — semua member' },
  { value: 'vocalist-only', label: 'Vocalist saja' },
  { value: 'custom', label: 'Pilih member tertentu' },
];
