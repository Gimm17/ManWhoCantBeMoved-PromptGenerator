export interface CharacterSlot {
  id: string;
  characterKey: string | null;
  pose: string;
  artStyle: string;
}

export interface BuilderState {
  scenePresetId: string;
  sceneCustomDetail: string;
  tod: string;
  weather: string;
  furniture: string;
  food: string;
  bgProps: string;
  bgCustom: string;
  characterSlots: CharacterSlot[];

  userOutfit: string;
  userPose: string;
  vibe: string;
  cameraAngle: string;
  photoStyle: string;
  composition: string;
}

export type BuilderAction =
  | { type: 'APPLY_SCENE_PRESET'; presetId: string | null }
  | { type: 'SET_SCENE_FIELD'; field: string; value: string | null }
  | { type: 'ADD_CHARACTER_SLOT' }
  | { type: 'REMOVE_CHARACTER_SLOT'; id: string }
  | { type: 'UPDATE_CHARACTER_SLOT'; id: string; field: keyof CharacterSlot; value: string | null }
  | { type: 'SET_USER_FIELD'; field: 'userOutfit' | 'userPose'; value: string | null }
  | { type: 'SET_VIBE'; value: string | null }
  | { type: 'SET_CAMERA_FIELD'; field: 'cameraAngle' | 'photoStyle' | 'composition'; value: string | null }
  | { type: 'RESET_ALL' };
