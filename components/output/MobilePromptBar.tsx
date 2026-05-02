'use client';
import { useBuilder } from '@/context/BuilderContext';
import { buildPrompt } from '@/lib/buildPrompt';
import { useState, useMemo } from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet';

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
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-light-sage/95 backdrop-blur-sm border-t border-sage-mint px-4 py-3 flex gap-3 z-50">
      <Sheet>
        <SheetTrigger className="flex-1 py-2.5 rounded-lg text-sm font-medium bg-page text-forest border border-input-border hover:bg-light-sage transition-colors duration-200 cursor-pointer">
          Preview Prompt
        </SheetTrigger>
        <SheetContent side="bottom" className="max-h-[60vh] rounded-t-2xl p-0" showCloseButton={false}>
          {/* Sheet header with back/close button */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-surface-variant sticky top-0 bg-white rounded-t-2xl z-10">
            <SheetClose className="flex items-center gap-1 text-sm font-medium text-sage-secondary hover:text-forest transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              Kembali
            </SheetClose>
            <SheetTitle className="text-xs font-semibold uppercase tracking-[0.05em] text-sage-secondary">
              Generated Prompt
            </SheetTitle>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 text-xs font-medium text-dusty-rose hover:text-dusty-rose/80 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">
                {copied ? 'check' : 'content_copy'}
              </span>
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>

          {/* Prompt content — scrollable */}
          <div className="overflow-y-auto px-4 py-3" style={{ maxHeight: 'calc(60vh - 52px)' }}>
            <pre className="font-mono text-xs text-forest leading-relaxed whitespace-pre-wrap">{prompt}</pre>
          </div>
        </SheetContent>
      </Sheet>

      <button
        onClick={handleCopy}
        className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer flex items-center justify-center gap-2
          ${copied
            ? 'bg-sage-mint text-forest'
            : 'bg-dusty-rose text-white shadow-[0_2px_8px_rgba(220,155,155,0.3)]'
          }`}
      >
        <span className="material-symbols-outlined text-sm">
          {copied ? 'check' : 'content_copy'}
        </span>
        {copied ? 'Copied!' : 'Copy Prompt'}
      </button>
    </div>
  );
}
