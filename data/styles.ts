export interface StyleOption { value: string; label: string; prompt: string; }

export const ART_STYLES: StyleOption[] = [
  { value:'realistic', label:'Realistic (cinematic)', prompt:'fully photorealistic, cinematic natural lighting, HDR rendering, accurate skin texture' },
  { value:'anime-spiderverse', label:'Anime (Spider-Verse)', prompt:'anime 2D cel-shaded style, Spider-Verse visual language, Ben-Day halftone dots, thick black outlines, vibrant flat colors' },
  { value:'anime-tv', label:'Anime (standard TV)', prompt:'standard modern TV anime style, clean lineart, vibrant expressive colors' },
  { value:'semi-realistic', label:'Semi-realistic (digital)', prompt:'semi-realistic digital painting, painterly concept art style, textured brushwork' },
  { value:'manga-bw', label:'Manga B&W', prompt:'manga ink style, black and white with screentone shading' },
];

export const PHOTO_STYLES: StyleOption[] = [
  { value:'iphone', label:'iPhone photography (natural)', prompt:'iPhone 15 Pro photography style, natural HDR, ProRes color science, no filters, realistic and clean' },
  { value:'35mm-film', label:'35mm film cinematic', prompt:'cinematic 35mm film, Kodak grain texture, anamorphic lens flare, warm push processing' },
  { value:'editorial', label:'Editorial fashion', prompt:'editorial fashion photography, professional rim lighting, high fashion clean aesthetic' },
  { value:'anime-key', label:'Anime key visual', prompt:'anime key visual style, vibrant saturated cel-shading, dramatic highlights and shadows' },
  { value:'hyperrealistic', label:'Hyperrealistic digital art', prompt:'hyperrealistic digital art, ultra-detailed rendering, sharp focus, 8K quality' },
  { value:'lofi', label:'Lo-fi / lomography', prompt:'lo-fi lomography, light leaks, vignette edges, gritty saturated grain' },
  { value:'oil-painting', label:'Oil painting', prompt:'oil painting with textured impressionistic brushwork, warm rich palette' },
  { value:'manga-panel', label:'Manga panel B&W', prompt:'manga panel composition, monochrome, screentone shading, dramatic speed lines' },
];

export const CAMERA_ANGLES: StyleOption[] = [
  { value:'elevated-34', label:'Elevated 3/4 front-right', prompt:'slightly elevated 3/4 front-right angle, all characters visible, natural balanced group perspective' },
  { value:'eye-level', label:'Eye-level — documentary', prompt:'eye-level front view slightly off-center, documentary street photography feel' },
  { value:'rear-left', label:'3/4 rear left (user back)', prompt:'3/4 rear left angle, back of user visible, faces of other characters in frame' },
  { value:'wide-side', label:'Wide side shot', prompt:'wide establishing side shot, horizontal composition, full environment visible' },
  { value:'low-angle', label:'Low angle — dramatic', prompt:'low angle from ground level looking up dramatically at the group' },
  { value:'birds-eye', label:"Bird's eye view", prompt:"bird's eye view directly above the table and group" },
  { value:'over-shoulder', label:'Over-shoulder POV', prompt:'over-the-shoulder POV from one character looking toward the rest of the group' },
  { value:'closeup-bokeh', label:'Close-up + bokeh BG', prompt:'close-up on one person, others beautifully blurred in bokeh background' },
];

export const COMPOSITIONS: StyleOption[] = [
  { value:'all-balanced', label:'All in frame (balanced)', prompt:'all characters fit in frame, balanced natural group composition' },
  { value:'user-centered', label:'User-centered', prompt:'user slightly centered in frame, other characters naturally arranged around user' },
  { value:'user-left', label:'User left — chars right', prompt:'user positioned left of frame, characters filling the right side' },
  { value:'layered-depth', label:'Layered depth', prompt:'layered depth, foreground character sharp, background characters in slight bokeh' },
  { value:'symmetrical', label:'Symmetrical', prompt:'symmetrical composition with equal visual weight on both sides' },
];
