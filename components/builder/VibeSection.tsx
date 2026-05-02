'use client';
import { useBuilder } from '@/context/BuilderContext';

export const VIBES = [
  { value:'nongkrong', label:'Nongkrong santai', prompt:"relaxed nongkrong energy, nonchalant late night chill among people who understand each other's pain without words" },
  { value:'melancholic', label:'Melancholic', prompt:'melancholic and reflective, each person quietly with their own thoughts, shared heavy silence' },
  { value:'nostalgia', label:'Nostalgia', prompt:'warm nostalgic, bittersweet like the last night before everyone goes their separate ways' },
  { value:'patah-hati', label:'Patah hati tapi ketawa', prompt:'broken but laughing, everyone hurting but making dark jokes, gallows humor that masks real pain' },
  { value:'cinematic', label:'Cinematic', prompt:'dramatic cinematic slow-motion feeling, heavy unspoken emotion hanging in the air' },
  { value:'solidaritas', label:'Solidaritas', prompt:'solidarity, quiet brotherhood of people who all got left, presence alone is enough without words' },
  { value:'chaotic', label:'Chaotic healing', prompt:'chaotic healing, everyone processing heartbreak differently, loud messy overlapping energy' },
  { value:'cozy', label:'Cozy', prompt:'the last night sitting still before deciding to walk away and start over' },
  { value:'lonely', label:'Lonely together', prompt:'lonely together, each person isolated in their own sadness despite sitting side by side' },
  { value:'hopeful', label:'Hopeful', prompt:'starting to see light at the end, soft hopeful determined quiet energy emerging' },
];

export default function VibeSection() {
  const { state, dispatch } = useBuilder();
  return (
    <section className="stitch-card flex flex-col gap-2">
      <h2 className="text-xs font-semibold uppercase tracking-[0.05em] text-sage-secondary mb-1">
        Mood / Vibe
      </h2>
      <div className="flex flex-wrap gap-2">
        {VIBES.map(v => (
          <button
            key={v.value}
            onClick={() => dispatch({ type: 'SET_VIBE', value: v.value })}
            className={`vibe-chip cursor-pointer ${state.vibe === v.value ? 'vibe-chip-active' : 'vibe-chip-inactive'}`}
          >
            {v.label}
          </button>
        ))}
      </div>
    </section>
  );
}
