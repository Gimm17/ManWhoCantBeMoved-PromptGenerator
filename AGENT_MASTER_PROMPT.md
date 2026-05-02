# AGENT MASTER PROMPT
# ManWhoCantBeMoved — Prompt Generator Web App
# Paste prompt ini ke Antigravity / Cursor / Claude Code

---

## INSTRUKSI UNTUK AGENT

Kamu adalah expert Next.js full-stack developer. Kamu akan membangun sebuah web application dari awal hingga siap deploy. Baca seluruh prompt ini sebelum mulai menulis kode apapun.

File `context.md` yang ada di project ini berisi semua data yang kamu butuhkan: karakter lengkap (60+), scene presets, poses, food options, art styles. Baca dan gunakan data itu persis tanpa mengubah apapun.

---

## PROJECT OVERVIEW

**Nama:** ManWhoCantBeMoved — Prompt Generator
**Tagline:** Generate AI image prompt untuk trend "The Man Who Can't Be Moved"
**Tujuan:** User mengonfigurasi scene + karakter + pose → copy prompt → paste ke Gemini/Midjourney/Flux

**Prinsip utama:**
- Frontend-only, zero backend, zero database
- Semua data = TypeScript constants
- Foto user hanya hidup di browser memory (URL.createObjectURL), tidak pernah ke server
- Deploy ke Vercel gratis

---

## TECH STACK

```
Framework  : Next.js 14 App Router (TypeScript)
Styling    : Tailwind CSS v3
Components : shadcn/ui
IDs        : nanoid (untuk slot ID unik)
State      : useReducer + React Context (bukan Zustand)
Deploy     : Vercel
```

---

## SETUP AWAL

```bash
npx create-next-app@latest cant-be-moved \
  --typescript \
  --tailwind \
  --app \
  --src-dir=false \
  --import-alias="@/*"

cd cant-be-moved
npm install nanoid
npx shadcn-ui@latest init
npx shadcn-ui@latest add select button badge card sheet scroll-area separator toast
```

---

## STRUKTUR FOLDER FINAL

```
cant-be-moved/
├── app/
│   ├── layout.tsx              ← root layout, metadata, font
│   ├── page.tsx                ← render <PromptBuilderPage />
│   └── globals.css             ← Tailwind base + custom CSS variables
├── components/
│   ├── PromptBuilderPage.tsx   ← layout wrapper (split desktop / stacked mobile)
│   ├── builder/
│   │   ├── SceneSection.tsx    ← preset picker + detail dropdowns
│   │   ├── CharacterSection.tsx← dynamic character slots
│   │   ├── CharacterSlotCard.tsx← satu slot karakter (char+pose+style)
│   │   ├── UserSlotCard.tsx    ← slot khusus user (foto+outfit+pose)
│   │   ├── VibeSection.tsx     ← chip selector mood
│   │   └── CameraSection.tsx   ← camera angle + photo style + composition
│   ├── output/
│   │   ├── PromptOutput.tsx    ← textarea preview + copy button + share
│   │   └── MobilePromptBar.tsx ← sticky bottom bar untuk mobile
│   └── ui/                    ← shadcn components (auto-generated)
├── context/
│   └── BuilderContext.tsx      ← useReducer + Context + Provider
├── data/
│   ├── characters.ts           ← CHARS array lengkap (dari context.md)
│   ├── scenes.ts               ← SCENE_PRESETS (dari context.md)
│   ├── poses.ts                ← POSES array (dari context.md)
│   ├── food.ts                 ← FOOD_OPTIONS (dari context.md)
│   └── styles.ts               ← ART_STYLES, PHOTO_STYLES, dll (dari context.md)
├── lib/
│   ├── buildPrompt.ts          ← CORE: BuilderState → prompt string
│   ├── reducer.ts              ← BuilderAction reducer function
│   └── types.ts                ← semua TypeScript interfaces
└── public/
    └── og.png                  ← 1200x630 social preview image
```

---

## PHASE 1 — DATA LAYER

### Step 1.1: Copy semua data dari context.md

Buat file-file berikut dengan data **persis** dari context.md (jangan buat data dummy):
- `data/characters.ts` → export `CHARACTERS`, `CHARACTER_GROUPS`
- `data/scenes.ts` → export `SCENE_PRESETS`
- `data/poses.ts` → export `POSES`
- `data/food.ts` → export `FOOD_OPTIONS`
- `data/styles.ts` → export `ART_STYLES`, `PHOTO_STYLES`, `CAMERA_ANGLES`, `COMPOSITIONS`

### Step 1.2: Types

```typescript
// lib/types.ts

export interface CharacterSlot {
  id: string;
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
  characterSlots: CharacterSlot[];
  userPhotoUrl: string | null;
  userOutfit: string;
  userPose: string;
  vibe: string;
  cameraAngle: string;
  photoStyle: string;
  composition: string;
}

export type BuilderAction =
  | { type: 'APPLY_SCENE_PRESET'; presetId: string }
  | { type: 'SET_SCENE_FIELD'; field: string; value: string }
  | { type: 'ADD_CHARACTER_SLOT' }
  | { type: 'REMOVE_CHARACTER_SLOT'; id: string }
  | { type: 'UPDATE_CHARACTER_SLOT'; id: string; field: keyof CharacterSlot; value: string }
  | { type: 'SET_USER_PHOTO'; url: string | null }
  | { type: 'SET_USER_FIELD'; field: 'userOutfit' | 'userPose'; value: string }
  | { type: 'SET_VIBE'; value: string }
  | { type: 'SET_CAMERA_FIELD'; field: 'cameraAngle' | 'photoStyle' | 'composition'; value: string };
```

