# context.md — ManWhoCantBeMoved Prompt Generator
# Jawaban lengkap untuk semua Open Questions dari AI Agent

---

## JAWABAN OPEN QUESTIONS

### 1. Character Data — LENGKAP DI SINI

Gunakan data ini persis. Semua 60+ karakter sudah siap.

```typescript
// data/characters.ts

export type CharacterGroup =
  | 'anime_sss'
  | 'anime_ss'
  | 'anime_s'
  | 'kdrama_sss'
  | 'kdrama_ss'
  | 'film_sss'
  | 'film_ss'
  | 'film_s';

export interface Character {
  id: string;
  label: string;          // tampil di UI dropdown
  promptName: string;     // tampil di output prompt
  group: CharacterGroup;
  isFilmLiveAction?: boolean; // true = perlu upload foto karakter terpisah
}

export const CHARACTERS: Character[] = [
  // ── ANIME ★★★ ──────────────────────────────────────────────────────────
  { id:'TAKAKI',   label:'Takaki Toono — 5cm/s ★★★',            group:'anime_sss', promptName:'Takaki Toono (from 5 Centimeters Per Second anime)' },
  { id:'KOUSEI',   label:'Kousei Arima — Your Lie in April ★★★', group:'anime_sss', promptName:'Kousei Arima (from Your Lie in April anime)' },
  { id:'TOMOYA',   label:'Tomoya Okazaki — Clannad ★★★',         group:'anime_sss', promptName:'Tomoya Okazaki (from Clannad: After Story anime)' },
  { id:'JINTA',    label:'Jintan — Anohana ★★★',                  group:'anime_sss', promptName:'Jinta "Jintan" Yadomi (from Anohana anime), still grieving Menma' },
  { id:'TSUKASA',  label:'Tsukasa — Plastic Memories ★★★',        group:'anime_sss', promptName:'Tsukasa Mizugaki (from Plastic Memories anime)' },
  { id:'VIOLET',   label:'Violet Evergarden ★★★',                 group:'anime_sss', promptName:'Violet Evergarden (from Violet Evergarden anime)' },
  { id:'OKABE',    label:'Okabe — Steins;Gate ★★★',               group:'anime_sss', promptName:'Rintarou Okabe (from Steins;Gate anime)' },
  { id:'GUTS',     label:'Guts — Berserk ★★★',                    group:'anime_sss', promptName:'Guts (from Berserk anime/manga), wearing casual dark clothes' },
  { id:'OBITO',    label:'Obito Uchiha — Naruto ★★★',             group:'anime_sss', promptName:'Obito Uchiha (from Naruto Shippuden anime), civilian clothes, no mask' },
  { id:'JIRAIYA',  label:'Jiraiya — Naruto ★★★',                  group:'anime_sss', promptName:'Jiraiya the Sannin (from Naruto anime)' },
  { id:'LELOUCH',  label:'Lelouch — Code Geass ★★★',              group:'anime_sss', promptName:'Lelouch vi Britannia (from Code Geass anime)' },
  { id:'KAWORU',   label:'Kaworu Nagisa — Evangelion ★★★',        group:'anime_sss', promptName:'Kaworu Nagisa (from Neon Genesis Evangelion anime)' },
  { id:'OTONASHI', label:'Otonashi — Angel Beats ★★★',            group:'anime_sss', promptName:'Yuzuru Otonashi (from Angel Beats! anime)' },
  { id:'MAFUYU',   label:'Mafuyu Sato — Given ★★★',               group:'anime_sss', promptName:'Mafuyu Sato (from Given anime), holding his red guitar' },
  { id:'BAN',      label:'Ban — Seven Deadly Sins ★★★',           group:'anime_sss', promptName:'Ban (from The Seven Deadly Sins anime)' },
  { id:'MELIODAS', label:'Meliodas — Seven Deadly Sins ★★★',      group:'anime_sss', promptName:'Meliodas (from The Seven Deadly Sins anime)' },
  { id:'SAYAKA',   label:'Sayaka Miki — Madoka Magica ★★★',       group:'anime_sss', promptName:'Sayaka Miki (from Puella Magi Madoka Magica anime)' },
  { id:'TAKEMOTO', label:'Takemoto Yuuta — Honey & Clover ★★★',   group:'anime_sss', promptName:'Yuuta Takemoto (from Honey and Clover anime)' },
  { id:'YAMCHA',   label:'Yamcha — Dragon Ball Z ★★★',            group:'anime_sss', promptName:'Yamcha (from Dragon Ball Z anime), casual tracksuit' },

  // ── ANIME ★★ ───────────────────────────────────────────────────────────
  { id:'NARUTO',    label:'Naruto Uzumaki ★★',              group:'anime_ss', promptName:'Naruto Uzumaki (from Naruto anime)' },
  { id:'SASUKE',    label:'Sasuke Uchiha ★★',               group:'anime_ss', promptName:'Sasuke Uchiha (from Naruto anime)' },
  { id:'ROCKLEE',   label:'Rock Lee — Naruto ★★',           group:'anime_ss', promptName:'Rock Lee (from Naruto anime)' },
  { id:'KANEKI',    label:'Kaneki Ken — Tokyo Ghoul ★★',    group:'anime_ss', promptName:'Ken Kaneki (from Tokyo Ghoul anime), white hair, black casual clothes, round glasses' },
  { id:'SUBARU',    label:'Subaru Natsuki — Re:Zero ★★',    group:'anime_ss', promptName:'Subaru Natsuki (from Re:Zero anime), grey tracksuit' },
  { id:'HACHIMAN',  label:'Hachiman Hikigaya — OreGairu ★★',group:'anime_ss', promptName:'Hachiman Hikigaya (from OreGairu anime), school uniform, dead-fish eyes' },
  { id:'YUI',       label:'Yui Yuigahama — OreGairu ★★',   group:'anime_ss', promptName:'Yui Yuigahama (from OreGairu anime), school uniform' },
  { id:'DAZAI',     label:'Dazai Osamu — Bungo Stray Dogs ★★',group:'anime_ss', promptName:'Dazai Osamu (from Bungo Stray Dogs anime), bandaged wrists, tan trench coat' },
  { id:'REI',       label:'Rei Kiriyama — 3-gatsu ★★',     group:'anime_ss', promptName:'Rei Kiriyama (from 3-gatsu no Lion anime), school uniform' },
  { id:'JIN',       label:'Jin — Samurai Champloo ★★',      group:'anime_ss', promptName:'Jin (from Samurai Champloo anime), ronin kimono, round wire-frame glasses' },
  { id:'ZENITSU',   label:'Zenitsu Agatsuma — Demon Slayer ★★',group:'anime_ss', promptName:'Zenitsu Agatsuma (from Demon Slayer anime), civilian yukata' },
  { id:'RYUJI',     label:'Ryuji Takasu — Toradora ★★',    group:'anime_ss', promptName:'Ryuji Takasu (from Toradora anime), school uniform' },
  { id:'KIRITO',    label:'Kirito — SAO ★★',                group:'anime_ss', promptName:'Kirito / Kazuto Kirigaya (from Sword Art Online anime), casual dark clothes' },
  { id:'YANO',      label:'Yano Motoharu — We Were There ★★',group:'anime_ss', promptName:'Yano Motoharu (from Bokura ga Ita anime), school uniform' },
  { id:'BANRI',     label:'Banri Tada — Golden Time ★★',   group:'anime_ss', promptName:'Banri Tada (from Golden Time anime), casual college clothes' },
  { id:'ASTA',      label:'Asta — Black Clover ★★',        group:'anime_ss', promptName:'Asta (from Black Clover anime)' },

  // ── ANIME ★ ────────────────────────────────────────────────────────────
  { id:'MINATO',  label:'Minato Namikaze — Naruto ★',    group:'anime_s', promptName:'Minato Namikaze (from Naruto anime), Hokage ceremonial robes' },
  { id:'LIGHT',   label:'Light Yagami — Death Note ★',   group:'anime_s', promptName:'Light Yagami (from Death Note anime), school uniform' },
  { id:'L',       label:'L Lawliet — Death Note ★',      group:'anime_s', promptName:'L Lawliet (from Death Note anime), white shirt and jeans, hunched sitting' },
  { id:'VEGETA',  label:'Vegeta — Dragon Ball Z ★',      group:'anime_s', promptName:'Vegeta (from Dragon Ball Z anime), casual Capsule Corp navy shirt' },
  { id:'LEVI',    label:'Levi Ackerman — AoT ★',         group:'anime_s', promptName:'Levi Ackerman (from Attack on Titan anime), white dress shirt with cravat' },
  { id:'GOJO',    label:'Gojo Satoru — JJK ★',           group:'anime_s', promptName:'Gojo Satoru (from Jujutsu Kaisen anime), white hair, casual white shirt' },
  { id:'ZORO',    label:'Roronoa Zoro — One Piece ★',    group:'anime_s', promptName:'Roronoa Zoro (from One Piece anime), three sword sheaths' },
  { id:'SIMON',   label:'Simon — Gurren Lagann ★',       group:'anime_s', promptName:'Simon (from Gurren Lagann anime), goggles on head' },
  { id:'MIKASA',  label:'Mikasa — Attack on Titan ★',    group:'anime_s', promptName:'Mikasa Ackerman (from Attack on Titan anime), survey corps uniform, red scarf' },

  // ── K-DRAMA ★★★ ────────────────────────────────────────────────────────
  { id:'KD_JIHU',      label:'Ji-hoo — Boys Over Flowers ★★★',      group:'kdrama_sss', isFilmLiveAction:true, promptName:'Yoon Ji-hoo (from Boys Over Flowers K-drama)' },
  { id:'KD_CHILBONG',  label:'Chilbongie — Reply 1994 ★★★',          group:'kdrama_sss', isFilmLiveAction:true, promptName:'Kim Jae-joon "Chilbongie" (from Reply 1994 K-drama), waited years for Na-jung who chose someone else' },
  { id:'KD_YOUNGDO',   label:'Kim Young-do — The Heirs ★★★',         group:'kdrama_sss', isFilmLiveAction:true, promptName:'Kim Young-do (from The Heirs K-drama)' },
  { id:'KD_JIPY',      label:'Han Ji-pyeong — Start-Up ★★★',         group:'kdrama_sss', isFilmLiveAction:true, promptName:'Han Ji-pyeong (from Start-Up K-drama), the man who secretly wrote all the letters' },
  { id:'KD_WANGWOOK',  label:'Wang Wook — Moon Lovers ★★★',          group:'kdrama_sss', isFilmLiveAction:true, promptName:'Wang Wook (from Moon Lovers: Scarlet Heart Ryeo K-drama)' },
  { id:'KD_WANGSO',    label:'Wang So — Moon Lovers ★★★',            group:'kdrama_sss', isFilmLiveAction:true, promptName:'Wang So (from Moon Lovers: Scarlet Heart Ryeo K-drama), traditional goryeo-era royal hanbok' },
  { id:'KD_JUNGHWAN',  label:'Jung-hwan — Reply 1988 ★★★',           group:'kdrama_sss', isFilmLiveAction:true, promptName:'Kim Jung-hwan (from Reply 1988 K-drama), 1980s casual clothing, the man who was too late to confess' },
  { id:'KD_SUNJAE',    label:'Sun-jae — Lovely Runner ★★★',          group:'kdrama_sss', isFilmLiveAction:true, promptName:'Ryu Sun-jae (from Lovely Runner K-drama)' },
  { id:'KD_KIMSIN',    label:'Kim Shin — Goblin ★★★',                group:'kdrama_sss', isFilmLiveAction:true, promptName:'Kim Shin the Goblin (from Goblin K-drama), waited 900+ years' },
  { id:'KD_JAEWON',    label:'Jae-won — Lovestruck in City ★★★',     group:'kdrama_sss', isFilmLiveAction:true, promptName:'Park Jae-won (from Lovestruck in the City K-drama), casual city clothes' },
  { id:'KD_WOONG',     label:'Choi Woong — Our Beloved Summer ★★★',  group:'kdrama_sss', isFilmLiveAction:true, promptName:'Choi Woong (from Our Beloved Summer K-drama), cozy knit sweater' },
  { id:'KD_SAEROYI',   label:'Sae-ro-yi — Itaewon Class ★★★',        group:'kdrama_sss', isFilmLiveAction:true, promptName:'Park Sae-ro-yi (from Itaewon Class K-drama)' },
  { id:'KD_SUNOH',     label:'Sun-oh — Love Alarm ★★★',              group:'kdrama_sss', isFilmLiveAction:true, promptName:'Hwang Sun-oh (from Love Alarm K-drama)' },
  { id:'KD_BAEKIJIN',  label:'Baek Yi-jin — Twenty-Five Twenty-One ★★★', group:'kdrama_sss', isFilmLiveAction:true, promptName:'Baek Yi-jin (from Twenty-Five Twenty-One K-drama)' },

  // ── K-DRAMA ★★ ─────────────────────────────────────────────────────────
  { id:'KD_HONGSEOK',  label:'Hong-seok — True Beauty ★★',   group:'kdrama_ss', isFilmLiveAction:true, promptName:'Hong-seok (from True Beauty K-drama)' },
  { id:'KD_DOSHAN',    label:'Nam Do-san — Start-Up ★★',      group:'kdrama_ss', isFilmLiveAction:true, promptName:'Nam Do-san (from Start-Up K-drama), hoodie and jeans' },

  // ── FILM WESTERN ★★★ ───────────────────────────────────────────────────
  { id:'FM_JOEL',      label:'Joel — Eternal Sunshine ★★★',       group:'film_sss', isFilmLiveAction:true, promptName:'Joel Barish (from Eternal Sunshine of the Spotless Mind film), winter coat' },
  { id:'FM_TOM',       label:'Tom Hansen — 500 Days of Summer ★★★',group:'film_sss', isFilmLiveAction:true, promptName:'Tom Hansen (from 500 Days of Summer film), casual layered clothes' },
  { id:'FM_SEBASTIAN', label:'Sebastian — La La Land ★★★',         group:'film_sss', isFilmLiveAction:true, promptName:'Sebastian (from La La Land film), jazz bar casual outfit' },
  { id:'FM_GATSBY',    label:'Gatsby — The Great Gatsby ★★★',      group:'film_sss', isFilmLiveAction:true, promptName:'Jay Gatsby (from The Great Gatsby film), white linen suit, champagne glass in hand' },
  { id:'FM_RICK',      label:'Rick Blaine — Casablanca ★★★',       group:'film_sss', isFilmLiveAction:true, promptName:'Rick Blaine (from Casablanca film), white dinner jacket, cigarette' },
  { id:'FM_DUKE',      label:'Noah/Duke — The Notebook ★★★',       group:'film_sss', isFilmLiveAction:true, promptName:'Noah Calhoun / Duke (from The Notebook film), worn denim shirt' },
  { id:'FM_SNAPE',     label:'Severus Snape — Harry Potter ★★★',   group:'film_sss', isFilmLiveAction:true, promptName:'Severus Snape (from Harry Potter films), black teaching robes — Always' },
  { id:'FM_WOLVERINE', label:'Wolverine / Logan — X-Men ★★★',      group:'film_sss', isFilmLiveAction:true, promptName:'Wolverine / Logan (from X-Men films), plaid flannel shirt, sideburns, lit cigar' },
  { id:'FM_FORREST',   label:'Forrest Gump ★★★',                   group:'film_sss', isFilmLiveAction:true, promptName:'Forrest Gump (from Forrest Gump film), casual plaid shirt, sitting on bench with chocolates' },
  { id:'FM_TOBEY',     label:'Spider-Man (Tobey ver.) ★★★',        group:'film_sss', isFilmLiveAction:true, promptName:'Peter Parker / Spider-Man as in Sam Raimi\'s Spider-Man films (Tobey Maguire), red and blue suit without mask' },
  { id:'FM_ANDREW',    label:'Spider-Man (Andrew ver.) ★★★',       group:'film_sss', isFilmLiveAction:true, promptName:'Peter Parker / Spider-Man as in The Amazing Spider-Man films (Andrew Garfield), red-black suit without mask' },
  { id:'FM_TOMH',      label:'Spider-Man (Tom Holland ver.) ★★★',  group:'film_sss', isFilmLiveAction:true, promptName:'Peter Parker / Spider-Man as in MCU films (Tom Holland), red-black tech suit without mask' },

  // ── FILM WESTERN ★★ ────────────────────────────────────────────────────
  { id:'FM_CALEB',     label:'Caleb — Crazy Stupid Love ★★',  group:'film_ss', isFilmLiveAction:true, promptName:'Caleb Weaver (from Crazy, Stupid, Love film)' },
  { id:'FM_THEODORE',  label:'Theodore — Her ★★',             group:'film_ss', isFilmLiveAction:true, promptName:'Theodore Twombly (from Her film), round glasses, melancholic face' },
  { id:'FM_DEADPOOL',  label:'Deadpool — Marvel ★★',          group:'film_ss', isFilmLiveAction:true, promptName:'Deadpool / Wade Wilson (Marvel), red and black suit without mask' },

  // ── FILM WESTERN ★ ─────────────────────────────────────────────────────
  { id:'FM_DRSTRANGE', label:'Doctor Strange — MCU ★',        group:'film_s', isFilmLiveAction:true, promptName:'Doctor Strange (MCU), dark teal sorcerer robes, Eye of Agamotto' },
  { id:'FM_SHADOW',    label:'Shadow figure — mysterious',    group:'film_s', promptName:'a completely featureless black silhouette of a human figure with two small glowing red points where eyes would be' },
];

export const CHARACTER_GROUPS: { id: CharacterGroup; label: string }[] = [
  { id:'anime_sss',  label:'Anime — Broken Heart ★★★' },
  { id:'anime_ss',   label:'Anime — Sangat Relevan ★★' },
  { id:'anime_s',    label:'Anime — Relevan ★' },
  { id:'kdrama_sss', label:'K-Drama — Broken Heart ★★★' },
  { id:'kdrama_ss',  label:'K-Drama — Relevan ★★' },
  { id:'film_sss',   label:'Film Western — Broken Heart ★★★' },
  { id:'film_ss',    label:'Film Western — Relevan ★★' },
  { id:'film_s',     label:'Film Western — Lainnya' },
];
```

