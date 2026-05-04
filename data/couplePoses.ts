export interface CouplePoseOption {
  value: string;
  label: string;
  prompt: string;
}

export const COUPLE_POSES: CouplePoseOption[] = [
  { value:'silent-side', label:'Duduk diam bersebelahan — no talking', prompt:'the former couple sitting side by side in complete silence, both staring straight ahead, not speaking to each other, a wall of unspoken words between them' },
  { value:'back-to-back', label:'Saling memunggungi', prompt:'the former couple sitting back-to-back, physically close but emotionally miles apart, each facing away from the other' },
  { value:'secret-glance', label:'Satu diam-diam menatap yang lain', prompt:'one of the couple sneaking a longing glance at the other while they look away, the hidden gaze full of regret and what-ifs' },
  { value:'empty-chair', label:'Jarak 1 kursi kosong di antara mereka', prompt:'the former couple sitting with one empty chair space between them — a deliberate gap neither dares to close' },
  { value:'cry-ignore', label:'Satu menangis, satu pura-pura ga peduli', prompt:'one person from the couple quietly crying with head slightly down, the other sitting rigidly and pretending not to notice, jaw clenched' },
  { value:'phone-awkward', label:'Sama-sama pegang HP biar ga canggung', prompt:'both people from the couple holding their phones, scrolling aimlessly just to avoid the awkwardness of sitting next to their ex' },
  { value:'one-leaving', label:'Satu berdiri mau pergi, satu diam', prompt:'one person from the couple standing up about to leave, the other remaining seated and frozen, neither saying goodbye' },
  { value:'stare-forward', label:'Canggung — sama-sama lihat lurus', prompt:'both people from the couple sitting rigidly and looking straight forward, bodies tense, neither willing to turn their head toward the other' },
  { value:'accidental-lean', label:'Satu nyender tanpa sadar, yang lain menegang', prompt:'one person from the couple unconsciously leaning slightly toward the other out of old habit, the other stiffening up and pulling away' },
  { value:'passive-argue', label:'Berantem kecil — sindir tanpa lihat', prompt:'both people from the couple making passive-aggressive remarks under their breath without looking at each other, tension thick in the air' },
  { value:'shared-silence', label:'Berdua hening — cuma suara angin', prompt:'the former couple sharing a heavy silence, only the sound of wind between them, both lost in memories of what they used to be' },
  { value:'almost-touch', label:'Tangan hampir bersentuhan — tapi ditarik', prompt:'the former couple sitting close enough that their hands almost touch on the seat between them, but one pulls away at the last second' },
];