### Step 1.3: Reducer

```typescript
// lib/reducer.ts
import { SCENE_PRESETS } from '@/data/scenes';
import { nanoid } from 'nanoid';
import { BuilderAction, BuilderState } from './types';

export const INITIAL_STATE: BuilderState = {
  scenePresetId: 'indomaret',
  sceneCustomDetail: '',
  tod: 'late night, dark sky, fluorescent store lighting and warm streetlamps',
  weather: 'clear still air, slightly humid',
  furniture: 'small round white plastic table with white mono-block plastic chairs, iconic Indonesian Indomaret style',
  food: 'Golda coffee (brown glass bottle with Golda logo label), Taro snack bags, Chitato chips, bottled Aqua water',
  bgProps: 'motorcycles parked to the side, Indomaret signage (red-yellow-blue) overhead, fluorescent store light spilling onto pavement',
  characterSlots: [{ id: nanoid(), characterKey: null, pose: '', artStyle: 'fully photorealistic, cinematic natural lighting, HDR rendering, accurate skin texture' }],
  userPhotoUrl: null,
  userOutfit: 'casual outfit from reference photo — reconstruct EXACTLY as worn in the photo',
  userPose: 'sitting on chair leaning forward with elbows on table, staring blankly into the distance, thousand-yard stare',
  vibe: 'relaxed nongkrong energy, nonchalant late night chill among people who understand each other\'s pain without words',
  cameraAngle: 'slightly elevated 3/4 front-right angle, all characters visible, natural balanced group perspective',
  photoStyle: 'iPhone 15 Pro photography style, natural HDR, ProRes color science, no filters, realistic and clean',
  composition: 'all characters fit in frame, balanced natural group composition',
};

export function builderReducer(state: BuilderState, action: BuilderAction): BuilderState {
  switch (action.type) {
    case 'APPLY_SCENE_PRESET': {
      const preset = SCENE_PRESETS.find(p => p.id === action.presetId);
      if (!preset) return state;
      return {
        ...state,
        scenePresetId: preset.id,
        tod: preset.tod,
        weather: preset.weather,
        furniture: preset.furniture,
        food: preset.food,
        bgProps: preset.bgProps,
      };
    }
    case 'SET_SCENE_FIELD':
      return { ...state, [action.field]: action.value };
    case 'ADD_CHARACTER_SLOT':
      if (state.characterSlots.length >= 8) return state;
      return {
        ...state,
        characterSlots: [
          ...state.characterSlots,
          { id: nanoid(), characterKey: null, pose: '', artStyle: 'fully photorealistic, cinematic natural lighting, HDR rendering, accurate skin texture' }
        ]
      };
    case 'REMOVE_CHARACTER_SLOT':
      return { ...state, characterSlots: state.characterSlots.filter(s => s.id !== action.id) };
    case 'UPDATE_CHARACTER_SLOT':
      return {
        ...state,
        characterSlots: state.characterSlots.map(s =>
          s.id === action.id ? { ...s, [action.field]: action.value } : s
        )
      };
    case 'SET_USER_PHOTO':
      return { ...state, userPhotoUrl: action.url };
    case 'SET_USER_FIELD':
      return { ...state, [action.field]: action.value };
    case 'SET_VIBE':
      return { ...state, vibe: action.value };
    case 'SET_CAMERA_FIELD':
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
}
```

### Step 1.4: Context

```typescript
// context/BuilderContext.tsx
'use client';

import React, { createContext, useContext, useReducer, useCallback } from 'react';
import { INITIAL_STATE, builderReducer } from '@/lib/reducer';
import { BuilderAction, BuilderState } from '@/lib/types';

interface BuilderContextValue {
  state: BuilderState;
  dispatch: React.Dispatch<BuilderAction>;
}

const BuilderContext = createContext<BuilderContextValue | null>(null);

export function BuilderProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(builderReducer, INITIAL_STATE);
  return (
    <BuilderContext.Provider value={{ state, dispatch }}>
      {children}
    </BuilderContext.Provider>
  );
}

export function useBuilder() {
  const ctx = useContext(BuilderContext);
  if (!ctx) throw new Error('useBuilder must be used inside BuilderProvider');
  return ctx;
}
```

---

## PHASE 2 — CORE LOGIC: buildPrompt()

Ini adalah fungsi terpenting. Pure function, tidak ada side effects.

```typescript
// lib/buildPrompt.ts
import { CHARACTERS } from '@/data/characters';
import { SCENE_PRESETS } from '@/data/scenes';
import { BuilderState } from './types';

const DISCLAIMER = `[CREATIVE FAN ART — FICTIONAL CROSSOVER SCENE — FOR ENTERTAINMENT PURPOSES ONLY — NON-COMMERCIAL]`;

const FILM_NOTE = `
NOTE ON FILM / DRAMA / LIVE-ACTION CHARACTERS
For any live-action film or drama character in this scene, a separate character reference image has been uploaded alongside this prompt. Use that reference image to accurately reconstruct the character's face, costume, and distinctive physical features.`;

