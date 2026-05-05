'use client';
import { COUPLES, COUPLE_GROUPS } from '@/data/couples';
import { COUPLE_POSES } from '@/data/couplePoses';
import { POSES } from '@/data/poses';
import { ART_STYLES } from '@/data/styles';
import { CoupleSlot } from '@/lib/types';
import { useBuilder } from '@/context/BuilderContext';
import { isPosePositionCompatible, getPosePosture, getPostureLabel } from '@/lib/poseCompat';
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
  { value: 'cp-diam-buang-muka', label: '💔 Diam — buang muka dari ex', group: '💔 Couple Special' },
  { value: 'cp-lirik-diam', label: '💔 Diam-diam lirik ex', group: '💔 Couple Special' },
  { value: 'cp-pura-pura-sibuk', label: '💔 Pura-pura sibuk (biar ga canggung)', group: '💔 Couple Special' },
  { value: 'cp-nangis-pelan', label: '💔 Nangis pelan tanpa suara', group: '💔 Couple Special' },
  { value: 'cp-senyum-paksa', label: '💔 Senyum paksa depan orang', group: '💔 Couple Special' },
  { value: 'cp-genggam-tangan-sendiri', label: '💔 Genggam tangan sendiri (dulu genggam dia)', group: '💔 Couple Special' },
  { value: 'cp-pegang-cincin', label: '💔 Pegang/putar cincin di jari', group: '💔 Couple Special' },
  { value: 'cp-hapus-chat', label: '💔 Lagi hapus chat ex di HP', group: '💔 Couple Special' },
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
  globalPositionActive: boolean;
  onRemove: () => void;
  onUpdate: (field: keyof CoupleSlot, value: string | null) => void;
}

export default function CoupleSlotCard({ slot, slotNumber, canRemove, globalPositionActive, onRemove, onUpdate }: Props) {
  const { state } = useBuilder();
  const selectedCouple = COUPLES.find(c => c.id === slot.coupleKey);
  const char1Name = selectedCouple ? selectedCouple.char1PromptName.split('(')[0].trim() : 'Karakter 1';
  const char2Name = selectedCouple ? selectedCouple.char2PromptName.split('(')[0].trim() : 'Karakter 2';
  const userPosePosture = getPosePosture(state.userPose);
  const userPostureLabel = getPostureLabel(userPosePosture);

  return (
    <div className="bg-page rounded-lg border border-surface-variant p-3 flex flex-col gap-2">
      {/* Header */}
      <div className="flex justify-between items-center w-full">
        <span className="bg-light-sage rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.05em] text-dusty-rose">
          💔 Couple {slotNumber}
        </span>
        {canRemove && (
          <button onClick={onRemove} className="text-xs font-semibold uppercase tracking-[0.05em] text-dusty-rose hover:opacity-80 transition-opacity cursor-pointer">
            Remove
          </button>
        )}
      </div>

      {/* Stacked dropdowns — same structure as CharacterSlotCard */}
      <div className="flex flex-col gap-2 mt-1">
        {/* Couple pair select — searchable */}
        <SearchableSelect
          value={slot.coupleKey || ''}
          onValueChange={v => onUpdate('coupleKey', v)}
          options={COUPLE_OPTIONS}
          placeholder="Pilih couple..."
        />

        {/* Breakup info badge */}
        {selectedCouple && (
          <p className="text-[11px] text-forest/50 leading-relaxed">
            <span className="font-semibold text-dusty-rose">{selectedCouple.source}</span>
            {' — '}
            <span className="italic">{selectedCouple.breakupReason}</span>
          </p>
        )}

        {/* User position — hidden when global position overrides, with compatibility warnings */}
        {!globalPositionActive && (
          <Select value={slot.userPosition} onValueChange={v => onUpdate('userPosition', v)}>
            <SelectTrigger><SelectValue options={[
              { value: 'between', label: 'Between — kamu di tengah couple' },
              { value: 'beside', label: 'Beside — kamu di samping couple' },
            ]} placeholder="— Posisi diatur global —" /></SelectTrigger>
            <SelectContent>
              {[{ value: 'between', label: 'Between — kamu di tengah couple' }, { value: 'beside', label: 'Beside — kamu di samping couple' }].map(o => {
                const compatible = isPosePositionCompatible(state.userPose, o.value);
                return (
                  <SelectItem key={o.value} value={o.value}>
                    <span className={compatible ? '' : 'line-through text-red-400/60 opacity-50'}>{o.label}</span>
                    {!compatible && <span className="text-[9px] text-red-400 ml-1">⚠️ pose {userPostureLabel}</span>}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        )}
        {globalPositionActive && (
          <p className="text-[11px] text-dusty-rose/60 italic py-1">📍 Posisi diatur dari dropdown global di atas</p>
        )}

        {/* Couple dynamic — searchable */}
        <SearchableSelect
          value={slot.couplePose}
          onValueChange={v => onUpdate('couplePose', v)}
          options={COUPLE_POSE_OPTIONS}
          placeholder="Pilih couple dynamic..."
        />

        {/* Advanced toggle */}
        <button
          onClick={() => onUpdate('advancedMode', slot.advancedMode ? '' : 'true')}
          className={`w-full py-1.5 rounded-md text-[11px] font-medium transition-colors cursor-pointer border ${
            slot.advancedMode
              ? 'bg-dusty-rose/10 text-dusty-rose border-dusty-rose/30'
              : 'bg-page text-forest/40 border-surface-variant hover:bg-light-sage'
          }`}
        >
          {slot.advancedMode ? '✦ Advanced Mode ON — atur pose per karakter' : '⚙ Advanced — atur pose masing-masing'}
        </button>

        {/* Advanced mode — individual poses */}
        {slot.advancedMode && (
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-medium text-sage-secondary truncate">🧑 {char1Name}</label>
              <SearchableSelect
                value={slot.char1Pose}
                onValueChange={v => onUpdate('char1Pose', v)}
                options={CHAR_POSE_OPTIONS}
                placeholder="Pose karakter 1..."
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-medium text-sage-secondary truncate">👩 {char2Name}</label>
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
