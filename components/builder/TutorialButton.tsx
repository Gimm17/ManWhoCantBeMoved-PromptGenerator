'use client';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet';

const STEPS = [
  {
    icon: '🏙️',
    title: '1. Pilih Scene',
    desc: 'Pilih scene preset (misal: Depan Indomaret, Seoul Rooftop) atau pilih "Custom" untuk menulis sendiri. Atur waktu, cuaca, furniture, dan makanan di meja.',
  },
  {
    icon: '🧑‍🤝‍🧑',
    title: '2. Tambahkan Karakter',
    desc: 'Pilih karakter dari anime, K-drama, atau film. Kamu bisa tambah sampai 8 karakter. Slot "YOU" adalah untuk kamu sendiri — AI akan match wajahmu dari reference photo.',
  },
  {
    icon: '🎭',
    title: '3. Atur Pose',
    desc: 'Pilih pose untuk setiap karakter. Ada 68 pilihan pose: duduk diam, makan, ngerokok, main HP, dan lainnya. Gunakan search untuk cari cepat.',
  },
  {
    icon: '🎨',
    title: '4. Set Vibe & Camera',
    desc: 'Pilih mood/vibe scene (nongkrong santai, melankolis, dll), sudut kamera, dan style foto (iPhone, DSLR, dll).',
  },
  {
    icon: '📋',
    title: '5. Copy Prompt',
    desc: 'Klik "Copy Prompt" untuk menyalin seluruh prompt yang sudah di-generate. Prompt sudah terstruktur dan siap pakai.',
  },
  {
    icon: '🤖',
    title: '6. Paste ke AI Tool',
    desc: 'Buka Gemini, ChatGPT, Midjourney, atau Flux. Paste prompt yang sudah kamu copy. Upload juga reference photo wajahmu agar AI bisa render wajahmu dengan akurat.',
  },
  {
    icon: '💡',
    title: 'Tips Pro',
    desc: 'Untuk hasil terbaik: (1) Upload reference photo wajah close-up yang jelas, (2) Gunakan Gemini 2.0 Flash atau Flux untuk hasil paling akurat, (3) Jika karakter film/drama kurang mirip, coba upload screenshot karakter tersebut juga.',
  },
];

export default function TutorialButton() {
  const [copied, setCopied] = useState(false);

  return (
    <Sheet>
      <SheetTrigger className="w-full py-3 rounded-xl text-sm font-semibold bg-forest/5 text-forest border border-forest/10 hover:bg-forest/10 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2">
        <span className="material-symbols-outlined text-lg">help_outline</span>
        Tutorial Penggunaan
      </SheetTrigger>
      <SheetContent side="bottom" className="max-h-[80vh] rounded-t-2xl p-0" showCloseButton={false}>
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-surface-variant sticky top-0 bg-white rounded-t-2xl z-10">
          <SheetClose className="flex items-center gap-1 text-sm font-medium text-sage-secondary hover:text-forest transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-lg">close</span>
            Tutup
          </SheetClose>
          <SheetTitle className="text-sm font-bold text-forest">
            📖 Cara Penggunaan
          </SheetTitle>
          <div className="w-16" /> {/* spacer for centering */}
        </div>

        {/* Steps */}
        <div className="overflow-y-auto px-5 py-4" style={{ maxHeight: 'calc(80vh - 56px)' }}>
          <div className="flex flex-col gap-4">
            {STEPS.map((step, i) => (
              <div
                key={i}
                className="flex gap-3 p-3 rounded-xl bg-light-sage/50 border border-sage-mint/30"
              >
                <div className="text-2xl shrink-0 mt-0.5">{step.icon}</div>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <h3 className="text-sm font-bold text-forest">{step.title}</h3>
                  <p className="text-xs text-forest/70 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}

            {/* Quick summary */}
            <div className="mt-2 p-4 rounded-xl bg-dusty-rose/10 border border-dusty-rose/20">
              <h3 className="text-sm font-bold text-dusty-rose mb-1.5">⚡ Ringkasan Singkat</h3>
              <p className="text-xs text-forest/70 leading-relaxed">
                Pilih Scene → Tambah Karakter → Atur Pose → Set Vibe → <strong>Copy Prompt</strong> → Paste ke Gemini/Midjourney → Upload Reference Photo → Generate! 🎨
              </p>
            </div>

            {/* Bottom padding for mobile */}
            <div className="h-4" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
