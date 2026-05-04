'use client';
import { useState } from 'react';

export default function TutorialButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full py-2.5 rounded-xl text-sm font-medium bg-forest/5 text-forest/70 border border-forest/10 hover:bg-forest/10 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
      >
        <span className="material-symbols-outlined text-base">help_outline</span>
        Tutorial Penggunaan
      </button>

      {/* Floating center modal */}
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={() => setOpen(false)}>
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />

          {/* Dialog */}
          <div
            className="relative bg-white rounded-2xl shadow-xl max-w-sm w-full p-5 animate-in fade-in zoom-in-95 duration-200"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-forest">📖 Cara Pakai</h3>
              <button onClick={() => setOpen(false)} className="text-sage-secondary hover:text-forest transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            {/* Steps — compact */}
            <ol className="text-xs text-forest/80 leading-relaxed space-y-1.5 list-none">
              <li>🏙️ Pilih <strong>Scene</strong> & atur detail lokasi</li>
              <li>🧑‍🤝‍🧑 Tambah <strong>Karakter</strong> & atur pose masing-masing</li>
              <li>🎨 Set <strong>Vibe</strong>, sudut kamera, & style foto</li>
              <li>📋 Klik <strong>Copy Prompt</strong></li>
              <li>🤖 Paste ke <strong>Gemini / Midjourney / Flux</strong></li>
              <li>🖼️ Upload <strong>reference photo</strong> wajahmu, lalu generate!</li>
            </ol>

            {/* Video animation section */}
            <div className="mt-3 p-2.5 rounded-lg bg-sage-mint/20 border border-sage-mint/30">
              <p className="text-[11px] font-semibold text-forest/70 mb-1.5">🎬 Opsional: Animasikan gambar jadi video</p>
              <ol className="text-[11px] text-forest/60 leading-relaxed space-y-1 list-none">
                <li>1. Generate gambar dulu pakai prompt di atas</li>
                <li>2. Klik <strong>🎬 Generate Video Prompt</strong> di bawah Camera &amp; Style</li>
                <li>3. Atur scene, fokus kamera, aksi karakter, dll</li>
                <li>4. <strong>Copy</strong> prompt video per scene</li>
                <li>5. Di Gemini, <strong>upload gambar hasil generate</strong> + paste prompt video</li>
                <li>6. Generate! Gambarmu akan jadi video ~7 detik per scene</li>
              </ol>
            </div>

            {/* Tip */}
            <div className="mt-3 p-2.5 rounded-lg bg-dusty-rose/8 border border-dusty-rose/15 text-[11px] text-forest/60 leading-relaxed">
              💡 <strong>Tip:</strong> Pakai foto wajah close-up yang jelas. Gemini 2.0 Flash untuk gambar, Gemini Veo untuk video.
            </div>
          </div>
        </div>
      )}
    </>
  );
}
