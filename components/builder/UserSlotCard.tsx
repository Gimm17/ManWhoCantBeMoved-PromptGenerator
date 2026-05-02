'use client';
import { useBuilder } from '@/context/BuilderContext';
import { POSES } from '@/data/poses';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SearchableSelect } from '@/components/ui/searchable-select';

export const OUTFIT_OPTIONS = [
  { value:'ref-photo', label:'Ikut reference photo', prompt:'casual outfit from reference photo — reconstruct EXACTLY as worn in the photo' },
  { value:'black-suit', label:'Black suit + tie', prompt:'black suit and tie, smart formal but slightly tired-looking' },
  { value:'oversized-hoodie', label:'Oversized hoodie + sandal', prompt:'oversized hoodie, jogger pants, slippers' },
  { value:'streetwear', label:'Streetwear', prompt:'streetwear — cargo pants, graphic tee, chunky sneakers' },
  { value:'batik', label:'Batik shirt', prompt:'batik shirt in traditional Indonesian batik pattern, black trousers' },
  { value:'seragam', label:'Seragam sekolah', prompt:'school uniform — plain white shirt, dark trousers, school badge pin' },
  { value:'kaos-putih', label:'Kaos putih + jeans + sandal', prompt:'plain white t-shirt, blue jeans, sandal jepit flip-flops' },
  { value:'flannel', label:'Flannel + jeans + boots', prompt:'flannel plaid shirt, blue jeans, ankle boots' },
];

/** Flatten poses with group info for SearchableSelect */
const POSE_OPTIONS = POSES.map(p => ({ value: p.value, label: p.label, group: p.group }));

export default function UserSlotCard() {
  const { state, dispatch } = useBuilder();

  return (
    <div className="bg-page rounded-lg border border-dashed border-dusty-rose p-4 flex flex-col gap-2">
      {/* Header */}
      <div className="flex justify-between items-start w-full">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.05em] text-dusty-rose flex items-center gap-1">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            YOU
          </span>
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-dusty-rose">Exact Face Match</span>
      </div>

      {/* Stacked dropdowns */}
      <div className="flex flex-col gap-2 mt-1">
        {/* Outfit — regular select (few items) */}
        <Select value={state.userOutfit} onValueChange={v => dispatch({ type: 'SET_USER_FIELD', field: 'userOutfit', value: v })}>
          <SelectTrigger><SelectValue options={OUTFIT_OPTIONS} /></SelectTrigger>
          <SelectContent>
            {OUTFIT_OPTIONS.map(o => <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>)}
          </SelectContent>
        </Select>

        {/* Pose — searchable (many items) */}
        <SearchableSelect
          value={state.userPose}
          onValueChange={v => dispatch({ type: 'SET_USER_FIELD', field: 'userPose', value: v })}
          options={POSE_OPTIONS}
          placeholder="Pilih pose..."
        />
      </div>
    </div>
  );
}
