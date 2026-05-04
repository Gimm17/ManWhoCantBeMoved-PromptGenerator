/** Video scene preset data — camera movements, transitions, moods, character actions */

export interface CameraMovementOption {
  value: string;
  label: string;
  prompt: string;
}

export interface TransitionOption {
  value: string;
  label: string;
  prompt: string;
}

export interface SceneMoodOption {
  value: string;
  label: string;
  prompt: string;
}

export const CAMERA_MOVEMENTS: CameraMovementOption[] = [
  { value: 'static', label: 'Static — diam di tempat', prompt: 'Camera remains completely still, locked-off tripod shot, no movement' },
  { value: 'slow-pan-left', label: 'Slow pan left', prompt: 'Camera slowly pans left, revealing the scene from right to left at a gentle pace' },
  { value: 'slow-pan-right', label: 'Slow pan right', prompt: 'Camera slowly pans right, revealing the scene from left to right at a gentle pace' },
  { value: 'push-in', label: 'Push in — mendekat pelan', prompt: 'Camera slowly pushes in toward the subject, creating increasing intimacy and tension' },
  { value: 'pull-out', label: 'Pull out — menjauh pelan', prompt: 'Camera slowly pulls back from the subject, revealing more of the environment and isolation' },
  { value: 'orbit-slow', label: 'Orbit — putar pelan', prompt: 'Camera slowly orbits around the subjects in a gentle arc, creating a dreamlike circular movement' },
  { value: 'dolly-forward', label: 'Dolly forward — maju smooth', prompt: 'Smooth dolly forward through the scene, moving past foreground elements toward the subject' },
  { value: 'crane-up', label: 'Crane up — naik keatas', prompt: 'Camera cranes upward slowly, lifting from eye level to a high angle, revealing the full scene below' },
  { value: 'handheld-subtle', label: 'Handheld subtle — sedikit goyang', prompt: 'Subtle handheld camera movement with slight natural shake, creating documentary-like realism' },
  { value: 'rack-focus', label: 'Rack focus — pindah fokus', prompt: 'Camera stays still but rack-focuses between foreground and background subjects, shifting attention between characters' },
  { value: 'tilt-up', label: 'Tilt up — dari bawah ke atas', prompt: 'Camera tilts upward from ground level to face level, slowly revealing the character from feet to face' },
  { value: 'tilt-down', label: 'Tilt down — dari atas ke bawah', prompt: 'Camera tilts downward from sky to ground level, descending to reveal the scene' },
  { value: 'tracking-side', label: 'Tracking shot — ikutin dari samping', prompt: 'Camera tracks alongside the subject from the side, matching their pace in a smooth lateral movement' },
];

export const TRANSITIONS: TransitionOption[] = [
  { value: 'hard-cut', label: 'Hard cut — potong langsung', prompt: 'Hard cut — immediate transition to next scene' },
  { value: 'slow-fade', label: 'Slow fade — fade out pelan', prompt: 'Slow fade to black, then fade in to next scene — contemplative pause' },
  { value: 'whip-pan', label: 'Whip pan — gerak cepat', prompt: 'Whip pan transition — camera swings rapidly to blur, revealing next scene' },
  { value: 'match-cut', label: 'Match cut — sambung visual', prompt: 'Match cut — visual element in this scene matches and transitions seamlessly to next scene' },
  { value: 'dissolve', label: 'Dissolve — overlap transisi', prompt: 'Cross dissolve — this scene fades as next scene fades in, overlapping momentarily' },
  { value: 'smash-cut', label: 'Smash cut — kontras dramatis', prompt: 'Smash cut — abrupt dramatic transition creating stark contrast with next scene' },
  { value: 'fade-white', label: 'Fade to white — terang lalu hilang', prompt: 'Fade to white — scene brightens to pure white before revealing next scene' },
  { value: 'none', label: 'Tidak ada (scene terakhir)', prompt: 'End of sequence — no transition' },
];

