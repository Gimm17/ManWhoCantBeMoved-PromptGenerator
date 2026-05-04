/** Video scene preset data — camera movements, transitions, moods, focus, scene actions */

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

export interface CameraFocusOption {
  value: string;
  label: string;
  prompt: string;
}

export interface SceneActionOption {
  value: string;
  label: string;
  prompt: string;
}

// ─── CAMERA MOVEMENTS ───────────────────────
export const CAMERA_MOVEMENTS: CameraMovementOption[] = [
  { value: 'static', label: 'Static — diam di tempat', prompt: 'Camera remains completely still, locked-off tripod shot, no movement' },
  { value: 'slow-pan-left', label: 'Slow pan left', prompt: 'Camera slowly pans left, revealing the scene from right to left at a gentle pace' },
  { value: 'slow-pan-right', label: 'Slow pan right', prompt: 'Camera slowly pans right, revealing the scene from left to right at a gentle pace' },
  { value: 'push-in', label: 'Push in — mendekat pelan', prompt: 'Camera slowly pushes in toward the subject, creating increasing intimacy and tension' },
  { value: 'pull-out', label: 'Pull out — menjauh pelan', prompt: 'Camera slowly pulls back from the subject, revealing more of the environment and isolation' },
  { value: 'orbit-slow', label: 'Orbit — putar pelan', prompt: 'Camera slowly orbits around the subjects in a gentle arc, creating a dreamlike circular movement' },
  { value: 'dolly-forward', label: 'Dolly forward — maju smooth', prompt: 'Smooth dolly forward through the scene, moving past foreground elements toward the subject' },
  { value: 'crane-up', label: 'Crane up — naik keatas', prompt: 'Camera cranes upward slowly, lifting from eye level to a high angle, revealing the full scene below' },
  { value: 'crane-down', label: 'Crane down — turun dari atas', prompt: 'Camera cranes downward from a high angle to eye level, descending to meet the characters' },
  { value: 'handheld-subtle', label: 'Handheld subtle — sedikit goyang', prompt: 'Subtle handheld camera movement with slight natural shake, creating documentary-like realism' },
  { value: 'rack-focus', label: 'Rack focus — pindah fokus', prompt: 'Camera stays still but rack-focuses between foreground and background subjects, shifting attention between characters' },
  { value: 'tilt-up', label: 'Tilt up — dari bawah ke atas', prompt: 'Camera tilts upward from ground level to face level, slowly revealing the character from feet to face' },
  { value: 'tilt-down', label: 'Tilt down — dari atas ke bawah', prompt: 'Camera tilts downward from sky to ground level, descending to reveal the scene' },
  { value: 'tracking-side', label: 'Tracking shot — ikutin dari samping', prompt: 'Camera tracks alongside the subject from the side, matching their pace in a smooth lateral movement' },
  { value: 'zoom-in-slow', label: 'Zoom in pelan', prompt: 'Slow optical zoom into the subject, gradually filling the frame with their face or a detail' },
  { value: 'zoom-out-slow', label: 'Zoom out pelan', prompt: 'Slow optical zoom out from a close detail, gradually revealing the full scene and environment' },
  { value: 'steadicam-follow', label: 'Steadicam follow — ikutin dari belakang', prompt: 'Steadicam follows behind the character, smoothly tracking their movement through the space' },
  { value: 'dutch-tilt', label: 'Dutch angle — miring dramatis', prompt: 'Camera tilted at a diagonal dutch angle, creating a sense of disorientation and unease' },
  { value: 'whip-pan', label: 'Whip pan — gerak cepat antar subyek', prompt: 'Fast whip pan between two subjects, blurring the space between them to create urgency' },
];