---

### 2. Scene Presets — LENGKAP DI SINI

```typescript
// data/scenes.ts

export interface ScenePreset {
  id: string;
  label: string;
  group: 'indonesia' | 'cinematic' | 'fantasy';
  loc: string;
  tod: string;
  weather: string;
  furniture: string;
  food: string;
  bgProps: string;
}

export const SCENE_PRESETS: ScenePreset[] = [
  // ── INDONESIA ──────────────────────────────────────────────────────────
  {
    id:'indomaret', group:'indonesia', label:'Depan Indomaret — malam',
    loc:'in front of an Indomaret convenience store (Indonesian chain), nighttime',
    tod:'late night, dark sky, fluorescent store lighting and warm streetlamps',
    weather:'clear still air, slightly humid',
    furniture:'small round white plastic table with white mono-block plastic chairs, iconic Indonesian Indomaret style',
    food:'Golda coffee (brown glass bottle with Golda logo label), Taro snack bags, Chitato chips, bottled Aqua water',
    bgProps:'motorcycles parked to the side, Indomaret signage (red-yellow-blue) overhead, fluorescent store light spilling onto pavement',
  },
  {
    id:'alfamart', group:'indonesia', label:'Depan Alfamart — malam',
    loc:'in front of an Alfamart convenience store, nighttime, Indonesia',
    tod:'late night, dark sky, fluorescent store lighting and warm streetlamps',
    weather:'clear still air, slightly humid',
    furniture:'small round white plastic table with red plastic chairs, Alfamart style',
    food:'Golda coffee bottles, Sampoerna Mild cigarette pack, lighter and ashtray on table',
    bgProps:'motorcycles parked to the side, Alfamart red signage overhead',
  },
  {
    id:'angkringan', group:'indonesia', label:'Angkringan pinggir jalan — malam',
    loc:'an angkringan roadside food stall at late night in Indonesia, warm yellow lamps hanging above',
    tod:'late night, dark sky, fluorescent store lighting and warm streetlamps',
    weather:'smoke and steam from nearby food stalls',
    furniture:'low wooden angkringan bench',
    food:'Es teh manis in tall plastic cup with black straw, assorted gorengan fried snacks on spread newspaper',
    bgProps:'street food gerobak cart visible in background, yellow sodium streetlamp casting warm glow',
  },
  {
    id:'kos', group:'indonesia', label:'Teras kos-kosan — golden hour',
    loc:'front porch of an Indonesian kos-kosan (boarding house), late afternoon golden hour',
    tod:'golden hour sunset, warm orange-amber sky',
    weather:'clear still air, slightly humid',
    furniture:'concrete staircase steps, sitting on the stairs',
    food:'Golda coffee bottles, Sampoerna Mild cigarette pack, lighter and ashtray',
    bgProps:'motorcycles parked in the courtyard, pot plants, wooden front door visible',
  },
  {
    id:'warteg', group:'indonesia', label:'Depan Warteg — sore',
    loc:'in front of a warteg (Indonesian working-class food stall), late afternoon',
    tod:'golden hour sunset, warm orange-amber sky',
    weather:'smoke and steam from nearby food stalls',
    furniture:'plastic folding table with mismatched plastic chairs',
    food:'Es teh manis in tall plastic cup with black straw, assorted gorengan on spread newspaper',
    bgProps:'street food gerobak cart visible in background, yellow sodium streetlamp casting warm glow',
  },
  {
    id:'pinggirjalan', group:'indonesia', label:'Trotoar pinggir jalan — malam',
    loc:'Indonesian city sidewalk at night, yellow mercury streetlamp overhead',
    tod:'late night, dark sky, fluorescent store lighting and warm streetlamps',
    weather:'clear still air, slightly humid',
    furniture:'concrete curb, sitting directly on the ground edge',
    food:'Golda coffee (brown glass bottle with Golda logo label), Taro snack bags, Chitato chips, bottled Aqua water',
    bgProps:'street food gerobak cart visible in background, yellow sodium streetlamp casting warm glow',
  },
  {
    id:'warnet', group:'indonesia', label:'Warnet — malam',
    loc:'Indonesian internet cafe (warnet) at night, dim fluorescent lighting, computer monitors glowing in background',
    tod:'late night, dark sky, fluorescent store lighting and warm streetlamps',
    weather:'clear still air, slightly humid',
    furniture:'plastic folding table with mismatched plastic chairs',
    food:'Indomie goreng in styrofoam cup, plastic fork, bottled Aqua water',
    bgProps:'minimal, shallow depth of field bokeh background',
  },
  {
    id:'bakso', group:'indonesia', label:'Gerobak bakso — malam',
    loc:'by a meatball soup gerobak cart on a busy Indonesian street market at night',
    tod:'late night, dark sky, fluorescent store lighting and warm streetlamps',
    weather:'smoke and steam from nearby food stalls',
    furniture:'plastic folding table with mismatched plastic chairs',
    food:'mangkok bakso with meatballs, tofu, noodles, green onion, sambal on the side',
    bgProps:'street food gerobak cart visible in background, yellow sodium streetlamp casting warm glow',
  },
  // ── CINEMATIC ──────────────────────────────────────────────────────────
  {
    id:'beach', group:'cinematic', label:'Beach pier — golden hour',
    loc:'wooden pier extending out over a calm ocean beach',
    tod:'golden hour sunset, warm orange and amber sky',
    weather:'clear still air, slightly humid',
    furniture:'wooden pier railing, leaning or sitting on it',
    food:'nothing — table is completely bare',
    bgProps:'calm ocean, wooden dock planks, sea grass gently blowing',
  },
  {
    id:'rooftop', group:'cinematic', label:'NYC Rooftop — night',
    loc:'rooftop of a high-rise building in New York City, night',
    tod:'late night, dark sky, city lights below',
    weather:'clear still air',
    furniture:'rooftop concrete ledge, city panorama behind',
    food:'specialty latte in ceramic cup, croissant on small plate',
    bgProps:'city skyline with blinking lights visible in distance',
  },
  {
    id:'rooftopseoul', group:'cinematic', label:'Seoul Rooftop — Han River view',
    loc:'Seoul apartment rooftop at blue hour, Han River and city lights visible',
    tod:'blue hour twilight, deep indigo sky, first stars appearing',
    weather:'clear still air',
    furniture:'rooftop concrete ledge, city panorama behind',
    food:'specialty latte in ceramic cup',
    bgProps:'Han River visible in background, Seoul night skyline with city lights',
  },
  {
    id:'torii', group:'cinematic', label:'Japanese torii path — cherry blossoms',
    loc:'ancient Japanese torii gate path through bamboo forest at dusk',
    tod:'golden hour sunset, warm orange-amber sky',
    weather:'light drizzle, wet pavement reflections',
    furniture:'park bench, wooden slats with iron frame',
    food:'nothing — table is completely bare',
    bgProps:'cherry blossom petals drifting in the air, paper lanterns hanging above',
  },
  {
    id:'trainstation', group:'cinematic', label:'Rainy train station — neon',
    loc:'Japanese train station platform, rain streaking the windows at night',
    tod:'blue hour twilight, deep indigo sky, first stars appearing',
    weather:'light drizzle, wet pavement reflections',
    furniture:'park bench, wooden slats with iron frame',
    food:'specialty latte in ceramic cup',
    bgProps:'neon signs in multiple colors, rain-slicked reflective street',
  },
  {
    id:'cyberpunk', group:'cinematic', label:'Cyberpunk alley — neon rain',
    loc:'rain-soaked cyberpunk city alleyway at night, glowing neon reflections in puddles',
    tod:'late night, dark sky with neon-lit atmosphere',
    weather:'light drizzle, wet pavement reflections',
    furniture:'concrete staircase steps',
    food:'Extra Joss energy drink sachets, Krating Daeng cans, chips',
    bgProps:'neon signs in multiple colors, rain-slicked reflective street',
  },
  {
    id:'schoolhall', group:'cinematic', label:'Empty school hallway',
    loc:'empty school hallway, late afternoon sunlight streaming through windows',
    tod:'golden hour sunset, warm amber light through windows',
    weather:'clear still air',
    furniture:'concrete staircase steps',
    food:'nothing — table is completely bare',
    bgProps:'school lockers and bulletin boards lining a long corridor',
  },
  {
    id:'cafe', group:'cinematic', label:'Cozy indie cafe — warm lamps',
    loc:'cozy indie cafe interior with warm Edison bulb lighting',
    tod:'golden hour sunset, warm ambient light',
    weather:'clear still air',
    furniture:'diner booth with red vinyl seats and formica table',
    food:'specialty latte in ceramic cup, croissant on small plate',
    bgProps:'minimal, shallow depth of field bokeh background',
  },
  {
    id:'hospital', group:'cinematic', label:'Hospital corridor — late night',
    loc:'hospital corridor at late night, cold fluorescent lighting, quiet and empty',
    tod:'late night, cold fluorescent light',
    weather:'clear still air',
    furniture:'park bench, wooden slats with iron frame',
    food:'nothing — table is completely bare',
    bgProps:'minimal, shallow depth of field bokeh background',
  },
  // ── FANTASY / ANIME ────────────────────────────────────────────────────
  {
    id:'sakura', group:'fantasy', label:'Sakura park — anime spring',
    loc:'sakura cherry blossom park in anime-style spring evening',
    tod:'blue hour twilight, deep indigo sky, first stars appearing',
    weather:'windy, loose petals blowing',
    furniture:'park bench, wooden slats with iron frame',
    food:'nothing — table is completely bare',
    bgProps:'cherry blossom petals drifting in the air, paper lanterns hanging above',
  },
  {
    id:'ninjatemple', group:'fantasy', label:'Hidden ninja village — night',
    loc:'hidden ninja village rooftop at night, traditional Japanese architecture',
    tod:'late night, dark sky with soft paper lantern glow',
    weather:'clear still air',
    furniture:'wooden pier railing, leaning or sitting on it',
    food:'nothing — table is completely bare',
    bgProps:'cherry blossom petals drifting in the air, paper lanterns hanging above',
  },
  {
    id:'soulreaper', group:'fantasy', label:'Soul Society corridor — moonlight',
    loc:'stone corridor lit by moonlight, traditional Japanese castle architecture, cherry blossoms drifting',
    tod:'late night, moonlight and torch glow',
    weather:'clear still air',
    furniture:'wooden pier railing, leaning or sitting on it',
    food:'nothing — table is completely bare',
    bgProps:'minimal, shallow depth of field bokeh background',
  },
  {
    id:'afterlife', group:'fantasy', label:'Afterlife limbo — Angel Beats',
    loc:'a peaceful limbo afterlife space, soft warm endless ambient light, Angel Beats aesthetic',
    tod:'eternal soft golden-white ambient light with no clear source, dreamlike',
    weather:'clear still air',
    furniture:'park bench, wooden slats with iron frame',
    food:'nothing — table is completely bare',
    bgProps:'minimal, shallow depth of field bokeh background',
  },
];
```

