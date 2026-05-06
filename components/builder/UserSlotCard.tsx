'use client';
import { useMemo } from 'react';
import { useBuilder } from '@/context/BuilderContext';
import { CHARACTERS } from '@/data/characters';
import { COUPLES } from '@/data/couples';
import { ARTISTS } from '@/data/artists';
import { POSES } from '@/data/poses';
import { getAvailablePositions } from '@/data/positions';
import { isPosePositionCompatible, getPosePosture, getPostureLabel } from '@/lib/poseCompat';
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

/** Extract short display name from a prompt name like "Takaki Toono (from 5cm/s)" → "Takaki Toono" */
function shortName(promptName: string): string {
  return promptName.split('(')[0].trim().split(',')[0].trim();
}

export interface LineupEntry {
  id: string;       // unique identifier
  name: string;     // short display name
  source: 'couple' | 'character' | 'artist';
}

/** Build a flat ordered list of all characters in the scene */
export function buildLineup(state: {
  coupleSlots: { coupleKey: string | null }[];
  characterSlots: { characterKey: string | null }[];
  artistSlots: { artistKey: string | null; displayMode: string; selectedMembers: string[] }[];
}): LineupEntry[] {
  const lineup: LineupEntry[] = [];

  // 1. Couple characters
  state.coupleSlots.forEach(slot => {
    if (!slot.coupleKey) return;
    const couple = COUPLES.find(c => c.id === slot.coupleKey);
    if (!couple) return;
    lineup.push({ id: `cp-${couple.id}-1`, name: shortName(couple.char1PromptName), source: 'couple' });
    lineup.push({ id: `cp-${couple.id}-2`, name: shortName(couple.char2PromptName), source: 'couple' });
  });

  // 2. Individual characters
  state.characterSlots.forEach(slot => {
    if (!slot.characterKey) return;
    const char = CHARACTERS.find(c => c.id === slot.characterKey);
    if (!char) return;
    lineup.push({ id: `ch-${char.id}`, name: shortName(char.promptName), source: 'character' });
  });

  // 3. Artist/band members
  state.artistSlots.forEach(slot => {
    if (!slot.artistKey) return;
    const artist = ARTISTS.find(a => a.id === slot.artistKey);
    if (!artist) return;
    if (artist.type === 'solo') {
      lineup.push({ id: `ar-${artist.id}`, name: shortName(artist.promptName), source: 'artist' });
    } else {
      const members = artist.members ?? [];
      let displayMembers = members;
      if (slot.displayMode === 'vocalist-only') {
        displayMembers = members.filter(m => m.role === 'vocalist');
      } else if (slot.displayMode === 'custom' && slot.selectedMembers.length > 0) {
        displayMembers = members.filter(m => slot.selectedMembers.includes(m.id));
      }
      displayMembers.forEach(m => {
        lineup.push({ id: `ar-${m.id}`, name: m.name, source: 'artist' });
      });
    }
  });

  return lineup;
}

/** Generate dynamic position options based on lineup */
function buildDynamicPositions(lineup: LineupEntry[]): { value: string; label: string; group: string }[] {
  if (lineup.length < 1) return [];
  const options: { value: string; label: string; group: string }[] = [];
  const group = '🎯 Posisi Spesifik';

  // "Between X & Y" for each adjacent pair
  for (let idx = 0; idx < lineup.length - 1; idx++) {
    options.push({
      value: `dyn-between-${idx}-${idx + 1}`,
      label: `Di antara ${lineup[idx].name} & ${lineup[idx + 1].name}`,
      group,
    });
  }

  // "Beside first (far left)" and "Beside last (far right)"
  if (lineup.length >= 1) {
    options.push({
      value: `dyn-beside-left`,
      label: `Di samping kiri ${lineup[0].name}`,
      group,
    });
    options.push({
      value: `dyn-beside-right`,
      label: `Di samping kanan ${lineup[lineup.length - 1].name}`,
      group,
    });
  }

  return options;
}

export default function UserSlotCard() {
  const { state, dispatch } = useBuilder();

  // Build the full character lineup
  const lineup = useMemo(() => buildLineup(state), [
    state.coupleSlots, state.characterSlots, state.artistSlots
  ]);

  // Dynamically compute available positions based on active couples/artists
  const coupleCount = state.coupleSlots.filter(s => s.coupleKey).length;
  const artistCount = state.artistSlots.filter(s => s.artistKey).length;
  const staticPositions = useMemo(
    () => getAvailablePositions(coupleCount, artistCount),
    [coupleCount, artistCount]
  );

  // Dynamic positions based on lineup
  const dynamicPositions = useMemo(() => buildDynamicPositions(lineup), [lineup]);

  const userPosePosture = getPosePosture(state.userPose);
  const userPostureLabel = getPostureLabel(userPosePosture);

  // Group labels for static positions
  const groupLabels: Record<string, string> = {
    'base': '📍 Posisi Umum',
    'couple': '💔 Posisi Couple',
    'couple-2': '💔💔 Posisi 2 Couple',
    'band': '🎤 Posisi Band/Artist',
  };

  // Build final options: static + dynamic
  const positionOptions = [
    ...staticPositions.map(p => ({
      value: p.value,
      label: p.label,
      group: groupLabels[p.group] ?? '',
    })),
    ...dynamicPositions,
  ];

  // Check if current position is still available
  const allValues = positionOptions.map(p => p.value);
  const currentPosStillValid = !state.userPosition || allValues.includes(state.userPosition);

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

        {/* Position — searchable with dynamic groups */}
        <div className="flex flex-col gap-1">
          <label className="text-[11px] font-medium text-forest-muted flex items-center gap-1">
            📍 Posisi kamu di scene
            {!currentPosStillValid && (
              <span className="text-[9px] text-red-400 font-normal">⚠️ posisi sebelumnya sudah tidak valid</span>
            )}
          </label>
          <SearchableSelect
            value={currentPosStillValid ? (state.userPosition || '_none') : '_none'}
            onValueChange={v => dispatch({ type: 'SET_USER_POSITION', value: v === '_none' ? '' : v })}
            options={positionOptions}
            placeholder="— Tidak ada / default —"
          />
          {/* Compatibility warning */}
          {state.userPosition && (() => {
            const compatible = isPosePositionCompatible(state.userPose, state.userPosition);
            if (compatible) return null;
            return (
              <p className="text-[10px] text-amber-600 mt-0.5">
                ⚠️ Pose kamu ({userPostureLabel}) mungkin tidak cocok dengan posisi ini. Prompt akan auto-adjust.
              </p>
            );
          })()}
        </div>
      </div>
    </div>
  );
}
