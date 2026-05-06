'use client';
import { useBuilder } from '@/context/BuilderContext';
import CoupleSlotCard from './CoupleSlotCard';

/** Global user position options — kept for buildPrompt backward compat */
export const GLOBAL_USER_POSITIONS = [
  { value: '', label: '— Tidak ada (atur per couple) —', prompt: '' },
  { value: 'center-between-both', label: 'Di tengah kedua couple', prompt: '[YOU / Reference Person] is positioned at the CENTER between both former couples — surrounded on all sides by unresolved tension, caught in the crossfire of two separate heartbreaks simultaneously' },
  { value: 'left-side', label: 'Di sebelah kiri (ujung kiri frame)', prompt: '[YOU / Reference Person] is sitting at the far LEFT edge of the frame — observing both couples from the side, an outsider looking into two broken relationships' },
  { value: 'right-side', label: 'Di sebelah kanan (ujung kanan frame)', prompt: '[YOU / Reference Person] is sitting at the far RIGHT edge of the frame — the last person in the row, silently witnessing the aftermath of two failed romances' },
  { value: 'behind-watching', label: 'Di belakang — menyimak dari belakang', prompt: '[YOU / Reference Person] is standing or sitting BEHIND both couples — watching from the back row, a silent observer to the dual heartbreak unfolding before them' },
  { value: 'far-away', label: 'Dari kejauhan — melihat dari jauh', prompt: '[YOU / Reference Person] is watching from a DISTANCE — far away from both couples, physically separated yet emotionally connected to the shared pain in the scene' },
  { value: 'standing-above', label: 'Berdiri di atas — melihat dari atas', prompt: '[YOU / Reference Person] is STANDING while both couples sit — towering above them, looking down at the mess of emotions below with a mix of empathy and helplessness' },
  { value: 'across-table', label: 'Di seberang meja — hadapan mereka', prompt: '[YOU / Reference Person] is sitting ACROSS the table from both couples — directly facing their pain, unable to look away from the awkward tension' },
  { value: 'leaning-wall', label: 'Bersandar di tembok — nonton dari samping', prompt: '[YOU / Reference Person] is leaning against a wall nearby, arms crossed — watching both couples from a detached vantage point, like a character who has already accepted their own heartbreak' },
  { value: 'walking-past', label: 'Lewat aja — jalan melewati mereka', prompt: '[YOU / Reference Person] is WALKING PAST both couples — caught mid-stride, turning their head slightly to glance at the scene as they pass by, a fleeting witness to frozen heartbreak' },
];

export default function CoupleSection() {
  const { state, dispatch } = useBuilder();
  const canAdd = state.coupleSlots.length < 2;

  return (
    <section className="stitch-card flex flex-col gap-4">
      <div className="flex items-center gap-2 mb-1">
        <h2 className="text-xs font-semibold uppercase tracking-[0.05em] text-dusty-rose">
          💔 Between / Beside Couple
        </h2>
        <span className="text-xs font-semibold uppercase tracking-[0.05em] text-forest/30">(max 2)</span>
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
              globalPositionActive={false}
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
