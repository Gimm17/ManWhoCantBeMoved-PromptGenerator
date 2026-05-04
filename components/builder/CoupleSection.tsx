'use client';
import { useBuilder } from '@/context/BuilderContext';
import CoupleSlotCard from './CoupleSlotCard';

export default function CoupleSection() {
  const { state, dispatch } = useBuilder();
  const canAdd = state.coupleSlots.length < 2;

  return (
    <section className="stitch-card flex flex-col gap-4 border-dusty-rose/20">
      <div className="flex flex-col gap-1 mb-1">
        <div className="flex items-center gap-2">
          <h2 className="text-xs font-semibold uppercase tracking-[0.05em] text-dusty-rose">
            💔 Between / Beside Couple
          </h2>
          <span className="text-xs font-semibold uppercase tracking-[0.05em] text-forest/30">(max 2)</span>
        </div>
        <p className="text-[11px] text-forest/50 leading-relaxed">
          Duduk di <strong>tengah</strong> atau di <strong>samping</strong> couple yang sudah putus/cerai. Awkward level: 100%.
        </p>
      </div>

      {/* Couple slots */}
      {state.coupleSlots.length > 0 && (
        <div className="flex flex-col gap-3">
          {state.coupleSlots.map((slot, index) => (
            <CoupleSlotCard
              key={slot.id}
              slot={slot}
              slotNumber={index + 1}
              canRemove={true}
              onRemove={() => dispatch({ type: 'REMOVE_COUPLE_SLOT', id: slot.id })}
              onUpdate={(field, value) => dispatch({ type: 'UPDATE_COUPLE_SLOT', id: slot.id, field, value })}
            />
          ))}
        </div>
      )}

      {/* Add button */}
      {canAdd && (
        <button
          onClick={() => dispatch({ type: 'ADD_COUPLE_SLOT' })}
          className="w-full py-3 rounded-lg border border-dashed border-dusty-rose/30 text-dusty-rose/70 text-sm hover:bg-dusty-rose/5 transition-colors duration-200 flex justify-center items-center gap-2 cursor-pointer"
        >
          <span className="material-symbols-outlined text-sm">favorite</span>
          Add couple pair
        </button>
      )}
    </section>
  );
}