const FACE_FIDELITY = `
FACE FIDELITY — REFERENCE PERSON — NON-NEGOTIABLE
• DO NOT beautify, slim, idealize, or stylize the face in any way
• DO NOT apply AI face-averaging, facial structure changes, or any artistic reinterpretation
• Every feature must exactly match the reference photo: eyes, nose, lip line, jawline, cheekbones, skin tone, glasses frame, hair style and color
• The person must be immediately recognizable as the same individual from the reference photo
• Treat this as identity-critical photo compositing, not character design`;

export function buildPrompt(state: BuilderState): string {
  const preset = SCENE_PRESETS.find(p => p.id === state.scenePresetId);
  const loc = state.sceneCustomDetail || preset?.loc || state.scenePresetId;

  // Build character lines
  let hasFilmChar = false;
  const charLines: string[] = [];
  let i = 1;

  state.characterSlots.forEach(slot => {
    if (!slot.characterKey) return;
    const char = CHARACTERS.find(c => c.id === slot.characterKey);
    if (!char) return;
    if (char.isFilmLiveAction) hasFilmChar = true;
    charLines.push(
      `${i}. ${char.promptName}\n   • Pose: ${slot.pose || 'sitting, leaning forward elbows on table'}\n   • Art style: ${slot.artStyle}`
    );
    i++;
  });

  // User slot always comes after last char slot
  charLines.push(
    `${i}. [REFERENCE PERSON — real individual from uploaded reference photo]\n   • Face: CRITICAL — reconstruct face with 100% photographic exactness from the uploaded reference photo\n   • Outfit: ${state.userOutfit}\n   • Pose: ${state.userPose}\n   • Art style: fully photorealistic, natural cinematic lighting`
  );

  const sections = [
    DISCLAIMER,
    `CONCEPT\n"The Man Who Can't Be Moved" — a fictional gathering of iconic characters who all share the same emotional experience: being left behind by someone they loved, unable to fully move on. This is a creative fan art crossover scene.`,
    `SCENE\nLocation: ${loc}\nTime: ${state.tod}\nAtmosphere: ${state.weather}`,
    `SETTING DETAILS\nFurniture / seating: ${state.furniture}\nOn the table: ${state.food}\nBackground: ${state.bgProps}`,
    `CHARACTERS (strict left-to-right order in frame)\n${charLines.join('\n\n')}`,
    `MOOD / EMOTIONAL ATMOSPHERE\n${state.vibe}`,
    `CAMERA\nAngle: ${state.cameraAngle}\nComposition: ${state.composition}`,
    `RENDERING STYLE\n${state.photoStyle}`,
    hasFilmChar ? FILM_NOTE : '',
    `RENDERING RULES\n• Photorealistic characters: full cinematic HDR, natural skin texture, accurate hair, realistic lighting\n• Anime/cel-shaded characters: 2D Spider-Verse visual language, Ben-Day halftone dots, thick black ink outlines, vibrant flat fill colors\n• Standard anime characters: clean lineart, vibrant expressive colors\n• All characters share consistent lighting from the scene's ${state.tod}\n• No masks — all faces fully visible or in side profile`,
    FACE_FIDELITY,
  ].filter(Boolean);

  return sections.join('\n\n');
}
```

---

## PHASE 3 — UI COMPONENTS

### Design System (globals.css)

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --bg-base: 15 17 23;        /* #0F1117 */
    --bg-surface: 26 29 39;     /* #1A1D27 */
    --bg-elevated: 35 39 54;    /* #232736 */
    --border: 45 49 66;         /* #2D3142 */
    --accent: 108 99 255;       /* #6C63FF */
    --accent-muted: 196 193 255;/* #C4C1FF */
    --text-primary: 240 240 240;
    --text-secondary: 139 143 168;
    --amber: 245 158 11;
  }
}

body {
  background: rgb(var(--bg-base));
  color: rgb(var(--text-primary));
}
```

### tailwind.config.ts — tambahkan colors

```typescript
// tailwind.config.ts
const config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base:     'rgb(var(--bg-base) / <alpha-value>)',
        surface:  'rgb(var(--bg-surface) / <alpha-value>)',
        elevated: 'rgb(var(--bg-elevated) / <alpha-value>)',
        border:   'rgb(var(--border) / <alpha-value>)',
        accent:   'rgb(var(--accent) / <alpha-value>)',
        'accent-muted': 'rgb(var(--accent-muted) / <alpha-value>)',
        primary:  'rgb(var(--text-primary) / <alpha-value>)',
        muted:    'rgb(var(--text-secondary) / <alpha-value>)',
        amber:    'rgb(var(--amber) / <alpha-value>)',
      }
    }
  },
  plugins: [],
}
export default config;
```

### app/layout.tsx