---

### 3. Pose List — LENGKAP DI SINI

```typescript
// data/poses.ts

export interface PoseOption {
  value: string;
  label: string;
  group: string;
}

export const POSES: PoseOption[] = [
  // ── DUDUK DIAM ─────────────────────────────────────────────────────────
  { group:'Duduk — Diam', label:'Duduk — stare kosong ke depan',
    value:'sitting on chair leaning forward with elbows on table, staring blankly into the distance, thousand-yard stare' },
  { group:'Duduk — Diam', label:'Duduk — bersandar nengok atas',
    value:'sitting leaning back on chair, one arm draped over chair back, looking up at the sky above' },
  { group:'Duduk — Diam', label:'Duduk — megang minuman hening',
    value:'sitting with both hands wrapped around a drink cup, staring quietly down at the table' },
  { group:'Duduk — Diam', label:'Duduk — muka ditutup tangan',
    value:'sitting with face buried in both hands, elbows resting on knees, silent despair' },
  { group:'Duduk — Diam', label:'Duduk — dagu ditopang melamun',
    value:'sitting with chin resting on one hand, elbow on table, gazing sideways into nothing, deep in thought' },
  { group:'Duduk — Diam', label:'Duduk — kaki silang santai',
    value:'sitting cross-legged on chair, arms loosely folded in lap, looking sideways' },
  { group:'Duduk — Diam', label:'Duduk — kaki nangkring',
    value:'sitting with one ankle resting on other knee, slouched but present' },
  { group:'Duduk — Diam', label:'Duduk lantai — lutut dipeluk',
    value:'sitting on ground with back against wall, knees pulled up to chest' },

  // ── DUDUK AKTIVITAS ────────────────────────────────────────────────────
  { group:'Duduk — Aktivitas', label:'Baca buku',
    value:'sitting, reading a book held open in both hands, fully absorbed in reading' },
  { group:'Duduk — Aktivitas', label:'Baca koran',
    value:'sitting, holding a folded newspaper open in front of face, headline partially visible' },
  { group:'Duduk — Aktivitas', label:'Buku nutup muka dari atas',
    value:'sitting slightly reclined, an open book resting flat directly on top of face covering eyes entirely' },
  { group:'Duduk — Aktivitas', label:'Main HP — Xiaomi 14T casing hitam',
    value:'sitting with both thumbs actively on a Xiaomi 14T smartphone with plain matte black case, looking down at screen scrolling' },
  { group:'Duduk — Aktivitas', label:'Main Mobile Legends — HP hitam',
    value:'sitting intensely focused on Xiaomi 14T smartphone with plain black case, thumbs tapping fast, Mobile Legends game interface visible on screen' },
  { group:'Duduk — Aktivitas', label:'Pegang kacamata — thoughtful',
    value:'sitting holding glasses by one arm between thumb and forefinger, glasses slightly lowered, thoughtful gaze' },

  // ── DUDUK EKSPRESI ─────────────────────────────────────────────────────
  { group:'Duduk — Ekspresi', label:'Menunduk sedih',
    value:'sitting with head bowed down and shoulders slightly dropped, quiet sadness radiating from posture' },
  { group:'Duduk — Ekspresi', label:'Ketawa pura-pura ikhlas',
    value:'sitting laughing with the group but the laugh is forced and performative and does not reach the eyes, pura-pura ikhlas' },
  { group:'Duduk — Ekspresi', label:'Senyum tipis pura-pura ikhlas',
    value:'sitting with a thin polite smile but eyes carry a heavier story, smile never reaching them, senyum tipis pura-pura ikhlas' },
  { group:'Duduk — Ekspresi', label:'Berfikir — jari di pelipis',
    value:'sitting with index finger pressing gently against temple, looking slightly downward, deep in thought processing something heavy' },
  { group:'Duduk — Ekspresi', label:'Ngobrol sama group',
    value:'sitting actively talking and gesturing with hands toward the group in natural conversation' },
  { group:'Duduk — Ekspresi', label:'Kepala rebah di atas lengan',
    value:'sitting with arms crossed on table surface, head resting sideways on folded arms' },

  // ── BERDIRI / LAINNYA ──────────────────────────────────────────────────
  { group:'Berdiri / Lainnya', label:'Berdiri — tangan silang',
    value:'standing behind the seated group, arms crossed, slightly apart from everyone, silent observer' },
  { group:'Berdiri / Lainnya', label:'Berdiri — satu tangan di saku',
    value:'standing with one hand in trouser pocket, looking sideways pensively' },
  { group:'Berdiri / Lainnya', label:'Berdiri — sandaran tembok',
    value:'standing leaning back against the wall, head tilted slightly upward' },
  { group:'Berdiri / Lainnya', label:'Crouching spider-pose di meja',
    value:'crouching on top of table or railing in a spider-like pose, knees bent, arms resting on knees' },
  { group:'Berdiri / Lainnya', label:'Duduk di pinggir — kaki menjuntai',
    value:'sitting on the railing or ledge edge, legs dangling freely below' },
  { group:'Berdiri / Lainnya', label:'Tangan di bahu user',
    value:'one hand resting gently on user\'s shoulder, turning slightly toward user with an understanding expression' },
  { group:'Berdiri / Lainnya', label:'Rebahan — ngeliatin langit',
    value:'lying fully on a bench, one arm behind head, staring straight up at the sky or ceiling' },
];
```

