'use client';
import SceneSection from './builder/SceneSection';
import CharacterSection from './builder/CharacterSection';
import VibeSection from './builder/VibeSection';
import CameraSection from './builder/CameraSection';
import PromptOutput from './output/PromptOutput';
import MobilePromptBar from './output/MobilePromptBar';
import { useBuilder } from '@/context/BuilderContext';
import { useViewCounter } from '@/hooks/useViewCounter';

export default function PromptBuilderPage() {
  const { dispatch } = useBuilder();
  const views = useViewCounter();

  return (
    <div className="min-h-screen bg-page">
      {/* Minimal header */}
      <header className="fixed top-0 w-full z-50 bg-sage-mint border-b border-sage-mint/50 shadow-[0_2px_8px_rgba(45,59,47,0.04)] backdrop-blur-sm">
        <div className="max-w-[1100px] mx-auto flex justify-between items-center px-4 md:px-8 h-12 md:h-14">
          {/* Logo + branding */}
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-dusty-rose flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-white text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>music_note</span>
            </div>
            <div className="flex flex-col leading-tight min-w-0">
              <span className="text-sm md:text-base font-bold text-forest truncate">Can&apos;t Be Moved</span>
              <span className="text-[9px] md:text-[10px] text-forest/40 font-medium tracking-wider uppercase hidden sm:block">Prompt Studio</span>
            </div>
          </div>

          {/* View counter */}
          {views !== null && (
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest/5 text-forest/60 text-xs font-medium animate-in fade-in duration-500">
              <span className="material-symbols-outlined text-sm">visibility</span>
              {views.toLocaleString('id-ID')} views
            </div>
          )}

          {/* Reset button */}
          <button
            onClick={() => {
              if (window.confirm('Reset semua ke default?')) {
                dispatch({ type: 'RESET_ALL' });
              }
            }}
            className="flex items-center gap-1 md:gap-1.5 px-2.5 md:px-3 py-1.5 rounded-md text-xs md:text-sm font-medium text-dusty-rose hover:bg-dusty-rose/10 transition-colors cursor-pointer shrink-0"
          >
            <span className="material-symbols-outlined text-base">restart_alt</span>
            <span className="hidden xs:inline">New Prompt</span>
            <span className="xs:hidden">Reset</span>
          </button>
        </div>
      </header>

      {/* Main layout */}
      <main className="max-w-[1100px] mx-auto pt-20 pb-8 px-4 md:px-8 flex flex-col md:flex-row gap-6 relative items-start">
        {/* Builder column */}
        <div className="w-full md:w-[60%] flex flex-col gap-8 pb-24 lg:pb-8">
          <SceneSection />
          <CharacterSection />
          <VibeSection />
          <CameraSection />
        </div>

        {/* Prompt output — desktop only */}
        <div className="hidden md:block w-[40%] sticky top-20">
          <PromptOutput />
        </div>
      </main>

      {/* Mobile bottom bar */}
      <MobilePromptBar />
    </div>
  );
}
