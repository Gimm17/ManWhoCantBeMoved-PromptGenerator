'use client';
import { ARTISTS, ARTIST_REGIONS, BAND_DISPLAY_MODES } from '@/data/artists';
import { POSES } from '@/data/poses';
import { ART_STYLES } from '@/data/styles';
import { ArtistSlot } from '@/lib/types';
import { SearchableSelect } from '@/components/ui/searchable-select';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

/** Flatten artists with region group for SearchableSelect */
const ARTIST_OPTIONS = ARTISTS.map(a => {
  const rgn = ARTIST_REGIONS.find(r => r.id === a.region);
  return { value: a.id, label: a.label, group: rgn?.label ?? '' };
});

/** Flatten poses with group info */
const POSE_OPTIONS = POSES.map(p => ({ value: p.value, label: p.label, group: p.group }));

interface Props {
  slot: ArtistSlot;
  slotNumber: number;
  canRemove: boolean;
  onRemove: () => void;
  onUpdate: (field: keyof ArtistSlot, value: string | string[] | null) => void;
}

export default function ArtistSlotCard({ slot, slotNumber, canRemove, onRemove, onUpdate }: Props) {
  const selectedArtist = ARTISTS.find(a => a.id === slot.artistKey);
  const isBand = selectedArtist?.type === 'band';
  const members = selectedArtist?.members ?? [];

  /** Toggle a member in selectedMembers array */
  function toggleMember(memberId: string) {
    const current = slot.selectedMembers;
    const next = current.includes(memberId)
      ? current.filter(id => id !== memberId)
      : [...current, memberId];
    onUpdate('selectedMembers', next);
  }

  return (
    <div className="bg-page rounded-lg border border-surface-variant p-3 flex flex-col gap-2">
      {/* Header */}
      <div className="flex justify-between items-center w-full">
        <span className="bg-amber-100 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.05em] text-amber-700">
          🎤 Slot {slotNumber}
        </span>
        {canRemove && (
          <button onClick={onRemove} className="text-xs font-semibold uppercase tracking-[0.05em] text-dusty-rose hover:opacity-80 transition-opacity cursor-pointer">
            Remove
          </button>
        )}
      </div>

      <div className="flex flex-col gap-2 mt-1">
        {/* Artist select — searchable */}
        <SearchableSelect
          value={slot.artistKey || ''}
          onValueChange={v => onUpdate('artistKey', v)}
          options={ARTIST_OPTIONS}
          placeholder="Pilih artist / band..."
        />

        {/* Show artist type badge */}
        {selectedArtist && (
          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full w-fit ${
            isBand ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
          }`}>
            {isBand ? `🎸 Band — ${members.length} members` : '🎤 Solo Artist'}
          </span>
        )}

        {/* Band-specific controls */}
        {isBand && (
          <div className="bg-purple-50/50 rounded-lg border border-purple-200/30 p-2.5 flex flex-col gap-2">
            {/* Display mode */}
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-medium text-forest-muted">Tampilkan siapa?</label>
              <Select value={slot.displayMode} onValueChange={v => onUpdate('displayMode', v)}>
                <SelectTrigger><SelectValue options={BAND_DISPLAY_MODES} /></SelectTrigger>
                <SelectContent>
                  {BAND_DISPLAY_MODES.map(o => <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>

            {/* Custom member select — checkboxes */}
            {slot.displayMode === 'custom' && (
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-medium text-forest-muted">Pilih member:</label>
                <div className="flex flex-col gap-1">
                  {members.map(m => (
                    <label key={m.id} className="flex items-center gap-2 text-xs text-forest/80 cursor-pointer hover:bg-light-sage rounded px-2 py-1.5 transition-colors">
                      <input
                        type="checkbox"
                        checked={slot.selectedMembers.includes(m.id)}
                        onChange={() => toggleMember(m.id)}
                        className="rounded border-input-border accent-dusty-rose"
                      />
                      <span className="font-medium">{m.name}</span>
                      <span className="text-forest/40">— {m.role}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* User position now managed centrally in UserSlotCard */}
          </div>
        )}

        {/* Pose select — searchable (for solo, or for band as overall vibe) */}
        <SearchableSelect
          value={slot.pose}
          onValueChange={v => onUpdate('pose', v)}
          options={POSE_OPTIONS}
          placeholder="Pilih pose..."
        />

        {/* Art style */}
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
