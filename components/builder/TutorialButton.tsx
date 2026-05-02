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

            {/* Tip */}
            <div className="mt-3 p-2.5 rounded-lg bg-dusty-rose/8 border border-dusty-rose/15 text-[11px] text-forest/60 leading-relaxed">
              💡 <strong>Tip:</strong> Pakai foto wajah close-up yang jelas. Gemini 2.0 Flash atau Flux memberikan hasil terbaik.
            </div>
          </div>
        </div>
      )}
    </>
  );
}