```typescript
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Can't Be Moved — AI Prompt Generator",
  description: 'Generate AI image prompt untuk trend The Man Who Can\'t Be Moved',
  openGraph: {
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

### app/page.tsx

```typescript
import { BuilderProvider } from '@/context/BuilderContext';
import PromptBuilderPage from '@/components/PromptBuilderPage';

export default function Home() {
  return (
    <BuilderProvider>
      <PromptBuilderPage />
    </BuilderProvider>
  );
}
```

### components/PromptBuilderPage.tsx

```typescript
'use client';
import SceneSection from './builder/SceneSection';
import CharacterSection from './builder/CharacterSection';
import VibeSection from './builder/VibeSection';
import CameraSection from './builder/CameraSection';
import PromptOutput from './output/PromptOutput';
import MobilePromptBar from './output/MobilePromptBar';

export default function PromptBuilderPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-base/80 backdrop-blur border-b border-border px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-sm font-semibold text-primary">Can't Be Moved</h1>
            <p className="text-xs text-muted">AI Image Prompt Generator</p>
          </div>
          <span className="text-xs text-muted">by Gimora Digital</span>
        </div>
      </header>

      {/* Main layout */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Builder column */}
          <div className="flex-1 min-w-0 space-y-4 pb-24 lg:pb-6">
            <SceneSection />
            <CharacterSection />
            <VibeSection />
            <CameraSection />
          </div>

          {/* Prompt output — desktop only */}
          <div className="hidden lg:block w-96 flex-shrink-0">
            <div className="sticky top-20">
              <PromptOutput />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile bottom bar */}
      <MobilePromptBar />
    </div>
  );
}
```

### components/builder/SceneSection.tsx

```typescript
'use client';
import { useBuilder } from '@/context/BuilderContext';
import { SCENE_PRESETS } from '@/data/scenes';
import { FOOD_OPTIONS } from '@/data/food';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel } from '@/components/ui/select';

const WEATHER_OPTIONS = [
  { value:'clear still air, slightly humid', label:'Clear' },
  { value:'light drizzle, wet pavement reflections', label:'Light drizzle' },
  { value:'heavy rain, water streaming on surfaces', label:'Heavy rain' },
  { value:'foggy and misty haze in background', label:'Foggy / misty' },
  { value:'windy, loose paper blowing', label:'Windy' },
  { value:'smoke and steam from nearby food stalls', label:'Asap gerobak' },
];

const FURNITURE_OPTIONS = [
  { value:'small round white plastic table with white mono-block plastic chairs, iconic Indonesian Indomaret style', label:'Kursi plastik putih Indomaret' },
  { value:'small round white plastic table with red plastic chairs, Alfamart style', label:'Kursi plastik merah Alfamart' },
  { value:'low wooden angkringan bench', label:'Bangku angkringan kayu' },
  { value:'concrete curb, sitting directly on the ground edge', label:'Duduk di trotoar' },
  { value:'plastic folding table with mismatched plastic chairs', label:'Meja lipat plastik campur' },
  { value:'wooden pier railing, leaning or sitting on it', label:'Sandaran dermaga kayu' },
  { value:'park bench, wooden slats with iron frame', label:'Park bench' },
  { value:'rooftop concrete ledge, city panorama behind', label:'Rooftop ledge' },
  { value:'diner booth with red vinyl seats and formica table', label:'Diner booth' },
  { value:'tatami floor with low Japanese chabudai table', label:'Tatami + chabudai' },
  { value:'concrete staircase steps, sitting on the stairs', label:'Duduk di tangga' },
];

const BG_OPTIONS = [
  { value:'motorcycles parked to the side, Indomaret signage (red-yellow-blue) overhead, fluorescent store light spilling onto pavement', label:'Motor parkir + papan Indomaret' },
  { value:'street food gerobak cart visible in background, yellow sodium streetlamp casting warm glow', label:'Gerobak + lampu kuning' },
  { value:'city skyline with blinking lights visible in distance', label:'City skyline' },
  { value:'neon signs in multiple colors, rain-slicked reflective street', label:'Neon signs + wet street' },
  { value:'calm ocean, wooden dock planks, sea grass gently blowing', label:'Beach + dock' },
  { value:'school lockers and bulletin boards lining a long corridor', label:'School corridor' },
  { value:'minimal, shallow depth of field bokeh background', label:'Minimal — bokeh' },
  { value:'cherry blossom petals drifting in the air, paper lanterns hanging above', label:'Sakura + lanterns' },
  { value:'Han River visible in background, Seoul night skyline with city lights', label:'Han River Seoul night' },
];

const TOD_OPTIONS = [
  { value:'late night, dark sky, fluorescent store lighting and warm streetlamps', label:'Late night' },
  { value:'golden hour sunset, warm orange-amber sky', label:'Golden hour sunset' },
  { value:'blue hour twilight, deep indigo sky, first stars appearing', label:'Blue hour twilight' },
  { value:'midday overcast, flat diffused moody light', label:'Midday overcast' },
  { value:'dawn, soft pink-orange horizon, early quiet', label:'Dawn' },
  { value:'stormy evening, dark dramatic clouds, heavy wind', label:'Stormy evening' },
];