export const SCENE_MOODS: SceneMoodOption[] = [
  { value: 'tense-silence', label: 'Hening tegang — canggung berat', prompt: 'Tense, suffocating silence — the kind of quiet that screams louder than words. Everyone is aware of the unspoken tension.' },
  { value: 'nostalgic', label: 'Nostalgia — kenangan manis pahit', prompt: 'Wave of nostalgia — bittersweet memories flooding back, warm yet painful. Time feels suspended.' },
  { value: 'melancholic-hope', label: 'Melankolis + harapan tipis', prompt: 'Melancholic but with a fragile thread of hope — sadness with a faint light at the end.' },
  { value: 'chaotic-emotion', label: 'Emosi kacau — campur aduk', prompt: 'Chaotic emotional turbulence — anger, sadness, love, and confusion all colliding simultaneously.' },
  { value: 'calm-before-storm', label: 'Tenang sebelum badai', prompt: 'Eerie calm before the emotional storm — deceptive peace that could shatter at any moment.' },
  { value: 'bittersweet-ending', label: 'Akhir yang manis pahit', prompt: 'Bittersweet acceptance — the pain of letting go mixed with peace of closure.' },
  { value: 'raw-vulnerability', label: 'Rapuh — terbuka total', prompt: 'Raw vulnerability — all emotional walls down, completely exposed and defenseless.' },
  { value: 'quiet-resignation', label: 'Pasrah diam — udah capek', prompt: 'Quiet resignation — the exhaustion of fighting for something that is already gone. Acceptance through tiredness.' },
  { value: 'lonely-crowded', label: 'Sendirian di keramaian', prompt: 'Loneliness in a crowd — surrounded by people but feeling profoundly isolated and unseen.' },
  { value: 'unspoken-love', label: 'Cinta yang ga terucap', prompt: 'Unspoken love — deep affection visible in eyes and micro-expressions but never voiced, swallowed back repeatedly.' },
];

/** Character micro-actions for video scenes */
export const CHARACTER_ACTIONS = [
  { value: 'diam-stare', label: 'Diam menatap kosong', prompt: 'staring blankly into the distance, completely lost in thought, eyes unfocused' },
  { value: 'lirik-diam', label: 'Diam-diam melirik', prompt: 'sneaking a quiet glance at the other person when they are not looking, then quickly looking away' },
  { value: 'ambil-napas-berat', label: 'Ambil napas berat', prompt: 'taking a deep, heavy breath — chest rising and falling slowly, as if carrying invisible weight' },
  { value: 'angkat-tangan-ragu', label: 'Angkat tangan ragu', prompt: 'raising a hand hesitantly as if about to touch or reach out, then pulling it back with quiet resignation' },
  { value: 'tunduk-pelan', label: 'Tunduk pelan', prompt: 'slowly lowering their head, chin dropping to chest, shoulders deflating with quiet defeat' },
  { value: 'senyum-paksa', label: 'Senyum paksa', prompt: 'forcing a small smile that does not reach the eyes — a mask of composure that is barely holding' },
  { value: 'tepuk-bahu', label: 'Tepuk bahu pelan', prompt: 'gently placing a hand on someone\'s shoulder — a gesture of comfort that says more than words could' },
  { value: 'berdiri-pergi', label: 'Berdiri lalu pergi', prompt: 'slowly standing up and walking away without looking back, each step heavier than the last' },
  { value: 'pegang-minuman', label: 'Pegang minuman diam', prompt: 'holding a drink with both hands, staring down into it, using it as an excuse not to make eye contact' },
  { value: 'mainkan-jari', label: 'Mainkan jari gelisah', prompt: 'nervously fidgeting with fingers, interlocking and releasing them repeatedly — a sign of inner turmoil' },
  { value: 'usap-mata', label: 'Usap mata pelan', prompt: 'subtly wiping the corner of an eye with a finger, trying to hide that tears are forming' },
  { value: 'ketuk-meja', label: 'Ketuk meja pelan', prompt: 'tapping fingers slowly on the table in a rhythmic pattern, a nervous habit betraying inner anxiety' },
];