// ─── CAMERA FOCUS (who/what the camera focuses on) ───────────────────────
export const CAMERA_FOCUS: CameraFocusOption[] = [
  { value: 'all-wide', label: 'Semua karakter (wide shot)', prompt: 'Camera frames ALL characters in a wide shot, showing the full group dynamic and spatial relationships' },
  { value: 'user-closeup', label: 'Close-up ke KAMU (user)', prompt: 'Camera focuses tightly on [YOU / Reference Person] in a close-up, capturing every micro-expression on your face' },
  { value: 'user-medium', label: 'Medium shot KAMU', prompt: 'Medium shot framing [YOU / Reference Person] from waist up, showing body language and surroundings' },
  { value: 'char-a-closeup', label: 'Close-up ke Karakter A (slot 1)', prompt: 'Camera pushes into a tight close-up on Character A (first character slot), isolating their emotional reaction' },
  { value: 'char-b-closeup', label: 'Close-up ke Karakter B (slot 2)', prompt: 'Camera pushes into a tight close-up on Character B (second character slot), isolating their emotional reaction' },
  { value: 'couple-two-shot', label: 'Two-shot couple (berdua)', prompt: 'Camera frames both members of the couple in a two-shot, capturing the space and tension between them' },
  { value: 'over-shoulder-a', label: 'Over-shoulder dari Char A ke kamu', prompt: 'Over-the-shoulder shot from Character A looking toward [YOU / Reference Person], showing A in foreground blur and you in focus' },
  { value: 'over-shoulder-user', label: 'Over-shoulder dari kamu ke Char A', prompt: 'Over-the-shoulder shot from [YOU / Reference Person] looking toward Character A, showing your shoulder in foreground and the character in focus' },
  { value: 'detail-hands', label: 'Detail shot — tangan/benda', prompt: 'Extreme close-up on hands or a small object — a drink, a ring, fidgeting fingers — revealing nervous energy through detail' },
  { value: 'detail-eyes', label: 'Detail shot — mata', prompt: 'Extreme close-up on eyes only, filling the frame — capturing the raw emotion, tears forming, or a distant stare' },
  { value: 'split-focus', label: 'Split focus (dua karakter blur-sharp)', prompt: 'Split diopter or rack focus effect — one character sharp in foreground, another character sharp in background, middle blurred' },
  { value: 'pan-char-to-char', label: 'Pan dari Char A ke Char B', prompt: 'Camera pans smoothly from Character A to Character B, visually connecting them while showing the distance between' },
  { value: 'pan-user-to-char', label: 'Pan dari kamu ke karakter', prompt: 'Camera pans smoothly from [YOU / Reference Person] to another character, following the eyeline or emotional connection' },
  { value: 'pan-char-to-user', label: 'Pan dari karakter ke kamu', prompt: 'Camera pans smoothly from a character to [YOU / Reference Person], shifting the narrative focus to your reaction' },
  { value: 'group-reaction', label: 'Reaksi grup (semua sekaligus)', prompt: 'Wide shot capturing the simultaneous reactions of all characters in the frame — a collective emotional beat' },
  { value: 'reflection', label: 'Lewat refleksi (cermin/jendela/air)', prompt: 'Camera captures the scene through a reflection — in a window, mirror, puddle, or phone screen — adding visual depth and metaphor' },
];

// ─── TRANSITIONS ───────────────────────
export const TRANSITIONS: TransitionOption[] = [
  { value: 'hard-cut', label: 'Hard cut — potong langsung', prompt: 'Hard cut — immediate transition to next scene' },
  { value: 'slow-fade', label: 'Slow fade — fade out pelan', prompt: 'Slow fade to black, then fade in to next scene — contemplative pause' },
  { value: 'whip-pan', label: 'Whip pan — gerak cepat', prompt: 'Whip pan transition — camera swings rapidly to blur, revealing next scene' },
  { value: 'match-cut', label: 'Match cut — sambung visual', prompt: 'Match cut — visual element in this scene matches and transitions seamlessly to next scene' },
  { value: 'dissolve', label: 'Dissolve — overlap transisi', prompt: 'Cross dissolve — this scene fades as next scene fades in, overlapping momentarily' },
  { value: 'smash-cut', label: 'Smash cut — kontras dramatis', prompt: 'Smash cut — abrupt dramatic transition creating stark contrast with next scene' },
  { value: 'fade-white', label: 'Fade to white — terang lalu hilang', prompt: 'Fade to white — scene brightens to pure white before revealing next scene' },
  { value: 'j-cut', label: 'J-cut — audio duluan', prompt: 'J-cut — audio from next scene begins before the visual transitions, creating anticipation' },
  { value: 'l-cut', label: 'L-cut — visual duluan', prompt: 'L-cut — visual transitions to next scene while audio from current scene continues, creating continuity' },
  { value: 'iris-close', label: 'Iris close — lingkaran mengecil', prompt: 'Iris close — circular vignette closes in on a focal point before transitioning' },
  { value: 'none', label: 'Tidak ada (scene terakhir)', prompt: 'End of sequence — no transition' },
];

