'use client';
import { useState, useEffect } from 'react';

export default function WelcomePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Check if user has seen the popup before
    const hasSeen = localStorage.getItem('mwcm_welcome_seen');
    if (!hasSeen) {
      // Show popup after a short delay for better effect
      const timer = setTimeout(() => setOpen(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleClose() {
    setOpen(false);
    localStorage.setItem('mwcm_welcome_seen', 'true');
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-forest/40 backdrop-blur-[2px] animate-in fade-in duration-500" 
        onClick={handleClose}
      />

      {/* Dialog */}
      <div
        className="relative bg-white rounded-[24px] shadow-2xl max-w-sm w-full p-6 animate-in zoom-in-95 slide-in-from-bottom-8 duration-700 ease-out overflow-hidden"
      >
        {/* Decorative background element */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-rose-dark/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-sage-mint/40 rounded-full blur-3xl pointer-events-none" />

        {/* Close button */}
        <button 
          onClick={handleClose} 
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-forest/5 text-forest/50 hover:bg-forest/10 hover:text-forest transition-colors cursor-pointer z-10"
        >
          <span className="material-symbols-outlined text-base">close</span>
        </button>

        <div className="relative z-10 flex flex-col items-center text-center mt-2">
          {/* Icon/Image */}
          <div className="w-16 h-16 bg-gradient-to-br from-rose-dark to-dusty-rose rounded-2xl shadow-lg flex items-center justify-center mb-5 animate-bounce" style={{ animationDuration: '2.5s' }}>
            <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>celebration</span>
          </div>

          <h2 className="text-xl font-bold text-forest mb-2">Selamat Datang! 🎉</h2>
          
          <div className="text-[13px] text-forest/70 leading-relaxed mb-6 space-y-3">
            <p>
              Web Prompt Generator ini <strong>100% GRATIS</strong> untuk membantumu membuat AI Fan Art <em>"The Man Who Can't Be Moved"</em>.
            </p>
            <div className="p-3 bg-gradient-to-br from-sage-mint/20 to-transparent border border-sage-mint/30 rounded-xl">
              <p className="font-semibold text-forest mb-1">Ada Request Khusus?</p>
              <p className="text-xs text-forest/60">
                Karakter anime, aktor, atau artis band favoritmu belum ada di list web ini?
              </p>
            </div>
          </div>

          <a 
            href="https://www.instagram.com/gimoradigital.id/" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={handleClose}
            className="w-full py-3.5 rounded-xl text-[13px] font-bold bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(253,29,29,0.3)] cursor-pointer"
          >
            Follow & Request di IG Kita!
          </a>

          <button 
            onClick={handleClose}
            className="mt-4 text-[11px] font-medium text-forest/40 hover:text-forest/60 transition-colors underline underline-offset-2 cursor-pointer"
          >
            Lanjut bikin prompt aja
          </button>
        </div>
      </div>
    </div>
  );
}