export default function SceneSection() {
  const { state, dispatch } = useBuilder();

  // Group presets
  const indonesia = SCENE_PRESETS.filter(p => p.group === 'indonesia');
  const cinematic = SCENE_PRESETS.filter(p => p.group === 'cinematic');
  const fantasy   = SCENE_PRESETS.filter(p => p.group === 'fantasy');

  // Group food
  const foodGroups = [...new Set(FOOD_OPTIONS.map(f => f.group))];

  return (
    <section className="bg-surface rounded-xl border border-border p-5 space-y-4">
      <h2 className="text-xs font-semibold text-muted uppercase tracking-widest">Location & Setting</h2>

      <div className="grid grid-cols-2 gap-3">
        {/* Scene preset */}
        <div className="col-span-2 space-y-1">
          <label className="text-xs text-muted">Scene preset</label>
          <Select
            value={state.scenePresetId}
            onValueChange={v => dispatch({ type: 'APPLY_SCENE_PRESET', presetId: v })}
          >
            <SelectTrigger className="bg-elevated border-border text-primary text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-elevated border-border">
              <SelectGroup><SelectLabel className="text-muted text-xs">Indonesia Vibes</SelectLabel>
                {indonesia.map(p => <SelectItem key={p.id} value={p.id}>{p.label}</SelectItem>)}
              </SelectGroup>
              <SelectGroup><SelectLabel className="text-muted text-xs">Cinematic</SelectLabel>
                {cinematic.map(p => <SelectItem key={p.id} value={p.id}>{p.label}</SelectItem>)}
              </SelectGroup>
              <SelectGroup><SelectLabel className="text-muted text-xs">Fantasy / Anime</SelectLabel>
                {fantasy.map(p => <SelectItem key={p.id} value={p.id}>{p.label}</SelectItem>)}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Custom detail */}
        <div className="col-span-2 space-y-1">
          <label className="text-xs text-muted">Custom detail (opsional)</label>
          <input
            type="text"
            value={state.sceneCustomDetail}
            onChange={e => dispatch({ type: 'SET_SCENE_FIELD', field: 'sceneCustomDetail', value: e.target.value })}
            placeholder="e.g. depan gang kos malam lampu kuning..."
            className="w-full bg-elevated border border-border rounded-lg px-3 py-2 text-sm text-primary placeholder:text-muted focus:outline-none focus:border-accent"
          />
        </div>

        {/* Time of day */}
        <div className="space-y-1">
          <label className="text-xs text-muted">Time of day</label>
          <Select value={state.tod} onValueChange={v => dispatch({ type: 'SET_SCENE_FIELD', field: 'tod', value: v })}>
            <SelectTrigger className="bg-elevated border-border text-primary text-sm"><SelectValue /></SelectTrigger>
            <SelectContent className="bg-elevated border-border">
              {TOD_OPTIONS.map(o => <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        {/* Weather */}
        <div className="space-y-1">
          <label className="text-xs text-muted">Weather</label>
          <Select value={state.weather} onValueChange={v => dispatch({ type: 'SET_SCENE_FIELD', field: 'weather', value: v })}>
            <SelectTrigger className="bg-elevated border-border text-primary text-sm"><SelectValue /></SelectTrigger>
            <SelectContent className="bg-elevated border-border">
              {WEATHER_OPTIONS.map(o => <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        {/* Furniture */}
        <div className="col-span-2 space-y-1">
          <label className="text-xs text-muted">Furniture / seating</label>
          <Select value={state.furniture} onValueChange={v => dispatch({ type: 'SET_SCENE_FIELD', field: 'furniture', value: v })}>
            <SelectTrigger className="bg-elevated border-border text-primary text-sm"><SelectValue /></SelectTrigger>
            <SelectContent className="bg-elevated border-border">
              {FURNITURE_OPTIONS.map(o => <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        {/* Food */}
        <div className="col-span-2 space-y-1">
          <label className="text-xs text-muted">Food & drinks on table</label>
          <Select value={state.food} onValueChange={v => dispatch({ type: 'SET_SCENE_FIELD', field: 'food', value: v })}>
            <SelectTrigger className="bg-elevated border-border text-primary text-sm"><SelectValue /></SelectTrigger>
            <SelectContent className="bg-elevated border-border">
              {foodGroups.map(g => (
                <SelectGroup key={g}>
                  <SelectLabel className="text-muted text-xs">{g}</SelectLabel>
                  {FOOD_OPTIONS.filter(f => f.group === g).map(o => <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>)}
                </SelectGroup>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Background props */}
        <div className="col-span-2 space-y-1">
          <label className="text-xs text-muted">Background props</label>
          <Select value={state.bgProps} onValueChange={v => dispatch({ type: 'SET_SCENE_FIELD', field: 'bgProps', value: v })}>
            <SelectTrigger className="bg-elevated border-border text-primary text-sm"><SelectValue /></SelectTrigger>
            <SelectContent className="bg-elevated border-border">
              {BG_OPTIONS.map(o => <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
}
```

### components/builder/CharacterSection.tsx

```typescript
'use client';
import { useBuilder } from '@/context/BuilderContext';
import CharacterSlotCard from './CharacterSlotCard';
import UserSlotCard from './UserSlotCard';

export default function CharacterSection() {
  const { state, dispatch } = useBuilder();
  const canAdd = state.characterSlots.length < 8;

  return (
    <section className="bg-surface rounded-xl border border-border p-5 space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-semibold text-muted uppercase tracking-widest">
          Characters
          <span className="ml-2 text-green-400">(max 8)</span>
        </h2>
        <span className="text-xs text-muted">{state.characterSlots.length}/8</span>
      </div>

      {/* Character slots - IMPORTANT: render from state array, not hardcoded */}
      <div className="space-y-2">
        {state.characterSlots.map((slot, index) => (
          <CharacterSlotCard
            key={slot.id}
            slot={slot}
            slotNumber={index + 1}
            onRemove={() => dispatch({ type: 'REMOVE_CHARACTER_SLOT', id: slot.id })}
            onUpdate={(field, value) => dispatch({ type: 'UPDATE_CHARACTER_SLOT', id: slot.id, field, value })}
          />
        ))}
      </div>

      {/* User slot — always shown, always last */}
      <UserSlotCard />

      {/* Add button */}
      {canAdd && (
        <button
          onClick={() => dispatch({ type: 'ADD_CHARACTER_SLOT' })}
          className="w-full py-2 rounded-lg border border-dashed border-border text-muted text-sm hover:border-accent hover:text-accent transition-colors"
        >
          + Add character slot
        </button>
      )}
    </section>
  );
}
```

### components/builder/CharacterSlotCard.tsx

```typescript
'use client';
import { CHARACTERS, CHARACTER_GROUPS } from '@/data/characters';
import { POSES } from '@/data/poses';
import { ART_STYLES } from '@/data/styles';
import { CharacterSlot } from '@/lib/types';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel } from '@/components/ui/select';

interface Props {
  slot: CharacterSlot;
  slotNumber: number;
  onRemove: () => void;
  onUpdate: (field: keyof CharacterSlot, value: string) => void;
}

export default function CharacterSlotCard({ slot, slotNumber, onRemove, onUpdate }: Props) {
  const poseGroups = [...new Set(POSES.map(p => p.group))];

  return (
    <div className="bg-elevated rounded-lg border border-border p-3 grid grid-cols-[28px_1fr_1fr_1fr_36px] gap-2 items-start">
      {/* Slot number */}
      <div className="pt-4 text-center text-xs font-semibold text-muted">{slotNumber}</div>

      {/* Character select */}
      <div className="space-y-1">
        <label className="text-xs text-muted">Character</label>
        <Select value={slot.characterKey || ''} onValueChange={v => onUpdate('characterKey', v)}>
          <SelectTrigger className="bg-surface border-border text-primary text-xs h-8"><SelectValue placeholder="Pilih karakter..." /></SelectTrigger>
          <SelectContent className="bg-elevated border-border max-h-72">
            {CHARACTER_GROUPS.map(grp => {
              const chars = CHARACTERS.filter(c => c.group === grp.id);
              if (!chars.length) return null;
              return (
                <SelectGroup key={grp.id}>
                  <SelectLabel className="text-muted text-xs">{grp.label}</SelectLabel>
                  {chars.map(c => <SelectItem key={c.id} value={c.id} className="text-xs">{c.label}</SelectItem>)}
                </SelectGroup>
              );
            })}
          </SelectContent>
        </Select>
      </div>

      {/* Pose select */}
      <div className="space-y-1">
        <label className="text-xs text-muted">Pose</label>
        <Select value={slot.pose} onValueChange={v => onUpdate('pose', v)}>
          <SelectTrigger className="bg-surface border-border text-primary text-xs h-8"><SelectValue placeholder="Pilih pose..." /></SelectTrigger>
          <SelectContent className="bg-elevated border-border max-h-72">
            {poseGroups.map(g => (
              <SelectGroup key={g}>
                <SelectLabel className="text-muted text-xs">{g}</SelectLabel>
                {POSES.filter(p => p.group === g).map(p => <SelectItem key={p.value} value={p.value} className="text-xs">{p.label}</SelectItem>)}
              </SelectGroup>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Art style select */}
      <div className="space-y-1">
        <label className="text-xs text-muted">Art style</label>
        <Select value={slot.artStyle} onValueChange={v => onUpdate('artStyle', v)}>
          <SelectTrigger className="bg-surface border-border text-primary text-xs h-8"><SelectValue /></SelectTrigger>
          <SelectContent className="bg-elevated border-border">
            {ART_STYLES.map(s => <SelectItem key={s.value} value={s.value} className="text-xs">{s.label}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>

      {/* Remove */}
      <button onClick={onRemove} className="mt-4 text-red-400 hover:text-red-300 text-xs">✕</button>
    </div>
  );
}
```

### components/builder/UserSlotCard.tsx

```typescript
'use client';
import { useBuilder } from '@/context/BuilderContext';
import { POSES } from '@/data/poses';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel } from '@/components/ui/select';
import { useRef } from 'react';

const OUTFIT_OPTIONS = [
  { value:'casual outfit from reference photo — reconstruct EXACTLY as worn in the photo', label:'Ikut reference photo' },
  { value:'black suit and tie, smart formal but slightly tired-looking', label:'Black suit + tie' },
  { value:'oversized hoodie, jogger pants, slippers', label:'Oversized hoodie + sandal' },
  { value:'streetwear — cargo pants, graphic tee, chunky sneakers', label:'Streetwear' },
  { value:'batik shirt in traditional Indonesian batik pattern, black trousers', label:'Batik shirt' },
  { value:'school uniform — plain white shirt, dark trousers, school badge pin', label:'Seragam sekolah' },
  { value:'plain white t-shirt, blue jeans, sandal jepit flip-flops', label:'Kaos putih + jeans + sandal' },
  { value:'flannel plaid shirt, blue jeans, ankle boots', label:'Flannel + jeans + boots' },
];

export default function UserSlotCard() {
  const { state, dispatch } = useBuilder();
  const fileRef = useRef<HTMLInputElement>(null);
  const poseGroups = [...new Set(POSES.map(p => p.group))];

  function handlePhoto(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    dispatch({ type: 'SET_USER_PHOTO', url });
  }

  return (
    <div className="bg-elevated rounded-lg border-2 border-accent/40 p-3 space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-accent text-sm font-bold">★ YOU</span>
        <span className="text-xs bg-accent/20 text-accent-muted px-2 py-0.5 rounded-full">ref photo</span>
        <span className="ml-auto text-xs text-red-400 font-semibold">EXACT face match</span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {/* Photo upload */}
        <div className="space-y-1">
          <label className="text-xs text-muted">Foto referensi</label>
          <div
            onClick={() => fileRef.current?.click()}
            className="h-8 rounded-lg border border-dashed border-border flex items-center justify-center cursor-pointer hover:border-accent transition-colors"
          >
            {state.userPhotoUrl ? (
              <img src={state.userPhotoUrl} alt="preview" className="h-full w-full object-cover rounded-lg" />
            ) : (
              <span className="text-xs text-muted">Upload foto</span>
            )}
          </div>
          <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handlePhoto} />
        </div>

        {/* Outfit */}
        <div className="space-y-1">
          <label className="text-xs text-muted">Outfit</label>
          <Select value={state.userOutfit} onValueChange={v => dispatch({ type: 'SET_USER_FIELD', field: 'userOutfit', value: v })}>
            <SelectTrigger className="bg-surface border-border text-primary text-xs h-8"><SelectValue /></SelectTrigger>
            <SelectContent className="bg-elevated border-border">
              {OUTFIT_OPTIONS.map(o => <SelectItem key={o.value} value={o.value} className="text-xs">{o.label}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        {/* Pose */}
        <div className="space-y-1">
          <label className="text-xs text-muted">Pose</label>
          <Select value={state.userPose} onValueChange={v => dispatch({ type: 'SET_USER_FIELD', field: 'userPose', value: v })}>
            <SelectTrigger className="bg-surface border-border text-primary text-xs h-8"><SelectValue /></SelectTrigger>
            <SelectContent className="bg-elevated border-border max-h-72">
              {poseGroups.map(g => (
                <SelectGroup key={g}>
                  <SelectLabel className="text-muted text-xs">{g}</SelectLabel>
                  {POSES.filter(p => p.group === g).map(p => <SelectItem key={p.value} value={p.value} className="text-xs">{p.label}</SelectItem>)}
                </SelectGroup>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
```

### components/builder/VibeSection.tsx

```typescript
'use client';
import { useBuilder } from '@/context/BuilderContext';

const VIBES = [
  { label:'Nongkrong santai',         value:'relaxed nongkrong energy, nonchalant late night chill among people who understand each other\'s pain without words' },
  { label:'Melancholic — hening',      value:'melancholic and reflective, each person quietly with their own thoughts, shared heavy silence' },
  { label:'Nostalgia',                  value:'warm nostalgic, bittersweet like the last night before everyone goes their separate ways' },
  { label:'Patah hati tapi ketawa',     value:'broken but laughing, everyone hurting but making dark jokes, gallows humor that masks real pain' },
  { label:'Dramatis slow-mo',           value:'dramatic cinematic slow-motion feeling, heavy unspoken emotion hanging in the air' },
  { label:'Solidaritas sesama korban',  value:'solidarity, quiet brotherhood of people who all got left, presence alone is enough without words' },
  { label:'Chaotic healing',            value:'chaotic healing, everyone processing heartbreak differently, loud messy overlapping energy' },
  { label:'Malam sebelum move on',      value:'the last night sitting still before deciding to walk away and start over' },
  { label:'Lonely together',            value:'lonely together, each person isolated in their own sadness despite sitting side by side' },
  { label:'Mulai hopeful',              value:'starting to see light at the end, soft hopeful determined quiet energy emerging' },
];

export default function VibeSection() {
  const { state, dispatch } = useBuilder();
  return (
    <section className="bg-surface rounded-xl border border-border p-5 space-y-3">
      <h2 className="text-xs font-semibold text-muted uppercase tracking-widest">Mood / Vibe</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {VIBES.map(v => (
          <button
            key={v.value}
            onClick={() => dispatch({ type: 'SET_VIBE', value: v.value })}
            className={`px-3 py-2 rounded-full border text-xs transition-colors text-left
              ${state.vibe === v.value
                ? 'bg-accent/20 border-accent text-accent-muted font-semibold'
                : 'bg-elevated border-border text-muted hover:border-accent/50'
              }`}
          >
            {v.label}
          </button>
        ))}
      </div>
    </section>
  );
}
```

### components/builder/CameraSection.tsx

```typescript
'use client';
import { useBuilder } from '@/context/BuilderContext';
import { CAMERA_ANGLES, PHOTO_STYLES, COMPOSITIONS } from '@/data/styles';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function CameraSection() {
  const { state, dispatch } = useBuilder();
  return (
    <section className="bg-surface rounded-xl border border-border p-5 space-y-3">
      <h2 className="text-xs font-semibold text-muted uppercase tracking-widest">Camera & Style</h2>
      <div className="grid grid-cols-3 gap-3">
        {[
          { label:'Camera angle', options:CAMERA_ANGLES, field:'cameraAngle', value:state.cameraAngle },
          { label:'Photo style', options:PHOTO_STYLES, field:'photoStyle', value:state.photoStyle },
          { label:'Composition', options:COMPOSITIONS, field:'composition', value:state.composition },
        ].map(({ label, options, field, value }) => (
          <div key={field} className="space-y-1">
            <label className="text-xs text-muted">{label}</label>
            <Select value={value} onValueChange={v => dispatch({ type:'SET_CAMERA_FIELD', field:field as any, value:v })}>
              <SelectTrigger className="bg-elevated border-border text-primary text-xs h-8"><SelectValue /></SelectTrigger>
              <SelectContent className="bg-elevated border-border">
                {options.map(o => <SelectItem key={o.value} value={o.value} className="text-xs">{o.label}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        ))}
      </div>
    </section>
  );
}
```

### components/output/PromptOutput.tsx

```typescript
'use client';
import { useBuilder } from '@/context/BuilderContext';
import { buildPrompt } from '@/lib/buildPrompt';
import { useState, useMemo } from 'react';

export default function PromptOutput() {
  const { state } = useBuilder();
  const [copied, setCopied] = useState(false);
  const prompt = useMemo(() => buildPrompt(state), [state]);

  async function handleCopy() {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="bg-surface rounded-xl border border-border overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <span className="text-xs font-semibold text-muted uppercase tracking-widest">Generated Prompt</span>
        <button
          onClick={handleCopy}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all
            ${copied ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-accent/20 text-accent-muted border border-accent/30 hover:bg-accent/30'}`}
        >
          {copied ? 'Copied!' : 'Copy Prompt'}
        </button>
      </div>
      <textarea
        readOnly
        value={prompt}
        className="w-full h-[60vh] bg-transparent p-4 text-xs font-mono text-muted resize-none focus:outline-none leading-relaxed"
      />
    </div>
  );
}
```

### components/output/MobilePromptBar.tsx

```typescript
'use client';
import { useBuilder } from '@/context/BuilderContext';
import { buildPrompt } from '@/lib/buildPrompt';
import { useState, useMemo } from 'react';

export default function MobilePromptBar() {
  const { state } = useBuilder();
  const [copied, setCopied] = useState(false);
  const prompt = useMemo(() => buildPrompt(state), [state]);

  async function handleCopy() {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-surface border-t border-border px-4 py-3 flex gap-3 z-50">
      <button
        onClick={handleCopy}
        className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all
          ${copied ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-accent text-white'}`}
      >
        {copied ? 'Copied!' : 'Copy Prompt'}
      </button>
    </div>
  );
}
```

---

## PHASE 4 — DEPLOY

```bash
# 1. Build check lokal
npm run build

# 2. Push ke GitHub
git add .
git commit -m "feat: initial build - ManWhoCantBeMoved prompt generator"
git push origin main

# 3. Vercel auto-deploy dari GitHub
# Buka vercel.com → New Project → Import GitHub repo
# Framework: Next.js
# Build command: npm run build (default)
# Output dir: .next (default)
# → Deploy
```

---

## CHECKLIST SEBELUM SELESAI

- [ ] Semua data dari context.md sudah di-copy persis ke data/*.ts
- [ ] Character dropdown di semua slot (slot 1, 2, 3, dst) identik karena render dari `CHARACTERS` array yang sama
- [ ] `buildPrompt()` return string yang berbeda tiap state berubah
- [ ] Foto user tidak pernah dikirim ke server (hanya `URL.createObjectURL()`)
- [ ] Mobile layout: builder stacked, prompt accessible via sticky bottom copy button
- [ ] `npm run build` lulus tanpa error TypeScript

---

## PERTANYAAN AGENT YANG SUDAH DIJAWAB

| Pertanyaan | Jawaban |
|---|---|
| Character data | Ada lengkap di context.md → data/characters.ts |
| Scene presets | Ada 20+ preset di context.md → data/scenes.ts |
| Pose list | Ada 25+ pose di context.md → data/poses.ts |
| Food & drinks | Ada di context.md → data/food.ts |
| Art styles | Ada di context.md → data/styles.ts |
| Zustand vs useReducer | useReducer + Context |
| Vercel deploy | Setup dari scratch, lihat Phase 4 |
| Domain | Default vercel.app dulu |

---

*Gimora Digital — 2026*