// ─── SCENE MOODS ───────────────────────
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
  { value: 'awkward-warmth', label: 'Canggung tapi hangat', prompt: 'Awkward warmth — the uncomfortable but genuine attempt to reconnect, clumsy but heartfelt.' },
  { value: 'sudden-realization', label: 'Tiba-tiba sadar sesuatu', prompt: 'A moment of sudden realization — something clicks, eyes widen slightly, breath catches. Everything changes in an instant.' },
  { value: 'playful-melancholy', label: 'Main-main tapi sedih', prompt: 'Playful on the surface but deeply sad underneath — laughter that trails off into silence, smiles that crack.' },
  { value: 'cold-distance', label: 'Jarak yang dingin', prompt: 'Emotional coldness — deliberate distance, averted gazes, bodies angled away. The warmth has left.' },
  { value: 'fragile-peace', label: 'Damai yang rapuh', prompt: 'Fragile peace — a momentary truce where everyone pretends things are okay, but one word could shatter it all.' },
];

// ─── SCENE ACTIONS (what characters are doing) ───────────────────────
export const SCENE_ACTIONS: SceneActionOption[] = [
  // Diam / Solo
  { value: 'diam-stare', label: 'Diam menatap kosong', prompt: 'Characters sitting in complete silence, each staring into the distance, lost in their own thoughts — no one speaks, the weight of unspoken words fills the air' },
  { value: 'lirik-diam', label: 'Diam-diam saling lirik', prompt: 'Characters sneaking quiet glances at each other when they think no one is looking, then quickly averting their eyes — a silent game of unacknowledged attention' },
  { value: 'ambil-napas-berat', label: 'Ambil napas berat', prompt: 'One character takes a deep, heavy breath — chest rising and falling slowly, as if the air itself is heavy. Others notice but say nothing.' },
  { value: 'tunduk-pelan', label: 'Tunduk pelan — menahan emosi', prompt: 'A character slowly lowers their head, chin dropping to chest, shoulders deflating with quiet defeat — holding back a wave of emotion' },
  { value: 'senyum-paksa', label: 'Senyum paksa', prompt: 'Characters forcing small polite smiles that do not reach their eyes — a collective mask of composure barely holding together' },

  // Ngobrol / Interaksi
  { value: 'ngobrol-semua', label: '💬 Semua lagi ngobrol santai', prompt: 'ALL characters engaged in casual group conversation — talking, gesturing, occasional laughter — a warm social moment, everyone participating and making eye contact' },
  { value: 'ngobrol-sebagian', label: '💬 Sebagian ngobrol, sisanya diam', prompt: 'SOME characters engaged in animated conversation while OTHERS sit quietly on the side, listening or lost in thought — a visible social divide within the group' },
  { value: 'ngobrol-dua-spesifik', label: '💬 Dua karakter ngobrol intens', prompt: 'TWO characters leaning in toward each other in deep, intense one-on-one conversation — the rest of the group fades into background, this private exchange is the focus' },
  { value: 'ngobrol-bisik', label: '💬 Bisik-bisik (whispering)', prompt: 'Characters whispering to each other conspiratorially — heads close together, hands cupping mouths, excluding others from the conversation' },
  { value: 'ngobrol-canggung', label: '💬 Ngobrol canggung — forced small talk', prompt: 'Characters attempting forced small talk — awkward pauses, topics that fizzle out, uncomfortable laughter — everyone knows this conversation is performative' },

  // Ketawa / Emosi positif
  { value: 'ketawa-bareng', label: '😂 Ketawa bareng', prompt: 'The whole group erupts in genuine laughter — heads thrown back, hands slapping table, eyes crinkling — a rare moment of shared joy breaking through the tension' },
  { value: 'ketawa-sebagian', label: '😂 Beberapa ketawa, sisanya diam', prompt: 'SOME characters laughing at something while OTHERS remain stone-faced or look away — the contrast between joy and pain is striking' },
  { value: 'senyum-genuine', label: '😊 Senyum tulus sesaat', prompt: 'A genuine, fleeting smile crosses one character\'s face — brief but real — before fading back into the weight of the moment' },

  // Reaksi / Nyimak
  { value: 'nyimak-fokus', label: '👂 Beberapa char lagi nyimak', prompt: 'Several characters LISTENING intently — leaning forward, nodding slightly, fully absorbed in what someone is saying — their body language shows deep engagement' },
  { value: 'nyimak-bosan', label: '👂 Nyimak tapi udah bosen', prompt: 'Characters PRETENDING to listen but clearly checked out — eyes glazing over, fidgeting, glancing at phones — polite but disengaged' },
  { value: 'kaget', label: '😮 Reaksi kaget', prompt: 'Characters reacting with surprise — eyes widening, mouths opening, bodies jerking slightly backward — something unexpected just happened or was said' },
  { value: 'terdiam-setelah-bicara', label: '😶 Semua terdiam setelah seseorang bicara', prompt: 'Complete silence falls over the group after someone says something heavy — frozen reactions, processing, the weight of words hanging in the air' },

  // Aktivitas / Gerakan
  { value: 'makan-minum', label: '🍽 Lagi makan/minum bareng', prompt: 'Characters eating and drinking together — picking at food, sipping drinks, the ritual of a shared meal creating a natural rhythm to the scene' },
  { value: 'pegang-minuman', label: '☕ Pegang minuman diam', prompt: 'Characters holding their drinks in silence — wrapping both hands around cups, staring into the liquid, using the drink as a shield against conversation' },
  { value: 'main-hp', label: '📱 Ada yang main HP', prompt: 'One or more characters scrolling through their phone — a modern escape from awkward social situations, thumb moving absently, eyes avoiding others' },
  { value: 'berdiri-pergi', label: '🚶 Seseorang berdiri & pergi', prompt: 'One character slowly stands up and walks away from the group — not dramatic, just quiet departure — the others watch or pretend not to notice' },
  { value: 'datang-baru', label: '🚶 Seseorang baru datang', prompt: 'A character arrives and approaches the group — the dynamic shifts, heads turn, the energy changes with the new presence' },
  { value: 'tepuk-bahu', label: '🤝 Tepuk bahu / sentuh tangan', prompt: 'One character gently touches another\'s shoulder or hand — a small gesture of comfort, connection, or reassurance that speaks volumes' },
  { value: 'peluk', label: '🫂 Pelukan', prompt: 'Two characters embrace — it might be warm and tight, or stiff and awkward, or one-sided — but the physical contact breaks through emotional barriers' },
  { value: 'mainkan-jari', label: '🫰 Mainkan jari gelisah', prompt: 'A character nervously fidgeting — interlocking fingers, spinning a ring, drumming on the table — physical manifestation of inner turmoil' },
  { value: 'usap-mata', label: '😢 Usap mata — nahan nangis', prompt: 'A character subtly wiping the corner of their eye — trying to hide that tears are forming, quickly looking away, maintaining composure by a thread' },
  { value: 'nangis', label: '😭 Nangis (ga ditahan)', prompt: 'A character breaks down crying — tears flowing freely, body shaking slightly, no longer trying to hide the emotion — raw and unfiltered grief' },

  // Konflik
  { value: 'argue-pelan', label: '😤 Berdebat pelan/tegang', prompt: 'Two characters in a tense, low-voiced argument — sharp whispers, clenched jaws, restrained anger — trying not to make a scene but clearly furious' },
  { value: 'diam-pasca-ribut', label: '😶 Diam setelah ribut', prompt: 'The aftermath of a conflict — everyone sitting in heavy silence, some with crossed arms, others looking down — the anger has passed but the damage lingers' },
  { value: 'buang-muka', label: '😤 Buang muka — ga mau lihat', prompt: 'Characters deliberately looking away from each other — turned bodies, averted gazes, the physical manifestation of emotional walls going up' },
];

/** Character micro-actions for individual direction */
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
