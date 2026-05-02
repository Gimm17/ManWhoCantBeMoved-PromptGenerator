export interface ScenePreset {
  id: string;
  label: string;
  group: 'indonesia' | 'cinematic' | 'fantasy';
  loc: string;
  tod: string;      // ID reference
  weather: string;   // ID reference
  furniture: string; // ID reference
  food: string;      // ID reference
  bgProps: string;   // ID reference
}

export const SCENE_PRESETS: ScenePreset[] = [
  { id:'indomaret', group:'indonesia', label:'Depan Indomaret — malam', loc:'in front of an Indomaret convenience store (Indonesian chain), nighttime', tod:'late-night', weather:'clear', furniture:'kursi-indomaret', food:'golda-taro-chitato', bgProps:'motor-indomaret' },
  { id:'alfamart', group:'indonesia', label:'Depan Alfamart — malam', loc:'in front of an Alfamart convenience store, nighttime, Indonesia', tod:'late-night', weather:'clear', furniture:'kursi-alfamart', food:'golda-sampoerna', bgProps:'motor-indomaret' },
  { id:'angkringan', group:'indonesia', label:'Angkringan pinggir jalan — malam', loc:'an angkringan roadside food stall at late night in Indonesia, warm yellow lamps hanging above', tod:'late-night', weather:'asap', furniture:'bangku-angkringan', food:'es-teh-gorengan', bgProps:'gerobak-lampu' },
  { id:'kos', group:'indonesia', label:'Teras kos-kosan — golden hour', loc:'front porch of an Indonesian kos-kosan (boarding house), late afternoon golden hour', tod:'golden-hour', weather:'clear', furniture:'tangga', food:'golda-sampoerna', bgProps:'motor-indomaret' },
  { id:'warteg', group:'indonesia', label:'Depan Warteg — sore', loc:'in front of a warteg (Indonesian working-class food stall), late afternoon', tod:'golden-hour', weather:'asap', furniture:'meja-lipat', food:'es-teh-gorengan', bgProps:'gerobak-lampu' },
  { id:'pinggirjalan', group:'indonesia', label:'Trotoar pinggir jalan — malam', loc:'Indonesian city sidewalk at night, yellow mercury streetlamp overhead', tod:'late-night', weather:'clear', furniture:'trotoar', food:'golda-taro-chitato', bgProps:'gerobak-lampu' },
  { id:'warnet', group:'indonesia', label:'Warnet — malam', loc:'Indonesian internet cafe (warnet) at night, dim fluorescent lighting, computer monitors glowing in background', tod:'late-night', weather:'clear', furniture:'meja-lipat', food:'indomie-goreng', bgProps:'bokeh' },
  { id:'bakso', group:'indonesia', label:'Gerobak bakso — malam', loc:'by a meatball soup gerobak cart on a busy Indonesian street market at night', tod:'late-night', weather:'asap', furniture:'meja-lipat', food:'bakso', bgProps:'gerobak-lampu' },
  { id:'beach', group:'cinematic', label:'Beach pier — golden hour', loc:'wooden pier extending out over a calm ocean beach', tod:'golden-hour', weather:'clear', furniture:'dermaga', food:'meja-kosong', bgProps:'beach-dock' },
  { id:'rooftop', group:'cinematic', label:'NYC Rooftop — night', loc:'rooftop of a high-rise building in New York City, night', tod:'late-night', weather:'clear', furniture:'rooftop-ledge', food:'specialty-croissant', bgProps:'city-skyline' },
  { id:'rooftopseoul', group:'cinematic', label:'Seoul Rooftop — Han River view', loc:'Seoul apartment rooftop at blue hour, Han River and city lights visible', tod:'blue-hour', weather:'clear', furniture:'rooftop-ledge', food:'specialty-croissant', bgProps:'han-river' },
  { id:'torii', group:'cinematic', label:'Japanese torii path — cherry blossoms', loc:'ancient Japanese torii gate path through bamboo forest at dusk', tod:'golden-hour', weather:'drizzle', furniture:'park-bench', food:'meja-kosong', bgProps:'sakura-lanterns' },
  { id:'trainstation', group:'cinematic', label:'Rainy train station — neon', loc:'Japanese train station platform, rain streaking the windows at night', tod:'blue-hour', weather:'drizzle', furniture:'park-bench', food:'specialty-croissant', bgProps:'neon-wet' },
  { id:'cyberpunk', group:'cinematic', label:'Cyberpunk alley — neon rain', loc:'rain-soaked cyberpunk city alleyway at night, glowing neon reflections in puddles', tod:'late-night', weather:'drizzle', furniture:'tangga', food:'energy-chips', bgProps:'neon-wet' },
  { id:'schoolhall', group:'cinematic', label:'Empty school hallway', loc:'empty school hallway, late afternoon sunlight streaming through windows', tod:'golden-hour', weather:'clear', furniture:'tangga', food:'meja-kosong', bgProps:'school-corridor' },
  { id:'cafe', group:'cinematic', label:'Cozy indie cafe — warm lamps', loc:'cozy indie cafe interior with warm Edison bulb lighting', tod:'golden-hour', weather:'clear', furniture:'diner-booth', food:'specialty-croissant', bgProps:'bokeh' },
  { id:'hospital', group:'cinematic', label:'Hospital corridor — late night', loc:'hospital corridor at late night, cold fluorescent lighting, quiet and empty', tod:'late-night', weather:'clear', furniture:'park-bench', food:'meja-kosong', bgProps:'bokeh' },
  { id:'sakura', group:'fantasy', label:'Sakura park — anime spring', loc:'sakura cherry blossom park in anime-style spring evening', tod:'blue-hour', weather:'windy', furniture:'park-bench', food:'meja-kosong', bgProps:'sakura-lanterns' },
  { id:'ninjatemple', group:'fantasy', label:'Hidden ninja village — night', loc:'hidden ninja village rooftop at night, traditional Japanese architecture', tod:'late-night', weather:'clear', furniture:'dermaga', food:'meja-kosong', bgProps:'sakura-lanterns' },
  { id:'soulreaper', group:'fantasy', label:'Soul Society corridor — moonlight', loc:'stone corridor lit by moonlight, traditional Japanese castle architecture, cherry blossoms drifting', tod:'late-night', weather:'clear', furniture:'dermaga', food:'meja-kosong', bgProps:'bokeh' },
  { id:'afterlife', group:'fantasy', label:'Afterlife limbo — Angel Beats', loc:'a peaceful limbo afterlife space, soft warm endless ambient light, Angel Beats aesthetic', tod:'golden-hour', weather:'clear', furniture:'park-bench', food:'meja-kosong', bgProps:'bokeh' },
];