---

### 4. Food & Drinks — LENGKAP DI SINI

```typescript
// data/food.ts

export interface FoodOption { value: string; label: string; group: string; }

export const FOOD_OPTIONS: FoodOption[] = [
  { group:'Kopi & Minuman Indonesia', label:'Golda kopi + Taro + Chitato',
    value:'Golda coffee (brown glass bottle with Golda logo label), Taro snack bags, Chitato chips, bottled Aqua water on the table' },
  { group:'Kopi & Minuman Indonesia', label:'Golda + rokok Sampoerna',
    value:'Golda coffee bottles, Sampoerna Mild cigarette pack, lighter and ashtray on table' },
  { group:'Kopi & Minuman Indonesia', label:'Golda + Gudang Garam',
    value:'Golda coffee bottles, Gudang Garam cigarette pack, lighter on table' },
  { group:'Kopi & Minuman Indonesia', label:'Es teh + gorengan',
    value:'Es teh manis (iced sweet tea) in tall plastic cup with black straw, assorted gorengan fried snacks on spread newspaper' },
  { group:'Kopi & Minuman Indonesia', label:'Kopi hitam tubruk',
    value:'Kopi hitam tubruk (strong black Indonesian coffee) in a small glass with saucer' },
  { group:'Kopi & Minuman Indonesia', label:'Kopi susu gelas bening',
    value:'Kopi susu (milk coffee) in clear glass, condensed milk swirling at the bottom' },
  { group:'Kopi & Minuman Indonesia', label:'Teh Botol Sosro + keripik',
    value:'Teh Botol Sosro bottled iced tea, keripik singkong chips' },
  { group:'Kopi & Minuman Indonesia', label:'Bir ABC + kacang',
    value:'ABC beer cans, peanuts in a small bowl, ashtray' },
  { group:'Kopi & Minuman Indonesia', label:'Bir Bintang botol',
    value:'Bintang beer bottles, peanuts, ashtray on table' },
  { group:'Makanan Indonesia', label:'Indomie goreng styrofoam',
    value:'Indomie goreng in styrofoam cup, plastic fork, bottled Aqua water' },
  { group:'Makanan Indonesia', label:'Indomie rebus + telur',
    value:'Indomie soup bowl, soft boiled egg, spring onion garnish' },
  { group:'Makanan Indonesia', label:'Mangkok bakso lengkap',
    value:'mangkok bakso with meatballs, tofu, noodles, green onion, sambal on the side' },
  { group:'Makanan Indonesia', label:'Nasi bungkus daun pisang',
    value:'nasi bungkus wrapped in banana leaf, plastic bag tie visible' },
  { group:'Makanan Indonesia', label:'Gorengan assorted',
    value:'assorted gorengan (bakwan, tempe, tahu isi) on newspaper, sambal' },
  { group:'Makanan Indonesia', label:'McD takeout',
    value:'McDonalds paper bag, large Coca-Cola cup with straw, french fries container' },
  { group:'Snacks', label:'Taro + Chitato + Oreo',
    value:'Taro snack chips, Chitato potato chips, Oreo pack arranged on table' },
  { group:'Snacks', label:'Piattos + Yupi + Milo',
    value:'Piattos chips, Yupi gummy candy pack, Milo box drink' },
  { group:'Snacks', label:'Energy drinks + chips',
    value:'Extra Joss energy drink sachets, Krating Daeng cans, chips' },
  { group:'Cafe / Aesthetic', label:'Kopi specialty + croissant',
    value:'specialty latte in ceramic cup, croissant on small plate, glass of water' },
  { group:'Cafe / Aesthetic', label:'Ramen bowl Jepang',
    value:'ramen bowl with chashu pork, soft egg, nori, chopsticks resting on bowl' },
  { group:'Cafe / Aesthetic', label:'Whiskey + ashtray',
    value:'whiskey glasses half-full, ice cubes, scattered cigarette butts in ashtray' },
  { group:'Cafe / Aesthetic', label:'Meja kosong',
    value:'nothing — table is completely bare' },
];
```

