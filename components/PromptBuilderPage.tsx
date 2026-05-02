'use client';
import SceneSection from './builder/SceneSection';
import CharacterSection from './builder/CharacterSection';
import VibeSection from './builder/VibeSection';
import CameraSection from './builder/CameraSection';
import TutorialButton from './builder/TutorialButton';
import PromptOutput from './output/PromptOutput';
import MobilePromptBar from './output/MobilePromptBar';
import { useBuilder } from '@/context/BuilderContext';
import { useViewCounter } from '@/hooks/useViewCounter';

export default function PromptBuilderPage() {
  const { dispatch } = useBuilder();
  const views = useViewCounter();

  return (
    <div className="min-h-screen bg-page flex flex-col">
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

          {/* View counter — always visible, compact on mobile */}
          {views !== null && (
            <div className="flex items-center gap-1 md:gap-1.5 px-2 md:px-3 py-1 rounded-full bg-forest/5 text-forest/60 text-[11px] md:text-xs font-medium">
              <span className="material-symbols-outlined text-sm">visibility</span>
              <span>{views.toLocaleString('id-ID')}</span>
              <span className="hidden sm:inline">views</span>
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
            <span className="hidden sm:inline">New Prompt</span>
          </button>
        </div>
      </header>

      {/* Main layout */}
      <main className="max-w-[1100px] mx-auto pt-20 pb-8 px-4 md:px-8 flex flex-col md:flex-row gap-6 relative items-start flex-1">
        {/* Builder column */}
        <div className="w-full md:w-[60%] flex flex-col gap-8 pb-24 lg:pb-8">
          <SceneSection />
          <CharacterSection />
          <VibeSection />
          <CameraSection />
          <TutorialButton />
        </div>

        {/* Prompt output — desktop only */}
        <div className="hidden md:block w-[40%] sticky top-20">
          <PromptOutput />
        </div>
      </main>

      {/* Footer watermark */}
      <footer className="w-full border-t border-sage-mint/50 bg-sage-mint/30 py-4 pb-20 md:pb-4">
        <div className="max-w-[1100px] mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3 text-xs text-forest/40">
          <span>
            Created by{' '}
            <a href="https://gimora.my.id/" target="_blank" rel="noopener noreferrer" className="font-semibold text-forest/60 hover:text-dusty-rose transition-colors underline underline-offset-2">
              Gimora Digital
            </a>
          </span>
          <span className="hidden sm:inline text-forest/20">•</span>
          <a href="https://github.com/Gimm17" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-forest/50 hover:text-forest/70 transition-colors">
            <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
            Gimm17
          </a>
        </div>
      </footer>

      {/* Mobile bottom bar */}
      <MobilePromptBar />
    </div>
  );
}
