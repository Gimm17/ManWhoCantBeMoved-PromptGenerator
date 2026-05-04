'use client';
import { COUPLES, COUPLE_GROUPS } from '@/data/couples';
import { COUPLE_POSES } from '@/data/couplePoses';
import { POSES } from '@/data/poses';
import { ART_STYLES } from '@/data/styles';
import { CoupleSlot } from '@/lib/types';
import { SearchableSelect } from '@/components/ui/searchable-select';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

/** Flatten couples with group info for SearchableSelect */
const COUPLE_OPTIONS = COUPLES.map(c => {
  const grp = COUPLE_GROUPS.find(g => g.id === c.group);
  return { value: c.id, label: c.label, group: grp?.label ?? '' };
});

/** Flatten couple poses */
const COUPLE_POSE_OPTIONS = COUPLE_POSES.map(p => ({ value: p.value, label: p.label, group: '' }));

/** Individual character poses — reuse from main poses + add couple-specific ones */
const CHAR_POSE_OPTIONS = [
  // Special couple poses at top
  { value: 'cp-diam-buang-muka', label: '💔 Diam — buang muka dari ex', group: '💔 Couple Special' },
  { value: 'cp-lirik-diam', label: '💔 Diam-diam lirik ex', group: '💔 Couple Special' },
  { value: 'cp-pura-pura-sibuk', label: '💔 Pura-pura sibuk (biar ga canggung)', group: '💔 Couple Special' },
  { value: 'cp-nangis-pelan', label: '💔 Nangis pelan tanpa suara', group: '💔 Couple Special' },
  { value: 'cp-senyum-paksa', label: '💔 Senyum paksa depan orang', group: '💔 Couple Special' },
  { value: 'cp-genggam-tangan-sendiri', label: '💔 Genggam tangan sendiri (dulu genggam dia)', group: '💔 Couple Special' },
  { value: 'cp-pegang-cincin', label: '💔 Pegang/putar cincin di jari', group: '💔 Couple Special' },
  { value: 'cp-hapus-chat', label: '💔 Lagi hapus chat ex di HP', group: '💔 Couple Special' },
  // All existing poses
  ...POSES.map(p => ({ value: p.value, label: p.label, group: p.group })),
];

/** Prompt text for couple-specific poses */
export const COUPLE_CHAR_POSES: Record<string, string> = {
  'cp-diam-buang-muka': 'sitting rigidly, face deliberately turned away from ex-partner, jaw tight, refusing to make eye contact',
  'cp-lirik-diam': 'sneaking a quiet longing glance toward ex-partner when they are not looking, eyes full of unsaid words',
  'cp-pura-pura-sibuk': 'pretending to be busy — adjusting clothes, checking nails, looking at phone — anything to avoid acknowledging the ex sitting nearby',
  'cp-nangis-pelan': 'silently crying, tears rolling down cheeks without sound, trying not to let anyone notice, especially the ex',
  'cp-senyum-paksa': 'forcing a smile in front of others, but eyes betraying deep sadness, mouth smiling but soul breaking',
  'cp-genggam-tangan-sendiri': 'holding own hand tightly in lap, fingers interlocking with themselves where they used to hold their partner\'s hand',
  'cp-pegang-cincin': 'fidgeting with a ring on their finger, twisting it nervously, a remnant of the relationship',
  'cp-hapus-chat': 'staring down at phone, scrolling through old chat messages, finger hovering over the delete button',
};

interface Props {
  slot: CoupleSlot;
  slotNumber: number;
  canRemove: boolean;
  onRemove: () => void;
  onUpdate: (field: keyof CoupleSlot, value: string | null) => void;
}

