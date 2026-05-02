'use client';
import { CHARACTERS, CHARACTER_GROUPS } from '@/data/characters';
import { POSES } from '@/data/poses';
import { ART_STYLES } from '@/data/styles';
import { CharacterSlot } from '@/lib/types';
import { SearchableSelect } from '@/components/ui/searchable-select';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

/** Flatten characters with group info for SearchableSelect */
const CHARACTER_OPTIONS = CHARACTERS.map(c => {
  const grp = CHARACTER_GROUPS.find(g => g.id === c.group);
  return { value: c.id, label: c.label, group: grp?.label ?? '' };
});

/** Flatten poses with group info */
const POSE_OPTIONS = POSES.map(p => ({ value: p.value, label: p.label, group: p.group }));

interface Props {
  slot: CharacterSlot;
  slotNumber: number;
  canRemove: boolean;
  onRemove: () => void;
  onUpdate: (field: keyof CharacterSlot, value: string | null) => void;
}

export default function CharacterSlotCard({ slot, slotNumber, canRemove, onRemove, onUpdate }: Props) {
  return (
    <div className="bg-page rounded-lg border border-surface-variant p-4 flex flex-col gap-2">
      {/* Header */}
      <div className="flex justify-between items-center w-full">
        <span className="bg-light-sage rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.05em] text-sage-secondary">
          Slot {slotNumber}
        </span>
        {canRemove && (
          <button onClick={onRemove} className="text-xs font-semibold uppercase tracking-[0.05em] text-dusty-rose hover:opacity-80 transition-opacity cursor-pointer">
            Remove
          </button>
        )}
      </div>

      {/* Stacked dropdowns */}
      <div className="flex flex-col gap-2 mt-1">
        {/* Character select — searchable */}
        <SearchableSelect
          value={slot.characterKey || ''}
          onValueChange={v => onUpdate('characterKey', v)}
          options={CHARACTER_OPTIONS}
          placeholder="Pilih karakter..."
        />

        {/* Pose select — searchable */}
        <SearchableSelect
          value={slot.pose}
          onValueChange={v => onUpdate('pose', v)}
          options={POSE_OPTIONS}
          placeholder="Pilih pose..."
        />

        {/* Art style — regular select (few options) */}
        <Select value={slot.artStyle} onValueChange={v => onUpdate('artStyle', v)}>
          <SelectTrigger><SelectValue options={ART_STYLES} /></SelectTrigger>
          <SelectContent>
            {ART_STYLES.map(s => <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