---

### 5. Art Styles — LENGKAP DI SINI

```typescript
// data/styles.ts

export interface StyleOption { value: string; label: string; }

export const ART_STYLES: StyleOption[] = [
  { label:'Realistic (cinematic)',    value:'fully photorealistic, cinematic natural lighting, HDR rendering, accurate skin texture' },
  { label:'Anime (Spider-Verse)',     value:'anime 2D cel-shaded style, Spider-Verse visual language, Ben-Day halftone dots, thick black outlines, vibrant flat colors' },
  { label:'Anime (standard TV)',      value:'standard modern TV anime style, clean lineart, vibrant expressive colors' },
  { label:'Semi-realistic (digital)', value:'semi-realistic digital painting, painterly concept art style, textured brushwork' },
  { label:'Manga B&W',               value:'manga ink style, black and white with screentone shading' },
];

export const PHOTO_STYLES: StyleOption[] = [
  { label:'iPhone photography (natural)', value:'iPhone 15 Pro photography style, natural HDR, ProRes color science, no filters, realistic and clean' },
  { label:'35mm film cinematic',          value:'cinematic 35mm film, Kodak grain texture, anamorphic lens flare, warm push processing' },
  { label:'Editorial fashion',            value:'editorial fashion photography, professional rim lighting, high fashion clean aesthetic' },
  { label:'Anime key visual',             value:'anime key visual style, vibrant saturated cel-shading, dramatic highlights and shadows' },
  { label:'Hyperrealistic digital art',   value:'hyperrealistic digital art, ultra-detailed rendering, sharp focus, 8K quality' },
  { label:'Lo-fi / lomography',           value:'lo-fi lomography, light leaks, vignette edges, gritty saturated grain' },
  { label:'Oil painting',                 value:'oil painting with textured impressionistic brushwork, warm rich palette' },
  { label:'Manga panel B&W',             value:'manga panel composition, monochrome, screentone shading, dramatic speed lines' },
];

export const CAMERA_ANGLES: StyleOption[] = [
  { label:'Elevated 3/4 front-right',  value:'slightly elevated 3/4 front-right angle, all characters visible, natural balanced group perspective' },
  { label:'Eye-level — documentary',   value:'eye-level front view slightly off-center, documentary street photography feel' },
  { label:'3/4 rear left (user back)', value:'3/4 rear left angle, back of user visible, faces of other characters in frame' },
  { label:'Wide side shot',            value:'wide establishing side shot, horizontal composition, full environment visible' },
  { label:'Low angle — dramatic',      value:'low angle from ground level looking up dramatically at the group' },
  { label:'Bird\'s eye view',          value:'bird\'s eye view directly above the table and group' },
  { label:'Over-shoulder POV',         value:'over-the-shoulder POV from one character looking toward the rest of the group' },
  { label:'Close-up + bokeh BG',       value:'close-up on one person, others beautifully blurred in bokeh background' },
];

export const COMPOSITIONS: StyleOption[] = [
  { label:'All in frame (balanced)',  value:'all characters fit in frame, balanced natural group composition' },
  { label:'User-centered',           value:'user slightly centered in frame, other characters naturally arranged around user' },
  { label:'User left — chars right', value:'user positioned left of frame, characters filling the right side' },
  { label:'Layered depth',           value:'layered depth, foreground character sharp, background characters in slight bokeh' },
  { label:'Symmetrical',             value:'symmetrical composition with equal visual weight on both sides' },
];
```