export default function CoupleSlotCard({ slot, slotNumber, canRemove, onRemove, onUpdate }: Props) {
  const selectedCouple = COUPLES.find(c => c.id === slot.coupleKey);

  // Get char names for labels
  const char1Name = selectedCouple ? selectedCouple.char1PromptName.split('(')[0].trim() : 'Karakter 1';
  const char2Name = selectedCouple ? selectedCouple.char2PromptName.split('(')[0].trim() : 'Karakter 2';

  return (
    <div className="bg-page rounded-lg border border-dusty-rose/30 p-4 flex flex-col gap-2 overflow-hidden min-w-0">
      {/* Header */}
      <div className="flex justify-between items-center w-full">
        <span className="bg-dusty-rose/15 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.05em] text-dusty-rose">
          💔 Couple {slotNumber}
        </span>
        {canRemove && (
          <button onClick={onRemove} className="text-xs font-semibold uppercase tracking-[0.05em] text-dusty-rose hover:opacity-80 transition-opacity cursor-pointer">
            Remove
          </button>
        )}
      </div>

      {/* Stacked controls */}
      <div className="flex flex-col gap-2 mt-1 min-w-0">
        {/* Couple pair select — searchable */}
        <SearchableSelect
          value={slot.coupleKey || ''}
          onValueChange={v => onUpdate('coupleKey', v)}
          options={COUPLE_OPTIONS}
          placeholder="Pilih couple..."
        />

        {/* Breakup info badge */}
        {selectedCouple && (
          <div className="bg-dusty-rose/8 border border-dusty-rose/20 rounded-md px-3 py-2 text-xs text-forest/70 leading-relaxed break-words overflow-hidden">
            <span className="font-semibold text-dusty-rose">{selectedCouple.source}</span>
            <span className="text-forest/40 mx-1.5">—</span>
            <span className="italic">{selectedCouple.breakupReason}</span>
          </div>
        )}

        {/* User position toggle: Between vs Beside */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-medium text-forest-muted uppercase tracking-wide">Posisi kamu</label>
          <div className="grid grid-cols-2 gap-1.5">
            <button
              onClick={() => onUpdate('userPosition', 'between')}
              className={`py-2 px-3 rounded-md text-xs font-medium transition-all duration-200 cursor-pointer border ${
                slot.userPosition === 'between'
                  ? 'bg-dusty-rose text-white border-dusty-rose shadow-[0_2px_8px_rgba(220,155,155,0.3)]'
                  : 'bg-page text-forest-muted border-surface-variant hover:bg-light-sage'
              }`}
            >
              <span className="block text-sm mb-0.5">🧍‍♂️👤🧍‍♀️</span>
              Between
            </button>
            <button
              onClick={() => onUpdate('userPosition', 'beside')}
              className={`py-2 px-3 rounded-md text-xs font-medium transition-all duration-200 cursor-pointer border ${
                slot.userPosition === 'beside'
                  ? 'bg-dusty-rose text-white border-dusty-rose shadow-[0_2px_8px_rgba(220,155,155,0.3)]'
                  : 'bg-page text-forest-muted border-surface-variant hover:bg-light-sage'
              }`}
            >
              <span className="block text-sm mb-0.5">🧍‍♂️🧍‍♀️ 👤</span>
              Beside
            </button>
          </div>
        </div>

        {/* Couple dynamic/pose — simple mode */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <label className="text-[11px] font-medium text-forest-muted uppercase tracking-wide">Couple dynamic</label>
            <button
              onClick={() => onUpdate('advancedMode', slot.advancedMode ? '' : 'true')}
              className={`text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full transition-all duration-200 cursor-pointer ${
                slot.advancedMode
                  ? 'bg-dusty-rose/15 text-dusty-rose'
                  : 'bg-forest/5 text-forest/40 hover:text-forest/60'
              }`}
            >
              {slot.advancedMode ? '✦ Advanced ON' : '⚙ Advanced'}
            </button>
          </div>
          <SearchableSelect
            value={slot.couplePose}
            onValueChange={v => onUpdate('couplePose', v)}
            options={COUPLE_POSE_OPTIONS}
            placeholder="Pilih couple dynamic..."
          />
        </div>

        {/* Advanced mode — individual poses per character */}
        {slot.advancedMode && (
          <div className="flex flex-col gap-2 pl-2 border-l-2 border-dusty-rose/20">
            <p className="text-[10px] text-forest/40 italic">
              Mode advanced — atur pose masing-masing karakter
            </p>

            {/* Char 1 pose */}
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-medium text-dusty-rose/80 truncate" title={char1Name}>
                🧑 {char1Name}
              </label>
              <SearchableSelect
                value={slot.char1Pose}
                onValueChange={v => onUpdate('char1Pose', v)}
                options={CHAR_POSE_OPTIONS}
                placeholder="Pose karakter 1..."
              />
            </div>

            {/* Char 2 pose */}
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-medium text-dusty-rose/80 truncate" title={char2Name}>
                👩 {char2Name}
              </label>
              <SearchableSelect
                value={slot.char2Pose}
                onValueChange={v => onUpdate('char2Pose', v)}
                options={CHAR_POSE_OPTIONS}
                placeholder="Pose karakter 2..."
              />
            </div>
          </div>
        )}

        {/* Art style — regular select */}
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
