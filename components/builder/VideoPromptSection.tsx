'use client';
import { useState, useMemo } from 'react';
import { nanoid } from 'nanoid';
import { useBuilder } from '@/context/BuilderContext';
import { buildVideoPrompt } from '@/lib/buildVideoPrompt';
import { VideoScene } from '@/lib/types';
import { CAMERA_MOVEMENTS, TRANSITIONS, SCENE_MOODS } from '@/data/videoScenes';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

function createDefaultScene(): VideoScene {
  return {
    id: nanoid(),
    cameraMovement: 'push-in',
    transition: 'slow-fade',
    sceneMood: 'tense-silence',
    description: '',
    durationSeconds: 7,
  };
}

export default function VideoPromptSection() {
  const { state } = useBuilder();
  const [expanded, setExpanded] = useState(false);
  const [scenes, setScenes] = useState<VideoScene[]>([createDefaultScene()]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  const prompts = useMemo(() => {
    if (!expanded) return [];
    return buildVideoPrompt(state, scenes);
  }, [state, scenes, expanded]);

  function addScene() {
    if (scenes.length >= 5) return;
    setScenes(prev => [...prev, createDefaultScene()]);
  }

  function removeScene(id: string) {
    if (scenes.length <= 1) return;
    setScenes(prev => prev.filter(s => s.id !== id));
  }

  function updateScene(id: string, field: keyof VideoScene, value: string | number | null) {
    if (value === null) return;
    setScenes(prev => prev.map(s => s.id === id ? { ...s, [field]: value } : s));
  }

  async function copyScene(index: number) {
    await navigator.clipboard.writeText(prompts[index]);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  }

  async function copyAll() {
    await navigator.clipboard.writeText(prompts.join('\n\n─────────────────────────\n\n'));
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  }

  if (!expanded) {
    return (
      <section className="stitch-card flex flex-col gap-2">
        <button
          onClick={() => setExpanded(true)}
          className="w-full py-3.5 rounded-lg text-sm font-medium bg-rose-dark text-white hover:opacity-90 transition-all duration-200 flex justify-center items-center gap-2 cursor-pointer shadow-[0_2px_12px_rgba(133,80,80,0.3)]"
        >
          <span className="material-symbols-outlined text-base">movie</span>
          🎬 Generate Video Prompt
        </button>
        <p className="text-[11px] text-center text-forest/40">
          Generate prompt video dari scene gambar yang sedang kamu buat
        </p>
      </section>
    );
  }

  return (
    <section className="stitch-card flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-xs font-semibold uppercase tracking-[0.05em] text-rose-dark">
            🎬 Video Prompt
          </h2>
          <span className="text-xs font-semibold uppercase tracking-[0.05em] text-forest/30">(max 5 scenes)</span>
        </div>
        <button
          onClick={() => setExpanded(false)}
          className="text-xs font-medium text-forest/40 hover:text-forest/60 transition-colors cursor-pointer"
        >
          Tutup
        </button>
      </div>

      {/* Scene cards */}
      <div className="flex flex-col gap-3">
        {scenes.map((scene, index) => (
          <div key={scene.id} className="bg-page rounded-lg border border-surface-variant p-3 flex flex-col gap-2">
            {/* Scene header */}
            <div className="flex justify-between items-center">
              <span className="bg-rose-dark/10 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.05em] text-rose-dark">
                Scene {index + 1}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-forest/40 font-medium">{scene.durationSeconds}s</span>
                {scenes.length > 1 && (
                  <button
                    onClick={() => removeScene(scene.id)}
                    className="text-xs font-semibold uppercase tracking-[0.05em] text-dusty-rose hover:opacity-80 transition-opacity cursor-pointer"
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>

            {/* Scene controls */}
            <div className="flex flex-col gap-2 mt-1">
              {/* Camera movement */}
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-medium text-forest-muted">Camera movement</label>
                <Select value={scene.cameraMovement} onValueChange={v => updateScene(scene.id, 'cameraMovement', v)}>
                  <SelectTrigger><SelectValue options={CAMERA_MOVEMENTS} /></SelectTrigger>
                  <SelectContent>
                    {CAMERA_MOVEMENTS.map(o => <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>

              {/* Scene mood */}
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-medium text-forest-muted">Scene mood</label>
                <Select value={scene.sceneMood} onValueChange={v => updateScene(scene.id, 'sceneMood', v)}>
                  <SelectTrigger><SelectValue options={SCENE_MOODS} /></SelectTrigger>
                  <SelectContent>
                    {SCENE_MOODS.map(o => <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>

              {/* Transition */}
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-medium text-forest-muted">Transition ke scene berikutnya</label>
                <Select value={scene.transition} onValueChange={v => updateScene(scene.id, 'transition', v)}>
                  <SelectTrigger><SelectValue options={TRANSITIONS} /></SelectTrigger>
                  <SelectContent>
                    {TRANSITIONS.map(o => <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>

              {/* Custom scene direction */}
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-medium text-forest-muted">Scene direction <span className="text-forest/30">(opsional)</span></label>
                <textarea
                  value={scene.description}
                  onChange={e => updateScene(scene.id, 'description', e.target.value)}
                  placeholder="Deskripsi tambahan untuk scene ini... misal: karakter A berdiri lalu pergi"
                  className="stitch-input min-h-[60px] resize-none text-xs"
                  rows={2}
                />
              </div>
            </div>

            {/* Scene prompt output */}
            {prompts[index] && (
              <div className="mt-2 bg-forest/[0.03] rounded-md border border-surface-variant p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-sage-secondary">Prompt Scene {index + 1}</span>
                  <button
                    onClick={() => copyScene(index)}
                    className="flex items-center gap-1 text-[11px] font-medium text-dusty-rose hover:opacity-80 transition-opacity cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-sm">
                      {copiedIndex === index ? 'check' : 'content_copy'}
                    </span>
                    {copiedIndex === index ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <pre className="font-mono text-[11px] text-forest/70 leading-relaxed whitespace-pre-wrap max-h-[200px] overflow-y-auto">
                  {prompts[index]}
                </pre>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add scene button */}
      {scenes.length < 5 && (
        <button
          onClick={addScene}
          className="w-full py-3 rounded-lg border border-dashed border-surface-variant text-forest-muted text-sm hover:bg-light-sage transition-colors duration-200 flex justify-center items-center gap-2 cursor-pointer"
        >
          <span className="material-symbols-outlined text-sm">add</span>
          Add scene
        </button>
      )}

      {/* Copy all button */}
      {prompts.length > 1 && (
        <button
          onClick={copyAll}
          className={`w-full py-3 rounded-lg text-sm font-medium transition-all duration-200 flex justify-center items-center gap-2 cursor-pointer ${
            copiedAll
              ? 'bg-sage-mint text-forest'
              : 'bg-rose-dark text-white shadow-[0_2px_8px_rgba(133,80,80,0.25)]'
          }`}
        >
          <span className="material-symbols-outlined text-sm">
            {copiedAll ? 'check' : 'content_copy'}
          </span>
          {copiedAll ? 'All Copied!' : `Copy All ${prompts.length} Scenes`}
        </button>
      )}
    </section>
  );
}
