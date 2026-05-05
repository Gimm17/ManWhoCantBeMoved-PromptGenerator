'use client';
import { useBuilder } from '@/context/BuilderContext';
import CoupleSlotCard from './CoupleSlotCard';
import { isPosePositionCompatible, getPosePosture, getPostureLabel } from '@/lib/poseCompat';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

/** Global user position options — visible only when 2 couples are active */
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
  const hasTwoCouples = state.coupleSlots.length === 2;
  const userPosePosture = getPosePosture(state.userPose);
  const userPostureLabel = getPostureLabel(userPosePosture);

  return (
    <section className="stitch-card flex flex-col gap-4">
      <div className="flex items-center gap-2 mb-1">
        <h2 className="text-xs font-semibold uppercase tracking-[0.05em] text-dusty-rose">
          💔 Between / Beside Couple
        </h2>
        <span className="text-xs font-semibold uppercase tracking-[0.05em] text-forest/30">(max 2)</span>
      </div>

      {/* Global user position — only when 2 couples are active */}
      {hasTwoCouples && (
        <div className="bg-dusty-rose/5 rounded-lg border border-dusty-rose/15 p-3 flex flex-col gap-1.5">
          <label className="text-[11px] font-semibold text-dusty-rose uppercase tracking-wide">
            📍 Posisi kamu di antara 2 couple
          </label>
          <Select
            value={state.globalUserPosition}
            onValueChange={v => dispatch({ type: 'SET_GLOBAL_USER_POSITION', value: v ?? '' })}
          >
            <SelectTrigger><SelectValue options={GLOBAL_USER_POSITIONS} placeholder="— Tidak ada (atur per couple) —" /></SelectTrigger>
            <SelectContent>
              {GLOBAL_USER_POSITIONS.map(o => {
                const compatible = !o.value || isPosePositionCompatible(state.userPose, o.value);
                return (
                  <SelectItem key={o.value || '_none'} value={o.value}>
                    <span className={compatible ? '' : 'line-through text-red-400/60 opacity-50'}>{o.label}</span>
                    {!compatible && <span className="text-[9px] text-red-400 ml-1">⚠️ pose {userPostureLabel}</span>}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Couple slots */}
      {state.coupleSlots.length > 0 && (
        <div className="flex flex-col gap-3">
          {state.coupleSlots.map((slot, index) => (
            <CoupleSlotCard
              key={slot.id}
              slot={slot}
              slotNumber={index + 1}
              canRemove={true}
              globalPositionActive={hasTwoCouples && !!state.globalUserPosition}
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
