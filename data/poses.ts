export interface PoseOption {
  value: string;
  label: string;
  prompt: string;
  group: string;
}

export const POSES: PoseOption[] = [
  // ── Duduk — Diam ──
  { group:'Duduk — Diam', value:'duduk-stare', label:'Duduk — stare kosong ke depan', prompt:'sitting on chair leaning forward with elbows on table, staring blankly into the distance, thousand-yard stare' },
  { group:'Duduk — Diam', value:'duduk-bersandar', label:'Duduk — bersandar nengok atas', prompt:'sitting leaning back on chair, one arm draped over chair back, looking up at the sky above' },
  { group:'Duduk — Diam', value:'duduk-muka-ditutup', label:'Duduk — muka ditutup tangan', prompt:'sitting with face buried in both hands, elbows resting on knees, silent despair' },
  { group:'Duduk — Diam', value:'duduk-dagu-ditopang', label:'Duduk — dagu ditopang melamun', prompt:'sitting with chin resting on one hand, elbow on table, gazing sideways into nothing, deep in thought' },
  { group:'Duduk — Diam', value:'duduk-kaki-silang', label:'Duduk — kaki silang santai', prompt:'sitting cross-legged on chair, arms loosely folded in lap, looking sideways' },
  { group:'Duduk — Diam', value:'duduk-kaki-nangkring', label:'Duduk — kaki nangkring', prompt:'sitting with one ankle resting on other knee, slouched but present' },
  { group:'Duduk — Diam', value:'duduk-lantai-lutut', label:'Duduk lantai — lutut dipeluk', prompt:'sitting on ground with back against wall, knees pulled up to chest, arms wrapped around legs' },
  { group:'Duduk — Diam', value:'duduk-kepala-nunduk', label:'Duduk — nunduk lihat lantai', prompt:'sitting hunched forward, head dropped down staring at the floor between feet, completely withdrawn' },
  { group:'Duduk — Diam', value:'duduk-rebah-meja', label:'Duduk — rebah di meja', prompt:'sitting with arms crossed flat on the table, head resting sideways on folded arms, eyes half-closed' },

  // ── Duduk — Makan & Minum ──
  { group:'Duduk — Makan & Minum', value:'duduk-megang-minuman', label:'Megang minuman — hening', prompt:'sitting with both hands wrapped around a drink cup, staring quietly down at the table, holding warmth' },
  { group:'Duduk — Makan & Minum', value:'minum-teguk', label:'Lagi minum — teguk', prompt:'sitting, tilting a cup or bottle to lips mid-drink, throat exposed, eyes half-closed while swallowing' },
  { group:'Duduk — Makan & Minum', value:'minum-botol', label:'Minum dari botol', prompt:'sitting, drinking directly from a glass bottle held with one hand, head tilted back slightly' },
  { group:'Duduk — Makan & Minum', value:'minum-sedotan', label:'Nyedot minuman — sedotan', prompt:'sitting, sipping from a tall plastic cup through a straw, cheeks slightly hollowed from sucking, eyes looking sideways' },
  { group:'Duduk — Makan & Minum', value:'makan-sendok', label:'Lagi makan — sendok di mulut', prompt:'sitting, putting a spoonful of food into mouth, spoon halfway in, other hand holding bowl steady' },
  { group:'Duduk — Makan & Minum', value:'makan-sumpit', label:'Lagi makan — angkat mie sumpit', prompt:'sitting, lifting noodles with chopsticks from a bowl, noodle strands hanging mid-air between bowl and mouth' },
  { group:'Duduk — Makan & Minum', value:'makan-tangan', label:'Makan pakai tangan', prompt:'sitting, eating with bare hand Indonesian style (right hand), pinching rice and side dish together, left hand on table' },
  { group:'Duduk — Makan & Minum', value:'gigit-gorengan', label:'Gigit gorengan', prompt:'sitting, biting into a piece of gorengan fried snack held in one hand, mouth open mid-bite, other hand cupped underneath catching crumbs' },
  { group:'Duduk — Makan & Minum', value:'slurp-indomie', label:'Slurp Indomie', prompt:'sitting, slurping noodles from a styrofoam cup with plastic fork, noodle strands going into open mouth, steam rising' },
  { group:'Duduk — Makan & Minum', value:'tiup-kopi', label:'Tiup kopi panas', prompt:'sitting, holding a small glass of hot coffee close to lips, gently blowing on the surface to cool it, steam visible' },
  { group:'Duduk — Makan & Minum', value:'pegang-gelas-diam', label:'Pegang gelas — pandang jauh', prompt:'sitting, one hand loosely holding a glass on the table, not drinking, just staring into the distance past the glass' },
  { group:'Duduk — Makan & Minum', value:'buka-tutup-botol', label:'Buka tutup botol', prompt:'sitting, twisting open a bottle cap with one hand, other hand gripping the bottle body, about to take first sip' },
  { group:'Duduk — Makan & Minum', value:'cheers-angkat', label:'Cheers — angkat gelas', prompt:'sitting, raising a glass or bottle up in a cheers toast gesture toward someone, slight half-smile' },
  { group:'Duduk — Makan & Minum', value:'aduk-sendok', label:'Aduk minuman — sendok', prompt:'sitting, lazily stirring a drink with a small spoon, circular motion, eyes looking elsewhere not at the cup' },

  // ── Duduk — Snacking ──
  { group:'Duduk — Snacking', value:'ambil-ciki', label:'Tangan ambil ciki dari bungkus', prompt:'sitting, hand reaching into an open chip bag pulling out a single chip, other hand resting on table' },
  { group:'Duduk — Snacking', value:'makan-ciki', label:'Ngunyah ciki', prompt:'sitting, chewing a chip or snack with mouth slightly full, crumbs on fingers, casual relaxed posture' },
  { group:'Duduk — Snacking', value:'buka-bungkus-snack', label:'Buka bungkus snack', prompt:'sitting, tearing open a snack bag with both hands pulling apart the top seal, about to eat' },
  { group:'Duduk — Snacking', value:'lempar-snack-mulut', label:'Lempar snack ke mulut', prompt:'sitting, head tilted back, tossing a small snack or peanut upward to catch it in open mouth' },
  { group:'Duduk — Snacking', value:'pegang-snack-mikir', label:'Pegang snack — mikir', prompt:'sitting, holding a half-eaten chip or snack between fingers near chin, staring into space while chewing slowly and thinking' },
  { group:'Duduk — Snacking', value:'bagi-snack', label:'Nawarin snack ke sebelah', prompt:'sitting, extending an open snack bag toward the person next to them, offering to share, casual friendly gesture' },

  // ── Duduk — Rokok ──
  { group:'Duduk — Rokok', value:'ngerokok-stare', label:'Ngerokok — stare ke depan', prompt:'sitting with a lit cigarette between index and middle finger, resting hand on table, thin smoke trail rising, staring blankly forward' },
  { group:'Duduk — Rokok', value:'ngerokok-hisap', label:'Ngerokok — lagi hisap', prompt:'sitting, cigarette pressed to lips mid-drag, cheeks slightly hollowed from inhaling, smoke curling from the tip' },
  { group:'Duduk — Rokok', value:'ngerokok-buang-asap', label:'Ngerokok — buang asap ke atas', prompt:'sitting, head tilted slightly upward, exhaling a long stream of cigarette smoke upward into the night air' },
  { group:'Duduk — Rokok', value:'ngerokok-asbak', label:'Ngerokok — ketuk abu ke asbak', prompt:'sitting, tapping cigarette ash off the tip into an ashtray with a gentle finger tap, eyes looking down at the tray' },
  { group:'Duduk — Rokok', value:'nyalain-rokok', label:'Nyalain rokok — korek api', prompt:'sitting, cupping hands around a lighter flame to light a cigarette in mouth, face briefly illuminated by the small fire' },
  { group:'Duduk — Rokok', value:'rokok-bibir-no-hand', label:'Rokok nempel di bibir — no hands', prompt:'sitting with a lit cigarette dangling loosely from lips without touching it, both hands occupied with something else, smoke trailing up past one eye' },
  { group:'Duduk — Rokok', value:'rokok-tangan-menjuntai', label:'Rokok — tangan menjuntai', prompt:'sitting, arm hanging loosely over chair armrest or knee, lit cigarette held loosely between fingers pointing downward, smoke drifting up' },

  // ── Duduk — HP & Gadget ──
  { group:'Duduk — HP & Gadget', value:'main-hp', label:'Main HP — scrolling', prompt:'sitting with both thumbs actively on a smartphone with plain matte black case, looking down at screen scrolling' },
  { group:'Duduk — HP & Gadget', value:'main-ml', label:'Main Mobile Legends', prompt:'sitting intensely focused on smartphone with plain black case, thumbs tapping fast, Mobile Legends game interface visible on screen' },
  { group:'Duduk — HP & Gadget', value:'hp-foto-makanan', label:'HP — foto makanan di meja', prompt:'sitting, holding phone up with one hand to take a photo of the food on the table, framing the shot on screen' },
  { group:'Duduk — HP & Gadget', value:'hp-tunjukin-layar', label:'HP — tunjukin layar ke sebelah', prompt:'sitting, holding phone screen facing outward toward the person next to them, showing something on the screen' },
  { group:'Duduk — HP & Gadget', value:'hp-ketik-chat', label:'HP — ketik chat serius', prompt:'sitting, typing intensely on phone with both thumbs, brow slightly furrowed, composing a serious message' },
  { group:'Duduk — HP & Gadget', value:'earphone-dengerin', label:'Earphone — dengerin lagu', prompt:'sitting with wired earphones plugged in connected to phone on table, one earbud in ear, eyes half-closed, head slightly tilted, absorbed in music' },
  { group:'Duduk — HP & Gadget', value:'hp-telfon', label:'HP — angkat telepon', prompt:'sitting, holding phone to ear with one hand, other hand resting on table, listening to someone on the phone with serious expression' },

  // ── Duduk — Baca & Mikir ──
  { group:'Duduk — Baca & Mikir', value:'baca-buku', label:'Baca buku', prompt:'sitting, reading a book held open in both hands, fully absorbed in reading' },
  { group:'Duduk — Baca & Mikir', value:'baca-koran', label:'Baca koran', prompt:'sitting, holding a folded newspaper open in front of face, headline partially visible' },
  { group:'Duduk — Baca & Mikir', value:'buku-nutup-muka', label:'Buku nutup muka dari atas', prompt:'sitting slightly reclined, an open book resting flat directly on top of face covering eyes entirely' },
  { group:'Duduk — Baca & Mikir', value:'pegang-kacamata', label:'Pegang kacamata — thoughtful', prompt:'sitting holding glasses by one arm between thumb and forefinger, glasses slightly lowered, thoughtful gaze' },
  { group:'Duduk — Baca & Mikir', value:'nulis-coret', label:'Nulis / coret-coret di kertas', prompt:'sitting, scribbling or writing on a piece of paper or napkin with a pen, head slightly tilted, focused' },
  { group:'Duduk — Baca & Mikir', value:'lipat-kertas', label:'Lipat-lipat kertas / origami', prompt:'sitting, folding a small piece of paper or napkin into shapes absent-mindedly, hands busy but mind elsewhere' },

  // ── Duduk — Ekspresi & Interaksi ──
  { group:'Duduk — Ekspresi', value:'menunduk-sedih', label:'Menunduk sedih', prompt:'sitting with head bowed down and shoulders slightly dropped, quiet sadness radiating from posture' },
  { group:'Duduk — Ekspresi', value:'ketawa-ikhlas', label:'Ketawa pura-pura ikhlas', prompt:'sitting laughing with the group but the laugh is forced and performative and does not reach the eyes' },
  { group:'Duduk — Ekspresi', value:'senyum-tipis', label:'Senyum tipis pura-pura ikhlas', prompt:'sitting with a thin polite smile but eyes carry a heavier story, smile never reaching them' },
  { group:'Duduk — Ekspresi', value:'berfikir-pelipis', label:'Berfikir — jari di pelipis', prompt:'sitting with index finger pressing gently against temple, looking slightly downward, deep in thought processing something heavy' },
  { group:'Duduk — Ekspresi', value:'ngobrol-group', label:'Ngobrol sama group', prompt:'sitting actively talking and gesturing with hands toward the group in natural conversation' },
  { group:'Duduk — Ekspresi', value:'kepala-rebah', label:'Kepala rebah di atas lengan', prompt:'sitting with arms crossed on table surface, head resting sideways on folded arms' },
  { group:'Duduk — Ekspresi', value:'hela-napas', label:'Hela napas panjang', prompt:'sitting, exhaling a deep long breath, cheeks slightly puffed, shoulders dropping with the exhale, exhausted resignation' },
  { group:'Duduk — Ekspresi', value:'garuk-kepala', label:'Garuk kepala — bingung', prompt:'sitting, scratching the back of head with one hand, slight confused or troubled expression, looking sideways' },
  { group:'Duduk — Ekspresi', value:'tepuk-bahu', label:'Tepuk bahu teman di sebelah', prompt:'sitting, reaching one arm sideways to give a comforting pat on the shoulder of the person sitting next to them' },
  { group:'Duduk — Ekspresi', value:'nunjuk-sesuatu', label:'Nunjuk sesuatu sambil cerita', prompt:'sitting, pointing at something in the distance with one finger while talking animatedly to the group, telling a story' },

  // ── Berdiri / Lainnya ──
  { group:'Berdiri / Lainnya', value:'berdiri-silang', label:'Berdiri — tangan silang', prompt:'standing behind the seated group, arms crossed, slightly apart from everyone, silent observer' },
  { group:'Berdiri / Lainnya', value:'berdiri-saku', label:'Berdiri — satu tangan di saku', prompt:'standing with one hand in trouser pocket, looking sideways pensively' },
  { group:'Berdiri / Lainnya', value:'berdiri-tembok', label:'Berdiri — sandaran tembok', prompt:'standing leaning back against the wall, head tilted slightly upward' },
  { group:'Berdiri / Lainnya', value:'crouching-spider', label:'Crouching spider-pose di meja', prompt:'crouching on top of table or railing in a spider-like pose, knees bent, arms resting on knees' },
  { group:'Berdiri / Lainnya', value:'duduk-pinggir', label:'Duduk di pinggir — kaki menjuntai', prompt:'sitting on the railing or ledge edge, legs dangling freely below' },
  { group:'Berdiri / Lainnya', value:'tangan-di-bahu', label:'Tangan di bahu user', prompt:"one hand resting gently on user's shoulder, turning slightly toward user with an understanding expression" },
  { group:'Berdiri / Lainnya', value:'rebahan', label:'Rebahan — ngeliatin langit', prompt:'lying fully on a bench, one arm behind head, staring straight up at the sky or ceiling' },
  { group:'Berdiri / Lainnya', value:'berdiri-ngerokok', label:'Berdiri — ngerokok di pinggir', prompt:'standing slightly apart from the group, one hand in pocket, other hand holding a lit cigarette, looking off into the distance' },
  { group:'Berdiri / Lainnya', value:'jongkok', label:'Jongkok — ala Indonesia', prompt:'squatting low in classic Indonesian jongkok position, arms resting on knees, relaxed casual posture' },
  { group:'Berdiri / Lainnya', value:'berdiri-minum', label:'Berdiri — minum dari botol', prompt:'standing, casually drinking from a bottle with one hand, other hand in pocket, slightly removed from the group' },
];
