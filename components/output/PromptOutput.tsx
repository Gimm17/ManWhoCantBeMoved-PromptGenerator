'use client';
import { useBuilder } from '@/context/BuilderContext';
import { buildPrompt } from '@/lib/buildPrompt';
import { useState, useMemo } from 'react';

export default function PromptOutput() {
  const { state } = useBuilder();
  const [copied, setCopied] = useState(false);
  const prompt = useMemo(() => buildPrompt(state), [state]);
  const wordCount = prompt.split(/\s+/).length;

  async function handleCopy() {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section className="stitch-card flex flex-col gap-4 h-auto">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h2 className="text-xs font-semibold uppercase tracking-[0.05em] text-sage-secondary">Generated Prompt</h2>
          <span className="text-[11px] text-sage-tertiary">{wordCount} words</span>
        </div>
        <button
          onClick={handleCopy}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer
            ${copied
              ? 'bg-sage-mint text-forest'
              : 'bg-dusty-rose text-white hover:opacity-90 shadow-[0_2px_8px_rgba(220,155,155,0.3)]'
            }`}
        >
          <span className="material-symbols-outlined text-sm">
            {copied ? 'check' : 'content_copy'}
          </span>
          {copied ? 'Copied!' : 'Copy Prompt'}
        </button>
      </div>

      {/* Prompt text area */}
      <div className="bg-page rounded-lg p-4 border border-input-border w-full flex-grow min-h-[300px]">
        <pre className="font-mono text-sm text-forest leading-relaxed whitespace-pre-wrap">{prompt}</pre>
      </div>
    </section>
  );
}
