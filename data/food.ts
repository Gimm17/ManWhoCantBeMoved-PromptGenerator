export interface FoodOption { value: string; label: string; prompt: string; group: string; }

export const FOOD_OPTIONS: FoodOption[] = [
  // Kopi & Minuman Indonesia
  { group:'Kopi & Minuman Indonesia', value:'golda-taro-chitato', label:'Golda kopi + Taro + Chitato', prompt:'Golda coffee (brown glass bottle with Golda logo label), Taro snack bags, Chitato chips, bottled Aqua water on the table' },
  { group:'Kopi & Minuman Indonesia', value:'golda-sampoerna', label:'Golda + rokok Sampoerna', prompt:'Golda coffee bottles, Sampoerna Mild cigarette pack, lighter and ashtray on table' },
  { group:'Kopi & Minuman Indonesia', value:'golda-gudang-garam', label:'Golda + Gudang Garam', prompt:'Golda coffee bottles, Gudang Garam cigarette pack, lighter on table' },
  { group:'Kopi & Minuman Indonesia', value:'es-teh-gorengan', label:'Es teh + gorengan', prompt:'Es teh manis (iced sweet tea) in tall plastic cup with black straw, assorted gorengan fried snacks on spread newspaper' },
  { group:'Kopi & Minuman Indonesia', value:'kopi-tubruk', label:'Kopi hitam tubruk', prompt:'Kopi hitam tubruk (strong black Indonesian coffee) in a small glass with saucer' },
  { group:'Kopi & Minuman Indonesia', value:'kopi-susu', label:'Kopi susu gelas bening', prompt:'Kopi susu (milk coffee) in clear glass, condensed milk swirling at the bottom' },
  { group:'Kopi & Minuman Indonesia', value:'teh-botol-keripik', label:'Teh Botol Sosro + keripik', prompt:'Teh Botol Sosro bottled iced tea, keripik singkong chips' },
  { group:'Kopi & Minuman Indonesia', value:'bir-abc', label:'Bir ABC + kacang', prompt:'ABC beer cans, peanuts in a small bowl, ashtray' },
  { group:'Kopi & Minuman Indonesia', value:'bir-bintang', label:'Bir Bintang botol', prompt:'Bintang beer bottles, peanuts, ashtray on table' },
  { group:'Kopi & Minuman Indonesia', value:'pop-ice', label:'Pop Ice sachet', prompt:'Pop Ice powder drink mixed in tall clear plastic cup with ice, colorful sachet packet beside it' },
  { group:'Kopi & Minuman Indonesia', value:'es-jeruk', label:'Es jeruk peras', prompt:'fresh squeezed orange juice (es jeruk) in clear glass with ice, orange half on the side' },
  { group:'Kopi & Minuman Indonesia', value:'kopi-sachet', label:'Kopi sachet + gelas', prompt:'Kapal Api or ABC coffee sachet torn open, steaming black coffee in simple glass mug, spoon inside' },

  // Makanan Indonesia
  { group:'Makanan Indonesia', value:'indomie-goreng', label:'Indomie goreng styrofoam', prompt:'Indomie goreng in styrofoam cup, plastic fork, bottled Aqua water' },
  { group:'Makanan Indonesia', value:'indomie-rebus', label:'Indomie rebus + telur', prompt:'Indomie soup bowl, soft boiled egg, spring onion garnish' },
  { group:'Makanan Indonesia', value:'bakso', label:'Mangkok bakso lengkap', prompt:'mangkok bakso with meatballs, tofu, noodles, green onion, sambal on the side' },
  { group:'Makanan Indonesia', value:'nasi-bungkus', label:'Nasi bungkus daun pisang', prompt:'nasi bungkus wrapped in banana leaf, plastic bag tie visible' },
  { group:'Makanan Indonesia', value:'gorengan', label:'Gorengan assorted', prompt:'assorted gorengan (bakwan, tempe, tahu isi) on newspaper, sambal' },
  { group:'Makanan Indonesia', value:'mcd', label:'McD takeout', prompt:'McDonalds paper bag, large Coca-Cola cup with straw, french fries container' },
  { group:'Makanan Indonesia', value:'sate-lontong', label:'Sate ayam + lontong', prompt:'bamboo skewers of sate ayam with peanut sauce drizzle, sliced lontong rice cake, sliced shallots and chili' },
  { group:'Makanan Indonesia', value:'nasi-goreng', label:'Nasi goreng piring', prompt:'nasi goreng fried rice on plate, sunny-side-up egg on top, kerupuk crackers, sliced cucumber, sambal on the side' },
  { group:'Makanan Indonesia', value:'martabak-manis', label:'Martabak manis', prompt:'martabak manis (thick sweet pancake) sliced into squares, chocolate and peanut filling visible, in cardboard box' },
  { group:'Makanan Indonesia', value:'seblak', label:'Seblak mangkok', prompt:'seblak (spicy crackers soup) in deep bowl, kerupuk, mie, sosis, egg, red spicy broth, plastic spoon' },
  { group:'Makanan Indonesia', value:'mie-ayam', label:'Mie ayam bakso', prompt:'mie ayam (chicken noodle) bowl with sliced chicken, green onion, fried shallots, separate bakso meatball soup bowl' },
  { group:'Makanan Indonesia', value:'nasi-padang', label:'Nasi Padang bungkus', prompt:'nasi Padang wrapped in brown paper, rendang and sambal visible, side dish portions stacked' },

  // Snacks
  { group:'Snacks', value:'taro-chitato-oreo', label:'Taro + Chitato + Oreo', prompt:'Taro snack chips, Chitato potato chips, Oreo pack arranged on table' },
  { group:'Snacks', value:'piattos-yupi', label:'Piattos + Yupi + Milo', prompt:'Piattos chips, Yupi gummy candy pack, Milo box drink' },
  { group:'Snacks', value:'energy-chips', label:'Energy drinks + chips', prompt:'Extra Joss energy drink sachets, Krating Daeng cans, chips' },
  { group:'Snacks', value:'rokok-kopi', label:'Rokok + kopi saja', prompt:'cigarette pack (Sampoerna Mild), lighter, ashtray with cigarette butts, single glass of black coffee' },
  { group:'Snacks', value:'pop-mie', label:'Pop Mie cup', prompt:'Pop Mie instant noodle cup with lid peeled open, plastic fork, steam rising, bottled water' },

  // Cafe / Aesthetic
  { group:'Cafe / Aesthetic', value:'specialty-croissant', label:'Kopi specialty + croissant', prompt:'specialty latte in ceramic cup with latte art, croissant on small plate, glass of water' },
  { group:'Cafe / Aesthetic', value:'ramen', label:'Ramen bowl Jepang', prompt:'ramen bowl with chashu pork, soft egg, nori, chopsticks resting on bowl' },
  { group:'Cafe / Aesthetic', value:'whiskey', label:'Whiskey + ashtray', prompt:'whiskey glasses half-full, ice cubes, scattered cigarette butts in ashtray, dim warm light' },
  { group:'Cafe / Aesthetic', value:'wine-cheese', label:'Wine + cheese board', prompt:'two wine glasses with red wine, wooden cheese board with crackers and grapes, candlelight' },
  { group:'Cafe / Aesthetic', value:'matcha-dessert', label:'Matcha + dessert', prompt:'matcha latte in ceramic mug, Japanese cheesecake slice on small plate, minimal aesthetic' },
  { group:'Cafe / Aesthetic', value:'meja-kosong', label:'Meja kosong', prompt:'nothing — table is completely bare' },
];