---

### 6. Zustand vs useReducer

**Gunakan `useReducer` + React Context.** Tidak perlu Zustand. State complexity aplikasi ini masih manageable dengan useReducer, dan tidak ada dependency tambahan.

```typescript
// lib/types.ts

export interface CharacterSlot {
  id: string;           // nanoid()
  characterKey: string | null;
  pose: string;
  artStyle: string;
}

export interface BuilderState {
  scenePresetId: string;
  sceneCustomDetail: string;
  tod: string;
  weather: string;
  furniture: string;
  food: string;
  bgProps: string;
  characterSlots: CharacterSlot[];  // max 8
  userPhotoUrl: string | null;
  userOutfit: string;
  userPose: string;
  vibe: string;
  cameraAngle: string;
  photoStyle: string;
  composition: string;
}

export type BuilderAction =
  | { type: 'SET_SCENE_PRESET'; payload: string }
  | { type: 'SET_SCENE_FIELD'; field: keyof BuilderState; payload: string }
  | { type: 'ADD_CHARACTER_SLOT' }
  | { type: 'REMOVE_CHARACTER_SLOT'; id: string }
  | { type: 'UPDATE_CHARACTER_SLOT'; id: string; field: keyof CharacterSlot; payload: string }
  | { type: 'SET_USER_PHOTO'; payload: string | null }
  | { type: 'SET_USER_FIELD'; field: 'userOutfit' | 'userPose'; payload: string }
  | { type: 'SET_VIBE'; payload: string }
  | { type: 'SET_CAMERA'; field: 'cameraAngle' | 'photoStyle' | 'composition'; payload: string };
```

