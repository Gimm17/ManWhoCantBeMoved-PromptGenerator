'use client';
import { useState, useEffect } from 'react';

export default function WelcomePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasSeen = localStorage.getItem('mwcm_welcome_seen');
    if (!hasSeen) {
      const timer = setTimeout(() => setOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleClose() {
    setOpen(false);
    localStorage.setItem('mwcm_welcome_seen', 'true');
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-4 sm:p-6">
      {/* Subtle backdrop */}
      <div
        className="absolute inset-0 bg-black/10 backdrop-blur-[1px] animate-in fade-in duration-300"
        onClick={handleClose}
      />

      {/* Compact card — slides up on mobile, fades in on desktop */}
      <div
        className="relative bg-page border border-surface-variant rounded-2xl shadow-lg max-w-xs w-full p-4 mb-20 sm:mb-0 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out"
        onClick={e => e.stopPropagation()}
      >
        {/* Close X */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-forest/30 hover:text-forest/60 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-base">close</span>
        </button>

        {/* Content */}
        <p className="text-xs text-forest/70 leading-relaxed pr-5">
          🎵 Web ini <strong className="text-forest">100% gratis</strong>. Mau request anime, aktor, atau artis favoritmu?
        </p>

        {/* IG link — subtle, on-palette */}
        <a
          href="https://www.instagram.com/gimoradigital.id/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClose}
          className="mt-3 w-full py-2 rounded-lg text-[11px] font-semibold text-dusty-rose bg-dusty-rose/8 border border-dusty-rose/15 hover:bg-dusty-rose/15 transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
        >
          Follow @gimoradigital.id ✦ Request di sana
        </a>
      </div>
    </div>
  );
}
