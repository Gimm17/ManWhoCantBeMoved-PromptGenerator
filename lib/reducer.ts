import { SCENE_PRESETS } from '@/data/scenes';
import { nanoid } from 'nanoid';
import { BuilderAction, BuilderState } from './types';

export const INITIAL_STATE: BuilderState = {
  scenePresetId: 'indomaret',
  sceneCustomDetail: '',
  tod: 'late-night',
  weather: 'clear',
  furniture: 'kursi-indomaret',
  food: 'golda-taro-chitato',
  bgProps: 'motor-indomaret',
  bgCustom: '',
  characterSlots: [{ id: nanoid(), characterKey: null, pose: '', artStyle: 'realistic' }],
  userOutfit: 'ref-photo',
  userPose: 'duduk-stare',
  vibe: 'nongkrong',
  cameraAngle: 'elevated-34',
  photoStyle: 'iphone',
  composition: 'all-balanced',
};

export function builderReducer(state: BuilderState, action: BuilderAction): BuilderState {
  switch (action.type) {
    case 'APPLY_SCENE_PRESET': {
      if (!action.presetId) return state;
      // "custom" = user wants to set everything manually
      if (action.presetId === 'custom') {
        return { ...state, scenePresetId: 'custom' };
      }
      const preset = SCENE_PRESETS.find(p => p.id === action.presetId);
      if (!preset) return state;
      return {
        ...state,
        scenePresetId: preset.id,
        tod: preset.tod,
        weather: preset.weather,
        furniture: preset.furniture,
        food: preset.food,
        bgProps: preset.bgProps,
      };
    }
    case 'SET_SCENE_FIELD':
      if (action.value === null) return state;
      return { ...state, [action.field]: action.value };
    case 'ADD_CHARACTER_SLOT':
      if (state.characterSlots.length >= 8) return state;
      return {
        ...state,
        characterSlots: [
          ...state.characterSlots,
          { id: nanoid(), characterKey: null, pose: '', artStyle: 'realistic' }
        ]
      };
    case 'REMOVE_CHARACTER_SLOT':
      return { ...state, characterSlots: state.characterSlots.filter(s => s.id !== action.id) };
    case 'UPDATE_CHARACTER_SLOT':
      if (action.value === null) return state;
      return {
        ...state,
        characterSlots: state.characterSlots.map(s =>
          s.id === action.id ? { ...s, [action.field]: action.value } : s
        )
      };

    case 'SET_USER_FIELD':
      if (action.value === null) return state;
      return { ...state, [action.field]: action.value };
    case 'SET_VIBE':
      if (action.value === null) return state;
      return { ...state, vibe: action.value };
    case 'SET_CAMERA_FIELD':
      if (action.value === null) return state;
      return { ...state, [action.field]: action.value };
    case 'RESET_ALL':
      return {
        ...INITIAL_STATE,
        characterSlots: [{ id: nanoid(), characterKey: null, pose: '', artStyle: 'realistic' }],
      };
    default:
      return state;
  }
}