---

### 7. Vercel Deploy

Setup dari scratch dengan langkah ini:
1. `npx create-next-app@latest cant-be-moved --typescript --tailwind --app --src-dir=false`
2. Push ke GitHub repo baru: `github.com/Gimm17/cant-be-moved`
3. Login Vercel → Import GitHub repo → Deploy otomatis
4. URL default: `cant-be-moved.vercel.app`

---

### 8. Domain

Gunakan default Vercel URL dulu (`cant-be-moved.vercel.app`). Custom domain bisa ditambahkan nanti via Vercel dashboard → Settings → Domains.

---

## DESIGN DIRECTION

**Aesthetic:** Dark mode default. Nuansa malam hari, melancholic tapi clean.
- Background: `#0F1117` (hampir hitam)
- Surface: `#1A1D27`
- Border: `#2D3142`
- Accent: `#6C63FF` (purple-indigo)
- Text primary: `#F0F0F0`
- Text secondary: `#8B8FA8`
- Success chip active: `#6C63FF` bg, `#C4C1FF` text
- Star ratings: `#F59E0B` amber

**Font:** `Inter` (sudah include Next.js default)

**Layout desktop:** Split — builder panel kiri (60%), prompt preview kanan (40%), sticky
**Layout mobile:** Stacked — builder full width, prompt output di bawah dengan sticky bottom bar "Copy Prompt"
