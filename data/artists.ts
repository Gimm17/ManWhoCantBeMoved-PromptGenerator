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
  // ════════════════════════════════════════
  // 🇺🇸 WESTERN (30 artists)
  // ════════════════════════════════════════
  { id:'W_ADELE', label:'Adele 🇬🇧', promptName:'Adele (British singer), elegant, dark hair, wearing classy outfit', type:'solo', region:'western' },
  { id:'W_LEWIS_CAPALDI', label:'Lewis Capaldi 🇬🇧', promptName:'Lewis Capaldi (Scottish singer), curly brown hair, casual clothes', type:'solo', region:'western' },
  { id:'W_JUSTIN_BIEBER', label:'Justin Bieber 🇨🇦', promptName:'Justin Bieber (Canadian pop singer), casual streetwear hoodie', type:'solo', region:'western' },
  { id:'W_NIKI', label:'NIKI (88rising) 🇮🇩🇺🇸', promptName:'NIKI Zefanya (Indonesian-American R&B singer), long dark hair, stylish casual outfit', type:'solo', region:'western' },
  { id:'W_LANY', label:'LANY (band) 🇺🇸', promptName:'LANY (American indie pop band)', type:'band', region:'western', members:[
    { id:'LANY_PAUL', name:'Paul Klein', role:'vocalist', promptName:'Paul Jason Klein (vocalist of LANY), tall, messy light brown hair, fitted casual clothes' },
    { id:'LANY_LES', name:'Les Priest', role:'keyboardist', promptName:'Charles Leslie Priest (keyboardist of LANY), dark hair, glasses, indie casual style' },
    { id:'LANY_JAKE', name:'Jake Goss', role:'drummer', promptName:'Jake Clifford Goss (drummer of LANY), beard, simple casual clothes' },
  ]},
  { id:'W_OLIVIA_RODRIGO', label:'Olivia Rodrigo 🇺🇸', promptName:'Olivia Rodrigo (American pop singer), long dark hair, youthful casual outfit', type:'solo', region:'western' },
  { id:'W_TAYLOR_SWIFT', label:'Taylor Swift 🇺🇸', promptName:'Taylor Swift (American singer-songwriter), blonde hair, elegant casual outfit', type:'solo', region:'western' },
  { id:'W_BILLIE_EILISH', label:'Billie Eilish 🇺🇸', promptName:'Billie Eilish (American singer), oversized streetwear, distinctive style', type:'solo', region:'western' },
  { id:'W_LANA_DEL_REY', label:'Lana Del Rey 🇺🇸', promptName:'Lana Del Rey (American singer), retro glamour style, dark hair', type:'solo', region:'western' },
  { id:'W_THE_WEEKND', label:'The Weeknd 🇨🇦', promptName:'The Weeknd (Canadian R&B singer), short dark hair, sleek dark outfit', type:'solo', region:'western' },
  { id:'W_TATE_MCRAE', label:'Tate McRae 🇨🇦', promptName:'Tate McRae (Canadian pop singer), young, long hair, trendy outfit', type:'solo', region:'western' },
  { id:'W_CONAN_GRAY', label:'Conan Gray 🇺🇸', promptName:'Conan Gray (American indie pop singer), dark hair, soft features, casual outfit', type:'solo', region:'western' },
  { id:'W_JOJI', label:'Joji (88rising) 🇯🇵🇺🇸', promptName:'Joji (Japanese-Australian lo-fi R&B artist), dark hair, melancholic expression, dark casual clothes', type:'solo', region:'western' },
  { id:'W_MITSKI', label:'Mitski 🇯🇵🇺🇸', promptName:'Mitski (Japanese-American indie singer), short dark hair, simple elegant outfit', type:'solo', region:'western' },
  { id:'W_PHOEBE_BRIDGERS', label:'Phoebe Bridgers 🇺🇸', promptName:'Phoebe Bridgers (American indie singer), blonde hair, signature skeleton suit or casual outfit', type:'solo', region:'western' },
  { id:'W_TOM_ODELL', label:'Tom Odell 🇬🇧', promptName:'Tom Odell (British singer-songwriter), messy blonde hair, casual shirt', type:'solo', region:'western' },
  { id:'W_GRACIE_ABRAMS', label:'Gracie Abrams 🇺🇸', promptName:'Gracie Abrams (American indie pop singer), long brown hair, casual minimalist outfit', type:'solo', region:'western' },
  { id:'W_ED_SHEERAN', label:'Ed Sheeran 🇬🇧', promptName:'Ed Sheeran (British singer-songwriter), red hair, casual simple outfit with guitar', type:'solo', region:'western' },
  { id:'W_SAM_SMITH', label:'Sam Smith 🇬🇧', promptName:'Sam Smith (British singer), elegant outfit, warm expression', type:'solo', region:'western' },
  { id:'W_HOZIER', label:'Hozier 🇮🇪', promptName:'Hozier (Irish singer), tall, curly dark hair, earthy casual outfit', type:'solo', region:'western' },
  { id:'W_NOAH_KAHAN', label:'Noah Kahan 🇺🇸', promptName:'Noah Kahan (American folk singer), curly hair, flannel shirt, outdoorsy look', type:'solo', region:'western' },
  { id:'W_COLDPLAY', label:'Coldplay (band) 🇬🇧', promptName:'Coldplay (British rock band)', type:'band', region:'western', members:[
    { id:'COLDPLAY_CHRIS', name:'Chris Martin', role:'vocalist', promptName:'Chris Martin (vocalist of Coldplay), light brown hair, casual colorful outfit' },
    { id:'COLDPLAY_JONNY', name:'Jonny Buckland', role:'guitarist', promptName:'Jonny Buckland (guitarist of Coldplay), dark hair, casual outfit' },
    { id:'COLDPLAY_GUY', name:'Guy Berryman', role:'bassist', promptName:'Guy Berryman (bassist of Coldplay), dark hair, casual outfit' },
    { id:'COLDPLAY_WILL', name:'Will Champion', role:'drummer', promptName:'Will Champion (drummer of Coldplay), light hair, casual outfit' },
  ]},
  { id:'W_THE_SCRIPT', label:'The Script (band) 🇮🇪', promptName:'The Script (Irish pop rock band)', type:'band', region:'western', members:[
    { id:'SCRIPT_DANNY', name:"Danny O'Donoghue", role:'vocalist', promptName:"Danny O'Donoghue (vocalist of The Script), dark hair, leather jacket" },
    { id:'SCRIPT_MARK', name:'Mark Sheehan', role:'guitarist', promptName:'Mark Sheehan (guitarist of The Script), shaved head, casual dark clothes' },
    { id:'SCRIPT_GLEN', name:'Glen Power', role:'drummer', promptName:'Glen Power (drummer of The Script), light hair, simple casual outfit' },
  ]},
  { id:'W_SNOW_PATROL', label:'Snow Patrol (band) 🇬🇧', promptName:'Snow Patrol (British-Irish rock band)', type:'band', region:'western', members:[
    { id:'SP_GARY', name:'Gary Lightbody', role:'vocalist', promptName:'Gary Lightbody (vocalist of Snow Patrol), dark hair, casual indie outfit' },
    { id:'SP_NATHAN', name:'Nathan Connolly', role:'guitarist', promptName:'Nathan Connolly (guitarist of Snow Patrol), ginger hair, casual outfit' },
  ]},
  { id:'W_CIG_AFTER_SEX', label:'Cigarettes After Sex (band) 🇺🇸', promptName:'Cigarettes After Sex (American ambient pop band)', type:'band', region:'western', members:[
    { id:'CAS_GREG', name:'Greg Gonzalez', role:'vocalist', promptName:'Greg Gonzalez (vocalist of Cigarettes After Sex), dark hair, all-black outfit, dreamy expression' },
  ]},
  { id:'W_THE_1975', label:'The 1975 (band) 🇬🇧', promptName:'The 1975 (British pop rock band)', type:'band', region:'western', members:[
    { id:'1975_MATTY', name:'Matty Healy', role:'vocalist', promptName:'Matty Healy (vocalist of The 1975), curly dark hair, artistic outfit' },
    { id:'1975_ADAM', name:'Adam Hann', role:'guitarist', promptName:'Adam Hann (guitarist of The 1975), dark hair, casual outfit' },
  ]},
  { id:'W_LORD_HURON', label:'Lord Huron (band) 🇺🇸', promptName:'Lord Huron (American indie folk band)', type:'band', region:'western', members:[
    { id:'LH_BEN', name:'Ben Schneider', role:'vocalist', promptName:'Ben Schneider (vocalist of Lord Huron), beard, rugged outdoorsy look' },
  ]},
  { id:'W_TV_GIRL', label:'TV Girl (band) 🇺🇸', promptName:'TV Girl (American indie pop band)', type:'band', region:'western', members:[
    { id:'TVG_BRAD', name:'Brad Petering', role:'vocalist', promptName:'Brad Petering (vocalist of TV Girl), casual indie outfit, retro vibe' },
  ]},
  { id:'W_JEREMY_ZUCKER', label:'Jeremy Zucker 🇺🇸', promptName:'Jeremy Zucker (American indie pop singer), messy hair, casual hoodie and jeans', type:'solo', region:'western' },
  { id:'W_DEAN_LEWIS', label:'Dean Lewis 🇦🇺', promptName:'Dean Lewis (Australian singer-songwriter), dark hair, simple casual outfit', type:'solo', region:'western' },

  // ════════════════════════════════════════
  // 🇮🇩 INDONESIA (30 artists)
  // ════════════════════════════════════════
  { id:'ID_BERNADYA', label:'Bernadya 🇮🇩', promptName:'Bernadya (Indonesian pop singer), young, long dark hair, casual modern outfit', type:'solo', region:'id' },
  { id:'ID_FABIO_ASHER', label:'Fabio Asher 🇮🇩', promptName:'Fabio Asher (Indonesian pop singer), dark hair, casual outfit', type:'solo', region:'id' },
  { id:'ID_MAHALINI', label:'Mahalini 🇮🇩', promptName:'Mahalini (Indonesian pop singer), long dark hair, elegant casual outfit', type:'solo', region:'id' },
  { id:'ID_NADHIF', label:'Nadhif Basalamah 🇮🇩', promptName:'Nadhif Basalamah (Indonesian R&B singer), dark curly hair, streetwear outfit', type:'solo', region:'id' },
  { id:'ID_TULUS', label:'Tulus 🇮🇩', promptName:'Tulus (Indonesian pop singer), glasses, clean-cut, smart casual outfit', type:'solo', region:'id' },
  { id:'ID_RAISA', label:'Raisa 🇮🇩', promptName:'Raisa Andriana (Indonesian pop singer), long dark hair, feminine elegant outfit', type:'solo', region:'id' },
  { id:'ID_PAMUNGKAS', label:'Pamungkas 🇮🇩', promptName:'Pamungkas (Indonesian indie soul singer), curly dark hair, earth-tone casual clothes', type:'solo', region:'id' },
  { id:'ID_FIERSA', label:'Fiersa Besari 🇮🇩', promptName:'Fiersa Besari (Indonesian indie singer-songwriter), long dark hair, beard, flannel shirt, bohemian look', type:'solo', region:'id' },
  { id:'ID_HINDIA', label:'Hindia 🇮🇩', promptName:'Hindia / Baskara Putra (Indonesian indie singer), glasses, artistic casual outfit', type:'solo', region:'id' },
  { id:'ID_NADIN', label:'Nadin Amizah 🇮🇩', promptName:'Nadin Amizah (Indonesian indie singer), hijab, elegant artistic outfit', type:'solo', region:'id' },
  { id:'ID_KUNTO_AJI', label:'Kunto Aji 🇮🇩', promptName:'Kunto Aji (Indonesian indie pop singer), dark hair, casual minimalist outfit', type:'solo', region:'id' },
  { id:'ID_ANDMESH', label:'Andmesh 🇮🇩', promptName:'Andmesh Kamaleng (Indonesian pop singer), dark skin, warm smile, casual outfit', type:'solo', region:'id' },
  { id:'ID_LYODRA', label:'Lyodra 🇮🇩', promptName:'Lyodra Ginting (Indonesian pop singer), long dark hair, elegant outfit', type:'solo', region:'id' },
  { id:'ID_TIARA', label:'Tiara Andini 🇮🇩', promptName:'Tiara Andini (Indonesian pop singer), long dark hair, trendy outfit', type:'solo', region:'id' },
  { id:'ID_VIRGOUN', label:'Virgoun 🇮🇩', promptName:'Virgoun (Indonesian pop singer), dark hair, casual modern outfit', type:'solo', region:'id' },
  { id:'ID_RIZKY_FEBIAN', label:'Rizky Febian 🇮🇩', promptName:'Rizky Febian (Indonesian pop singer), curly hair, stylish casual outfit', type:'solo', region:'id' },
  { id:'ID_ARDHITO', label:'Ardhito Pramono 🇮🇩', promptName:'Ardhito Pramono (Indonesian jazz-pop singer), retro style, artistic outfit', type:'solo', region:'id' },
  { id:'ID_JUDIKA', label:'Judika 🇮🇩', promptName:'Judika (Indonesian pop balladeer), strong build, formal casual outfit', type:'solo', region:'id' },
  { id:'ID_AFGAN', label:'Afgan 🇮🇩', promptName:'Afgan (Indonesian pop singer), clean-cut, smart casual outfit', type:'solo', region:'id' },
  { id:'ID_GANGGA', label:'GANGGA 🇮🇩', promptName:'GANGGA (Indonesian indie singer), dark hair, casual Western-influenced outfit', type:'solo', region:'id' },
  { id:'ID_JUICY_LUICY', label:'Juicy Luicy (band) 🇮🇩', promptName:'Juicy Luicy (Indonesian pop band)', type:'band', region:'id', members:[
    { id:'JL_JULIAN', name:'Julian', role:'vocalist', promptName:'Julian (vocalist of Juicy Luicy), dark hair, casual outfit' },
  ]},
  { id:'ID_SHEILA_ON_7', label:'Sheila On 7 (band) 🇮🇩', promptName:'Sheila On 7 (Indonesian pop rock band)', type:'band', region:'id', members:[
    { id:'SO7_DUTA', name:'Duta', role:'vocalist', promptName:'Duta (vocalist of Sheila On 7), iconic Indonesian rock vocalist, casual outfit' },
  ]},
  { id:'ID_DEWA_19', label:'Dewa 19 (band) 🇮🇩', promptName:'Dewa 19 (Indonesian rock band)', type:'band', region:'id', members:[
    { id:'DEWA_ONCE', name:'Once Mekel', role:'vocalist', promptName:'Once Mekel (vocalist of Dewa 19), long dark hair, rock star outfit' },
    { id:'DEWA_AHMAD', name:'Ahmad Dhani', role:'keyboardist', promptName:'Ahmad Dhani (keyboardist of Dewa 19), glasses, artistic outfit' },
  ]},
  { id:'ID_ARMADA', label:'Armada (band) 🇮🇩', promptName:'Armada (Indonesian pop band)', type:'band', region:'id', members:[
    { id:'ARM_RIZAL', name:'Rizal', role:'vocalist', promptName:'Rizal (vocalist of Armada), dark hair, casual outfit' },
  ]},
  { id:'ID_LAST_CHILD', label:'Last Child (band) 🇮🇩', promptName:'Last Child (Indonesian pop rock band)', type:'band', region:'id', members:[
    { id:'LC_VIRGOUN', name:'Virgoun', role:'vocalist', promptName:'Virgoun (vocalist of Last Child), dark hair, rock casual outfit' },
  ]},
  { id:'ID_GEISHA', label:'Geisha (band) 🇮🇩', promptName:'Geisha (Indonesian pop band)', type:'band', region:'id', members:[
    { id:'GEI_MOMO', name:'Momo', role:'vocalist', promptName:'Momo (vocalist of Geisha), long dark hair, feminine casual outfit' },
  ]},
  { id:'ID_ADA_BAND', label:'Ada Band (band) 🇮🇩', promptName:'Ada Band (Indonesian pop rock band)', type:'band', region:'id', members:[
    { id:'ADA_DONNIE', name:'Donnie', role:'vocalist', promptName:'Donnie (vocalist of Ada Band), dark hair, classic rock casual outfit' },
  ]},
  { id:'ID_KERISPATIH', label:'Kerispatih (band) 🇮🇩', promptName:'Kerispatih (Indonesian pop band)', type:'band', region:'id', members:[
    { id:'KER_SAMMY', name:'Sammy', role:'vocalist', promptName:'Sammy (vocalist of Kerispatih), dark hair, casual pop outfit' },
  ]},
  { id:'ID_FOURTWNTY', label:'Fourtwnty (band) 🇮🇩', promptName:'Fourtwnty (Indonesian indie folk band)', type:'band', region:'id', members:[
    { id:'FTW_ARIE', name:'Arie', role:'vocalist', promptName:'Arie (vocalist of Fourtwnty), casual indie look, relaxed vibe' },
  ]},
  { id:'ID_GLENN_FREDLY', label:'Glenn Fredly 🇮🇩', promptName:'Glenn Fredly (Indonesian R&B singer), charismatic, smart casual outfit', type:'solo', region:'id' },

  // ════════════════════════════════════════
  // 🇰🇷 KOREAN (30 artists)
  // ════════════════════════════════════════
  { id:'KR_BTS', label:'BTS (group) 🇰🇷', promptName:'BTS (Korean boy band)', type:'band', region:'kr', members:[
    { id:'BTS_RM', name:'RM', role:'vocalist', promptName:'RM (leader/rapper of BTS), tall, dark hair, intellectual look' },
    { id:'BTS_JIN', name:'Jin', role:'vocalist', promptName:'Jin (vocalist of BTS), handsome, broad shoulders, warm smile' },
    { id:'BTS_SUGA', name:'SUGA', role:'vocalist', promptName:'SUGA (rapper of BTS), pale skin, cool expression, dark outfit' },
    { id:'BTS_JHOPE', name:'j-hope', role:'vocalist', promptName:'j-hope (dancer/rapper of BTS), bright expression, streetwear' },
    { id:'BTS_JIMIN', name:'Jimin', role:'vocalist', promptName:'Jimin (vocalist of BTS), soft features, elegant style' },
    { id:'BTS_V', name:'V', role:'vocalist', promptName:'V / Kim Taehyung (vocalist of BTS), handsome, artistic outfit' },
    { id:'BTS_JK', name:'Jungkook', role:'vocalist', promptName:'Jungkook (vocalist of BTS), dark hair, athletic build, casual style' },
  ]},
  { id:'KR_IU', label:'IU (아이유) 🇰🇷', promptName:'IU (Lee Ji-eun, Korean singer-actress), petite, delicate features, long dark hair, elegant Korean fashion', type:'solo', region:'kr' },
  { id:'KR_TAEYEON', label:'Taeyeon 🇰🇷', promptName:'Taeyeon (Korean singer, SNSD), petite, beautiful, long hair, elegant outfit', type:'solo', region:'kr' },
  { id:'KR_BIGBANG', label:'BIGBANG (group) 🇰🇷', promptName:'BIGBANG (Korean boy band)', type:'band', region:'kr', members:[
    { id:'BB_GD', name:'G-Dragon', role:'vocalist', promptName:'G-Dragon (leader of BIGBANG), iconic fashion, artistic hairstyle' },
    { id:'BB_TAEYANG', name:'Taeyang', role:'vocalist', promptName:'Taeyang (vocalist of BIGBANG), muscular, mohawk-style hair' },
    { id:'BB_TOP', name:'T.O.P', role:'vocalist', promptName:'T.O.P (rapper of BIGBANG), tall, sharp features, dark outfit' },
  ]},
  { id:'KR_BLACKPINK', label:'BLACKPINK (group) 🇰🇷', promptName:'BLACKPINK (Korean girl group)', type:'band', region:'kr', members:[
    { id:'BP_JISOO', name:'Jisoo', role:'vocalist', promptName:'Jisoo (vocalist of BLACKPINK), classic Korean beauty, elegant outfit' },
    { id:'BP_JENNIE', name:'Jennie', role:'vocalist', promptName:'Jennie (vocalist/rapper of BLACKPINK), chic fashion style' },
    { id:'BP_ROSE', name:'Rosé', role:'vocalist', promptName:'Rosé (vocalist of BLACKPINK), slim, blonde/auburn hair, elegant outfit' },
    { id:'BP_LISA', name:'Lisa', role:'vocalist', promptName:'Lisa (dancer/rapper of BLACKPINK), Thai, long hair, trendy style' },
  ]},
  { id:'KR_EXO', label:'EXO (group) 🇰🇷', promptName:'EXO (Korean boy band)', type:'band', region:'kr', members:[
    { id:'EXO_BAEKHYUN', name:'Baekhyun', role:'vocalist', promptName:'Baekhyun (vocalist of EXO), bright expression, trendy outfit' },
    { id:'EXO_CHEN', name:'Chen', role:'vocalist', promptName:'Chen (vocalist of EXO), warm smile, casual outfit' },
    { id:'EXO_DO', name:'D.O.', role:'vocalist', promptName:'D.O. (vocalist of EXO), round eyes, simple clean outfit' },
  ]},
  { id:'KR_AKMU', label:'AKMU (duo) 🇰🇷', promptName:'AKMU (Korean sibling duo)', type:'band', region:'kr', members:[
    { id:'AKMU_CHAN', name:'Chanhyuk', role:'vocalist', promptName:'Lee Chanhyuk (vocalist of AKMU), glasses, artistic look' },
    { id:'AKMU_SUHYUN', name:'Suhyun', role:'vocalist', promptName:'Lee Suhyun (vocalist of AKMU), young, bright expression, cute outfit' },
  ]},
  { id:'KR_HEIZE', label:'Heize 🇰🇷', promptName:'Heize (Korean R&B singer), cool style, dark hair, casual chic outfit', type:'solo', region:'kr' },
  { id:'KR_DAY6', label:'DAY6 (band) 🇰🇷', promptName:'DAY6 (Korean rock band)', type:'band', region:'kr', members:[
    { id:'DAY6_SUNGJIN', name:'Sungjin', role:'vocalist', promptName:'Sungjin (vocalist of DAY6), strong vocals, casual outfit' },
    { id:'DAY6_JAE', name:'Jae', role:'guitarist', promptName:'Jae (guitarist of DAY6), glasses, tall, casual Western style' },
    { id:'DAY6_WONPIL', name:'Wonpil', role:'keyboardist', promptName:'Wonpil (keyboardist of DAY6), soft features, artistic outfit' },
  ]},
  { id:'KR_SEVENTEEN', label:'SEVENTEEN (group) 🇰🇷', promptName:'SEVENTEEN (Korean boy band)', type:'band', region:'kr', members:[
    { id:'SVT_SCOUPS', name:'S.Coups', role:'vocalist', promptName:'S.Coups (leader of SEVENTEEN), strong build, charismatic' },
    { id:'SVT_WOOZI', name:'Woozi', role:'vocalist', promptName:'Woozi (producer/vocalist of SEVENTEEN), small, cute, talented' },
  ]},
  { id:'KR_LEE_HI', label:'Lee Hi 🇰🇷', promptName:'Lee Hi (Korean singer), young, powerful voice, casual elegant outfit', type:'solo', region:'kr' },
  { id:'KR_ROSE', label:'Rosé (solo) 🇰🇷🇦🇺', promptName:'Rosé (Korean-Australian solo singer, BLACKPINK), slim, elegant style', type:'solo', region:'kr' },
  { id:'KR_AILEE', label:'Ailee 🇰🇷🇺🇸', promptName:'Ailee (Korean-American singer), powerful vocalist, elegant outfit', type:'solo', region:'kr' },
  { id:'KR_TAEYANG', label:'Taeyang (solo) 🇰🇷', promptName:'Taeyang (Korean solo singer, BIGBANG), muscular, stylish outfit', type:'solo', region:'kr' },
  { id:'KR_DAVICHI', label:'Davichi (duo) 🇰🇷', promptName:'Davichi (Korean vocal duo)', type:'band', region:'kr', members:[
    { id:'DVC_HAERI', name:'Lee Haeri', role:'vocalist', promptName:'Lee Haeri (vocalist of Davichi), elegant, powerful vocalist' },
    { id:'DVC_MINKYUNG', name:'Kang Minkyung', role:'vocalist', promptName:'Kang Minkyung (vocalist of Davichi), beautiful, tall, fashionable' },
  ]},
  { id:'KR_RED_VELVET', label:'Red Velvet (group) 🇰🇷', promptName:'Red Velvet (Korean girl group)', type:'band', region:'kr', members:[
    { id:'RV_IRENE', name:'Irene', role:'vocalist', promptName:'Irene (leader of Red Velvet), classic beauty, elegant outfit' },
    { id:'RV_WENDY', name:'Wendy', role:'vocalist', promptName:'Wendy (vocalist of Red Velvet), warm smile, casual chic outfit' },
    { id:'RV_SEULGI', name:'Seulgi', role:'vocalist', promptName:'Seulgi (vocalist of Red Velvet), sharp features, stylish outfit' },
  ]},
  { id:'KR_PARK_HYO_SHIN', label:'Park Hyo Shin 🇰🇷', promptName:'Park Hyo Shin (Korean balladeer), mature, elegant, dark suit', type:'solo', region:'kr' },
  { id:'KR_CRUSH', label:'Crush 🇰🇷', promptName:'Crush (Korean R&B singer), stylish, modern outfit, cool expression', type:'solo', region:'kr' },
  { id:'KR_DEAN', label:'DEAN 🇰🇷', promptName:'DEAN (Korean R&B singer), artistic, minimalist fashion, cool vibe', type:'solo', region:'kr' },
  { id:'KR_STRAY_KIDS', label:'Stray Kids (group) 🇰🇷', promptName:'Stray Kids (Korean boy band)', type:'band', region:'kr', members:[
    { id:'SKZ_BANG', name:'Bang Chan', role:'vocalist', promptName:'Bang Chan (leader of Stray Kids), Australian-Korean, muscular, charismatic' },
    { id:'SKZ_HAN', name:'Han', role:'vocalist', promptName:'Han (rapper/vocalist of Stray Kids), expressive, energetic style' },
  ]},
  { id:'KR_TXT', label:'TXT (group) 🇰🇷', promptName:'TXT / Tomorrow X Together (Korean boy band)', type:'band', region:'kr', members:[
    { id:'TXT_SOOBIN', name:'Soobin', role:'vocalist', promptName:'Soobin (leader of TXT), tall, cute dimples, casual outfit' },
    { id:'TXT_YEONJUN', name:'Yeonjun', role:'vocalist', promptName:'Yeonjun (vocalist of TXT), trendy, colorful fashion style' },
  ]},
  { id:'KR_HWASA', label:'Hwasa 🇰🇷', promptName:'Hwasa (Korean singer, MAMAMOO), confident, bold fashion, dark hair', type:'solo', region:'kr' },
  { id:'KR_PAUL_KIM', label:'Paul Kim 🇰🇷', promptName:'Paul Kim (Korean balladeer), warm, gentle expression, simple casual outfit', type:'solo', region:'kr' },
  { id:'KR_GUMMY', label:'Gummy 🇰🇷', promptName:'Gummy (Korean ballad singer), elegant, powerful vocalist, formal outfit', type:'solo', region:'kr' },
  { id:'KR_ENHYPEN', label:'ENHYPEN (group) 🇰🇷', promptName:'ENHYPEN (Korean boy band)', type:'band', region:'kr', members:[
    { id:'ENH_HEESEUNG', name:'Heeseung', role:'vocalist', promptName:'Heeseung (vocalist of ENHYPEN), handsome, versatile style' },
    { id:'ENH_JAY', name:'Jay', role:'vocalist', promptName:'Jay (vocalist of ENHYPEN), Korean-American, fashionable' },
  ]},
  { id:'KR_MAMAMOO', label:'MAMAMOO (group) 🇰🇷', promptName:'MAMAMOO (Korean girl group)', type:'band', region:'kr', members:[
    { id:'MMM_SOLAR', name:'Solar', role:'vocalist', promptName:'Solar (leader of MAMAMOO), bright, powerful vocalist, elegant outfit' },
    { id:'MMM_MOONBYUL', name:'Moonbyul', role:'vocalist', promptName:'Moonbyul (rapper of MAMAMOO), cool, androgynous style' },
  ]},
  { id:'KR_BOL4', label:'BOL4 🇰🇷', promptName:'BOL4 / Bolbbalgan4 (Korean indie singer), cute, young, casual outfit', type:'solo', region:'kr' },
  { id:'KR_JONGHYUN', label:'Jonghyun 🇰🇷', promptName:'Jonghyun (Korean singer, SHINee), handsome, artistic outfit', type:'solo', region:'kr' },

  // ════════════════════════════════════════
  // 🇯🇵 JEPANG (30 artists)
  // ════════════════════════════════════════
  { id:'JP_YUURI', label:'Yuuri (優里) 🇯🇵', promptName:'Yuuri (Japanese singer), dark hair, casual outfit, emotional expression', type:'solo', region:'jp' },
  { id:'JP_BACK_NUMBER', label:'back number (band) 🇯🇵', promptName:'back number (Japanese pop rock band)', type:'band', region:'jp', members:[
    { id:'BN_IYORI', name:'Iyori Shimizu', role:'vocalist', promptName:'Iyori Shimizu (vocalist of back number), glasses, gentle expression, casual outfit' },
  ]},
  { id:'JP_AIMER', label:'Aimer 🇯🇵', promptName:'Aimer (Japanese singer), mysterious, often performs with face partially hidden, dark elegant outfit', type:'solo', region:'jp' },
  { id:'JP_YOASOBI', label:'YOASOBI (duo) 🇯🇵', promptName:'YOASOBI (Japanese music duo)', type:'band', region:'jp', members:[
    { id:'YOASOBI_IKURA', name:'ikura', role:'vocalist', promptName:'ikura / Lilas Ikuta (vocalist of YOASOBI), young, bright expressive face, long dark hair' },
    { id:'YOASOBI_AYASE', name:'Ayase', role:'producer', promptName:'Ayase (composer of YOASOBI), young, stylish dark hair, modern streetwear' },
  ]},
  { id:'JP_HIGE_DAN', label:'Official HIGE DANdism (band) 🇯🇵', promptName:'Official HIGE DANdism (Japanese pop band)', type:'band', region:'jp', members:[
    { id:'HIGE_SATOSHI', name:'Satoshi Fujihara', role:'vocalist', promptName:'Satoshi Fujihara (vocalist of Official HIGE DANdism), glasses, warm expression' },
  ]},
  { id:'JP_FUJII_KAZE', label:'Fujii Kaze 🇯🇵', promptName:'Fujii Kaze (Japanese singer-songwriter), young, natural afro-like hair, casual outfit', type:'solo', region:'jp' },
  { id:'JP_UTADA', label:'Hikaru Utada 🇯🇵🇺🇸', promptName:'Hikaru Utada (Japanese-American pop singer), iconic, dark hair, modern elegant outfit', type:'solo', region:'jp' },
  { id:'JP_VAUNDY', label:'Vaundy 🇯🇵', promptName:'Vaundy (Japanese multi-genre artist), young, casual modern streetwear', type:'solo', region:'jp' },
  { id:'JP_ADO', label:'Ado 🇯🇵', promptName:'Ado (Japanese singer), mysterious, always conceals face, dark artistic outfit', type:'solo', region:'jp' },
  { id:'JP_AIMYON', label:'Aimyon (あいみょん) 🇯🇵', promptName:'Aimyon (Japanese singer-songwriter), long dark hair, retro-casual outfit', type:'solo', region:'jp' },
  { id:'JP_KENSHI', label:'Kenshi Yonezu 🇯🇵', promptName:'Kenshi Yonezu (Japanese singer-songwriter), artistic, dark hair covering one eye, elegant dark outfit', type:'solo', region:'jp' },
  { id:'JP_MRS_GREEN_APPLE', label:'Mrs. GREEN APPLE (band) 🇯🇵', promptName:'Mrs. GREEN APPLE (Japanese pop band)', type:'band', region:'jp', members:[
    { id:'MGA_OMORI', name:'Motoki Ohmori', role:'vocalist', promptName:'Motoki Ohmori (vocalist of Mrs. GREEN APPLE), youthful, bright expression, colorful outfit' },
  ]},
  { id:'JP_NATORI', label:'natori 🇯🇵', promptName:'natori (Japanese mystery artist), anonymous, dark aesthetic outfit', type:'solo', region:'jp' },
  { id:'JP_RADWIMPS', label:'RADWIMPS (band) 🇯🇵', promptName:'RADWIMPS (Japanese rock band)', type:'band', region:'jp', members:[
    { id:'RAD_YOJIRO', name:'Yojiro Noda', role:'vocalist', promptName:'Yojiro Noda (vocalist of RADWIMPS), artistic, messy dark hair, casual outfit' },
  ]},
  { id:'JP_KING_GNU', label:'King Gnu (band) 🇯🇵', promptName:'King Gnu (Japanese rock band)', type:'band', region:'jp', members:[
    { id:'KG_DAIKI', name:'Daiki Tsuneta', role:'vocalist', promptName:'Daiki Tsuneta (vocalist of King Gnu), afro hair, artistic style' },
    { id:'KG_KAZUKI', name:'Kazuki Iguchi', role:'vocalist', promptName:'Kazuki Iguchi (bassist/vocalist of King Gnu), glasses, intellectual look' },
  ]},
  { id:'JP_ONE_OK_ROCK', label:'ONE OK ROCK (band) 🇯🇵', promptName:'ONE OK ROCK (Japanese rock band)', type:'band', region:'jp', members:[
    { id:'OOR_TAKA', name:'Taka', role:'vocalist', promptName:'Taka (vocalist of ONE OK ROCK), rock star look, tattoos, casual outfit' },
    { id:'OOR_TORU', name:'Toru', role:'guitarist', promptName:'Toru (guitarist of ONE OK ROCK), cool, casual rock outfit' },
  ]},
  { id:'JP_YORUSHIKA', label:'Yorushika (band) 🇯🇵', promptName:'Yorushika (Japanese indie band)', type:'band', region:'jp', members:[
    { id:'YORU_SUIS', name:'suis', role:'vocalist', promptName:'suis (vocalist of Yorushika), mysterious, often hidden face, elegant dark outfit' },
    { id:'YORU_NASU', name:'n-buna', role:'guitarist', promptName:'n-buna (composer/guitarist of Yorushika), artistic, casual outfit' },
  ]},
  { id:'JP_AIKO', label:'aiko 🇯🇵', promptName:'aiko (Japanese pop singer), cheerful, short hair, casual cute outfit', type:'solo', region:'jp' },
  { id:'JP_MIKI', label:'Miki Matsubara 🇯🇵', promptName:'Miki Matsubara (Japanese city pop singer), retro 80s style, glamorous outfit', type:'solo', region:'jp' },
  { id:'JP_MARIYA', label:'Mariya Takeuchi 🇯🇵', promptName:'Mariya Takeuchi (Japanese city pop legend), retro 80s style, warm expression', type:'solo', region:'jp' },
  { id:'JP_INDIGO_LA_END', label:'Indigo la End (band) 🇯🇵', promptName:'Indigo la End (Japanese indie rock band)', type:'band', region:'jp', members:[
    { id:'ILE_ENON', name:'Enon Kawatani', role:'vocalist', promptName:'Enon Kawatani (vocalist of Indigo la End), dark hair, artistic indie outfit' },
  ]},
  { id:'JP_ATARAYO', label:'Atarayo 🇯🇵', promptName:'Atarayo (Japanese mystery artist), anonymous, dark atmospheric vibe', type:'solo', region:'jp' },
  { id:'JP_URU', label:'Uru 🇯🇵', promptName:'Uru (Japanese singer), gentle, long dark hair, simple elegant outfit', type:'solo', region:'jp' },
  { id:'JP_MAJIKO', label:'majiko 🇯🇵', promptName:'majiko (Japanese singer), androgynous style, dark artistic outfit', type:'solo', region:'jp' },
  { id:'JP_TATSUYA', label:'Tatsuya Kitani 🇯🇵', promptName:'Tatsuya Kitani (Japanese singer-songwriter), dark hair, modern casual outfit', type:'solo', region:'jp' },
  { id:'JP_MACARONI', label:'Macaroni Empitsu (band) 🇯🇵', promptName:'Macaroni Empitsu (Japanese pop rock band)', type:'band', region:'jp', members:[
    { id:'MAC_HASEGAWA', name:'Hasegawa', role:'vocalist', promptName:'Hasegawa (vocalist of Macaroni Empitsu), youthful, casual outfit' },
  ]},
  { id:'JP_ROKUDENASHI', label:'Rokudenashi 🇯🇵', promptName:'Rokudenashi (Japanese singer), mysterious, elegant dark outfit', type:'solo', region:'jp' },
  { id:'JP_YUMI', label:'Yumi Matsutoya 🇯🇵', promptName:'Yumi Matsutoya (Japanese pop legend), elegant, classic style', type:'solo', region:'jp' },
  { id:'JP_YOAKE', label:'YOAKE 🇯🇵', promptName:'YOAKE (Japanese indie duo)', type:'band', region:'jp', members:[
    { id:'YOAKE_V', name:'Vocalist', role:'vocalist', promptName:'Vocalist of YOAKE, young, soft expression, modern Japanese fashion' },
  ]},

  // ════════════════════════════════════════
  // 🇵🇭 FILIPINA (10 artists)
  // ════════════════════════════════════════
  { id:'PH_MOIRA', label:'Moira Dela Torre 🇵🇭', promptName:'Moira Dela Torre (Filipino singer), long dark hair, soft feminine look, casual elegant outfit', type:'solo', region:'ph' },
  { id:'PH_ZACK', label:'Zack Tabudlo 🇵🇭', promptName:'Zack Tabudlo (Filipino pop singer), young, dark hair, casual modern outfit', type:'solo', region:'ph' },
  { id:'PH_BEN_BEN', label:'Ben&Ben (band) 🇵🇭', promptName:'Ben&Ben (Filipino folk-pop band)', type:'band', region:'ph', members:[
    { id:'BB_PAOLO', name:'Paolo Guico', role:'vocalist', promptName:'Paolo Guico (vocalist of Ben&Ben), long hair, glasses, folk-indie look' },
    { id:'BB_MIGUEL', name:'Miguel Guico', role:'vocalist', promptName:'Miguel Guico (vocalist of Ben&Ben), long hair, glasses, folk-indie look' },
  ]},
  { id:'PH_ARTHUR_NERY', label:'Arthur Nery 🇵🇭', promptName:'Arthur Nery (Filipino R&B singer), dark hair, casual outfit, warm expression', type:'solo', region:'ph' },
  { id:'PH_DECEMBER_AVE', label:'December Avenue (band) 🇵🇭', promptName:'December Avenue (Filipino rock band)', type:'band', region:'ph', members:[
    { id:'DA_EBE', name:'Ebe Dancel', role:'vocalist', promptName:'Ebe Dancel (vocalist of December Avenue), mature, artistic look' },
  ]},
  { id:'PH_CUP_OF_JOE', label:'Cup of Joe (band) 🇵🇭', promptName:'Cup of Joe (Filipino indie pop band)', type:'band', region:'ph', members:[
    { id:'COJ_VOCAL', name:'Jem', role:'vocalist', promptName:'Jem (vocalist of Cup of Joe), young, casual indie outfit' },
  ]},
  { id:'PH_ADIE', label:'Adie 🇵🇭', promptName:'Adie (Filipino pop singer), young, dark hair, casual modern outfit', type:'solo', region:'ph' },
  { id:'PH_ERASERHEADS', label:'Eraserheads (band) 🇵🇭', promptName:'Eraserheads (Filipino legendary rock band)', type:'band', region:'ph', members:[
    { id:'EH_ELY', name:'Ely Buendia', role:'vocalist', promptName:'Ely Buendia (vocalist of Eraserheads), iconic Filipino rock star, casual outfit' },
  ]},
  { id:'PH_SILENT_SANCTUARY', label:'Silent Sanctuary (band) 🇵🇭', promptName:'Silent Sanctuary (Filipino pop rock band)', type:'band', region:'ph', members:[
    { id:'SS_SARKIE', name:'Sarkie', role:'vocalist', promptName:'Sarkie (vocalist of Silent Sanctuary), dark hair, indie rock outfit' },
  ]},
  { id:'PH_HALE', label:'Hale (band) 🇵🇭', promptName:'Hale (Filipino pop rock band)', type:'band', region:'ph', members:[
    { id:'HALE_CHAMP', name:'Champ Lui Pio', role:'vocalist', promptName:'Champ Lui Pio (vocalist of Hale), clean-cut, casual Filipino rock outfit' },
  ]},
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
