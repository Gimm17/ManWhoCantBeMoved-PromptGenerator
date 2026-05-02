<div align="center">

# 🎵 The Man Who Can't Be Moved

### Prompt Generator Studio

**Generate high-quality AI image prompts for "The Man Who Can't Be Moved" crossover fan art.**

Configure characters, scenes, poses, and vibes — then copy the prompt to Gemini, Midjourney, or Flux.

[![Live Demo](https://img.shields.io/badge/▶_Live_Demo-Visit_Site-E88D8D?style=for-the-badge&logo=vercel&logoColor=white)](https://man-who-cant-be-moved-prompt-genera.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![License](https://img.shields.io/badge/License-MIT-2D3B2F?style=for-the-badge)](LICENSE)

</div>

---

## 🎬 What is This?

**"The Man Who Can't Be Moved"** is a viral AI image trend where iconic characters from anime, K-drama, and films are gathered together in a single scene — all sharing the same emotional experience of being left behind by someone they loved.

This tool helps you **build detailed, high-quality prompts** to generate these images using AI tools like Gemini, Midjourney, DALL-E, or Flux.

> Instead of writing prompts from scratch, just pick your scene, characters, poses, and vibe — and the tool generates a structured, production-quality prompt for you.

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🏙️ Scene Builder
- **21 scene presets** — Indomaret, angkringan, Seoul rooftop, anime worlds, and more
- **Custom scene** option for full creative control
- Configurable **weather**, **time of day**, **furniture**, **food & drinks**, and **background props**
- All fields are optional and clearable

</td>
<td width="50%">

### 🧑‍🤝‍🧑 Character System
- **30+ characters** from anime, K-drama, and films
- **YOU slot** — insert yourself with exact face match instructions
- Up to **8 character slots** per scene
- Per-character **pose** and **art style** selection

</td>
</tr>
<tr>
<td width="50%">

### 🎭 68 Poses
- Categorized: sitting, eating, smoking, phone, reading, standing
- Each pose has **detailed prompt engineering** for accurate AI rendering
- Searchable dropdown with grouped categories

</td>
<td width="50%">

### 🔍 Smart Dropdowns
- **SearchableSelect** components with instant text filtering
- **Grouped items** with sticky headers
- 420px scrollable panels for large option sets
- Keyboard accessible (Escape to close)

</td>
</tr>
</table>

### More Features

| Feature | Description |
|---|---|
| 📋 **One-Click Copy** | Copy the entire generated prompt with a single click |
| 📱 **Mobile Responsive** | Full mobile support with bottom sheet prompt preview |
| 👁 **View Counter** | Live visitor count powered by Upstash Redis |
| 🔄 **New Prompt Reset** | Reset all fields to defaults with confirmation |
| 🎨 **Stitch-inspired Design** | Soft sage-green aesthetic with glassmorphism cards |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | React framework (App Router + Turbopack) |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first styling |
| [shadcn/ui](https://ui.shadcn.com/) | Base UI components |
| [Upstash Redis](https://upstash.com/) | Serverless view counter |
| [Vercel](https://vercel.com/) | Deployment & hosting |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repo
git clone https://github.com/Gimm17/ManWhoCantBeMoved-PromptGenerator.git
cd ManWhoCantBeMoved-PromptGenerator

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables (Optional)

For the view counter feature, create a `.env.local` file:

```env
KV_REST_API_URL=your_upstash_redis_url
KV_REST_API_TOKEN=your_upstash_redis_token
```

> The app works perfectly fine without these — the view counter simply won't display.

---

## 📁 Project Structure

```
├── app/
│   ├── api/views/          # View counter API route
│   ├── layout.tsx          # Root layout + metadata
│   └── page.tsx            # Home page
├── components/
│   ├── builder/            # Scene, Character, Vibe, Camera sections
│   ├── output/             # Prompt output + mobile bottom bar
│   └── ui/                 # Reusable UI components (SearchableSelect, etc.)
├── context/                # React context for builder state
├── data/                   # Characters, poses, food, scenes, styles
├── hooks/                  # Custom hooks (useViewCounter)
└── lib/                    # Reducer, types, prompt builder logic
```

---

## 🎯 How It Works

```mermaid
graph LR
    A[Pick Scene] --> B[Add Characters]
    B --> C[Choose Poses]
    C --> D[Set Vibe & Camera]
    D --> E[Generated Prompt]
    E --> F[Copy to AI Tool]
    F --> G[🖼️ AI Image]
```

1. **Select a scene preset** (or go full custom)
2. **Add characters** from anime/drama/film roster
3. **Pick poses** for each character (68 options!)
4. **Set the mood** — vibe, camera angle, photo style
5. **Copy the prompt** → paste into Gemini / Midjourney / Flux
6. **Generate your image** 🎨

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Add new **characters** in `data/characters.ts`
- Add new **poses** in `data/poses.ts`
- Add new **scene presets** in `data/scenes.ts`
- Add new **food/drink options** in `data/food.ts`

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with ❤️ by [Gimora Digital](https://gimora.my.id/)**

[![GitHub](https://img.shields.io/badge/GitHub-Gimm17-2D3B2F?style=flat-square&logo=github)](https://github.com/Gimm17)
[![Website](https://img.shields.io/badge/Website-gimora.my.id-E88D8D?style=flat-square&logo=safari&logoColor=white)](https://gimora.my.id/)

</div>
