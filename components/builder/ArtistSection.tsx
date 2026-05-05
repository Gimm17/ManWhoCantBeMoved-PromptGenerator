'use client';
import { useBuilder } from '@/context/BuilderContext';
import ArtistSlotCard from './ArtistSlotCard';

export default function ArtistSection() {
  const { state, dispatch } = useBuilder();
  const canAdd = state.artistSlots.length < 3;

  return (
    <section className="stitch-card flex flex-col gap-4">
      <div className="flex items-center gap-2 mb-1">
        <h2 className="text-xs font-semibold uppercase tracking-[0.05em] text-amber-700">
          🎤 Artist / Group Band
        </h2>
        <span className="text-xs font-semibold uppercase tracking-[0.05em] text-forest/30">(max 3)</span>
      </div>

      {/* Artist slots */}
      {state.artistSlots.length > 0 && (
        <div className="flex flex-col gap-3">
          {state.artistSlots.map((slot, index) => (
            <ArtistSlotCard
              key={slot.id}
              slot={slot}
              slotNumber={index + 1}
              canRemove={true}
              onRemove={() => dispatch({ type: 'REMOVE_ARTIST_SLOT', id: slot.id })}
              onUpdate={(field, value) => dispatch({ type: 'UPDATE_ARTIST_SLOT', id: slot.id, field, value })}
            />
          ))}
        </div>
      )}

      {/* Add button */}
      {canAdd && (
        <button
          onClick={() => dispatch({ type: 'ADD_ARTIST_SLOT' })}
          className="w-full py-3 rounded-lg border border-dashed border-amber-300/50 text-amber-600/70 text-sm hover:bg-amber-50/30 transition-colors duration-200 flex justify-center items-center gap-2 cursor-pointer"
        >
          <span className="material-symbols-outlined text-sm">add</span>
          Add artist / band
        </button>
      )}
    </section>
  );
}
