'use client';
import { useBuilder } from '@/context/BuilderContext';
import CharacterSlotCard from './CharacterSlotCard';
import UserSlotCard from './UserSlotCard';

export default function CharacterSection() {
  const { state, dispatch } = useBuilder();
  const canAdd = state.characterSlots.length < 8;

  return (
    <section className="stitch-card flex flex-col gap-4">
      <div className="flex items-center gap-2 mb-1">
        <h2 className="text-xs font-semibold uppercase tracking-[0.05em] text-sage-secondary">
          Characters
        </h2>
        <span className="text-xs font-semibold uppercase tracking-[0.05em] text-dusty-rose">(max 8)</span>
      </div>

      {/* User slot — always first, highlighted */}
      <UserSlotCard />

      {/* Character slots */}
      <div className="flex flex-col gap-3">
        {state.characterSlots.map((slot, index) => (
          <CharacterSlotCard
            key={slot.id}
            slot={slot}
            slotNumber={index + 1}
            canRemove={state.characterSlots.length > 1}
            onRemove={() => dispatch({ type: 'REMOVE_CHARACTER_SLOT', id: slot.id })}
            onUpdate={(field, value) => dispatch({ type: 'UPDATE_CHARACTER_SLOT', id: slot.id, field, value })}
          />
        ))}
      </div>

      {/* Add button */}
      {canAdd && (
        <button
          onClick={() => dispatch({ type: 'ADD_CHARACTER_SLOT' })}
          className="w-full py-3 rounded-lg border border-dashed border-surface-variant text-forest-muted text-sm hover:bg-light-sage transition-colors duration-200 flex justify-center items-center gap-2 cursor-pointer"
        >
          <span className="material-symbols-outlined text-sm">add</span>
          Add character slot
        </button>
      )}
    </section>
  );
}
