export interface UserPosition {
  value: string;
  label: string;
  prompt: string;
  group: 'base' | 'couple' | 'couple-2' | 'band';
}

// ── Base positions (always visible) ──
// ── Couple positions (visible when couple slots > 0) ──
// ── 2-Couple positions (visible when couple slots === 2) ──
// ── Band positions (visible when artist slots > 0) ──

export const USER_POSITIONS: UserPosition[] = [
  // ── Base — always visible ──
  { group: 'base', value: '_none', label: '— Tidak ada / default —', prompt: '' },
  { group: 'base', value: 'center-group', label: 'Di tengah semua orang', prompt: '[YOU / Reference Person] is sitting at the CENTER of the entire group — the focal point, surrounded by all other characters on both sides' },
  { group: 'base', value: 'edge-left', label: 'Di ujung kiri frame', prompt: '[YOU / Reference Person] is sitting at the far LEFT edge of the frame — the first person in the row, slightly apart from the rest of the group' },
  { group: 'base', value: 'edge-right', label: 'Di ujung kanan frame', prompt: '[YOU / Reference Person] is sitting at the far RIGHT edge of the frame — the last person in the row, quietly present at the end' },
  { group: 'base', value: 'across-table', label: 'Di seberang meja (hadapan mereka)', prompt: '[YOU / Reference Person] is sitting ACROSS the table from the other characters — directly facing them, able to see everyone from the opposite side' },
  { group: 'base', value: 'behind-all', label: 'Di belakang — menyimak dari belakang', prompt: '[YOU / Reference Person] is positioned BEHIND the group — watching from the back, a silent observer to everything happening at the table' },
  { group: 'base', value: 'standing-apart', label: 'Berdiri agak menjauh', prompt: '[YOU / Reference Person] is STANDING slightly apart from the seated group — not sitting with them but close enough to be part of the scene, maintaining a quiet distance' },
  { group: 'base', value: 'leaning-wall', label: 'Bersandar di tembok dekat mereka', prompt: '[YOU / Reference Person] is LEANING against a wall nearby the group — arms crossed or hands in pockets, watching the group from a detached vantage point' },

  // ── Couple — visible when ≥ 1 couple active ──
  { group: 'couple', value: 'between-couple', label: '💔 Di tengah couple (between)', prompt: '[YOU / Reference Person] is sitting BETWEEN the former couple — physically placed in the gap between two people who once loved each other, caught in the middle of their unresolved tension' },
  { group: 'couple', value: 'beside-couple', label: '💔 Di samping couple (beside)', prompt: '[YOU / Reference Person] is sitting BESIDE the former couple — next to them as an outside witness to the heavy silence between two people who used to be everything to each other' },

  // ── 2-Couple — visible when exactly 2 couples active ──
  { group: 'couple-2', value: 'center-between-both', label: '💔💔 Di tengah kedua couple', prompt: '[YOU / Reference Person] is positioned at the CENTER between both former couples — surrounded on all sides by unresolved tension, caught in the crossfire of two separate heartbreaks simultaneously' },
  { group: 'couple-2', value: 'between-left-couple', label: '💔💔 Di tengah couple 1 (kiri)', prompt: '[YOU / Reference Person] is sitting BETWEEN the first couple (left side of frame) — physically placed in the gap between them, while the second couple sits nearby' },
  { group: 'couple-2', value: 'between-right-couple', label: '💔💔 Di tengah couple 2 (kanan)', prompt: '[YOU / Reference Person] is sitting BETWEEN the second couple (right side of frame) — inserted into their broken dynamic while the first couple occupies the other side' },
  { group: 'couple-2', value: 'far-from-couples', label: '💔💔 Dari kejauhan — melihat kedua couple', prompt: '[YOU / Reference Person] is watching from a DISTANCE — far away from both couples, physically separated yet emotionally absorbing the shared pain radiating from two broken relationships' },

  // ── Band — visible when ≥ 1 artist/band active ──
  { group: 'band', value: 'beside-vocalist', label: '🎤 Di samping vocalist', prompt: '[YOU / Reference Person] is sitting RIGHT NEXT TO the vocalist — shoulder to shoulder, closest to the frontperson of the band in a casual hangout setting' },
  { group: 'band', value: 'center-band', label: '🎤 Di tengah band members', prompt: '[YOU / Reference Person] is sitting at the CENTER of the band members — surrounded by musicians in a casual hangout setting, part of the inner circle' },
  { group: 'band', value: 'edge-band', label: '🎤 Di pinggir grup band — agak menjauh', prompt: '[YOU / Reference Person] is at the EDGE of the band group — slightly separated, not quite part of the band\'s inner circle but present in the same space' },
  { group: 'band', value: 'leaning-near-band', label: '🎤 Berdiri/bersandar dekat band', prompt: '[YOU / Reference Person] is STANDING or LEANING near the band — not sitting with them but close enough to be part of the scene, casually observing the musicians' },
];

/** Get filtered positions based on active couple/artist counts */
export function getAvailablePositions(coupleCount: number, artistCount: number): UserPosition[] {
  return USER_POSITIONS.filter(p => {
    if (p.group === 'base') return true;
    if (p.group === 'couple') return coupleCount >= 1;
    if (p.group === 'couple-2') return coupleCount >= 2;
    if (p.group === 'band') return artistCount >= 1;
    return false;
  });
}
