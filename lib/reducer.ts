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
  characterSlots: [],
  coupleSlots: [],
  globalUserPosition: '',
  artistSlots: [],
  userOutfit: 'ref-photo',
  userPose: 'duduk-stare',
  userPosition: '',
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

    // ── Couple Slots ──
    case 'ADD_COUPLE_SLOT':
      if (state.coupleSlots.length >= 2) return state;
      return {
        ...state,
        coupleSlots: [
          ...state.coupleSlots,
          { id: nanoid(), coupleKey: null, userPosition: 'between', couplePose: 'silent-side', advancedMode: false, char1Pose: '', char2Pose: '', artStyle: 'realistic' }
        ]
      };
    case 'REMOVE_COUPLE_SLOT': {
      const newCouples = state.coupleSlots.filter(s => s.id !== action.id);
      // Auto-reset user position if it was couple-specific and no longer valid
      let newPos = state.userPosition;
      const couplePositions = ['between-couple', 'beside-couple'];
      const couple2Positions = ['center-between-both', 'between-left-couple', 'between-right-couple', 'far-from-couples'];
      if (newCouples.length === 0 && couplePositions.includes(newPos)) newPos = '';
      if (newCouples.length < 2 && couple2Positions.includes(newPos)) newPos = '';
      return { ...state, coupleSlots: newCouples, userPosition: newPos };
    }
    case 'UPDATE_COUPLE_SLOT':
      if (action.value === null) return state;
      return {
        ...state,
        coupleSlots: state.coupleSlots.map(s => {
          if (s.id !== action.id) return s;
          // advancedMode is boolean — toggle via truthy string
          if (action.field === 'advancedMode') {
            return { ...s, advancedMode: action.value === 'true' };
          }
          return { ...s, [action.field]: action.value };
        })
      };

    case 'SET_USER_FIELD':
      if (action.value === null) return state;
      return { ...state, [action.field]: action.value };
    case 'SET_USER_POSITION':
      return { ...state, userPosition: action.value };
    case 'SET_VIBE':
      if (action.value === null) return state;
      return { ...state, vibe: action.value };
    case 'SET_CAMERA_FIELD':
      if (action.value === null) return state;
      return { ...state, [action.field]: action.value };
    case 'SET_GLOBAL_USER_POSITION': {
      // When global position is set, reset individual couple userPositions
      const newCouples = action.value
        ? state.coupleSlots.map(s => ({ ...s, userPosition: '' as const }))
        : state.coupleSlots;
      return { ...state, globalUserPosition: action.value, coupleSlots: newCouples };
    }

    // ── Artist Slots ──
    case 'ADD_ARTIST_SLOT':
      if (state.artistSlots.length >= 3) return state;
      return {
        ...state,
        artistSlots: [
          ...state.artistSlots,
          { id: nanoid(), artistKey: null, pose: '', artStyle: 'realistic', displayMode: 'full-band', selectedMembers: [], userPosition: '' }
        ]
      };
    case 'REMOVE_ARTIST_SLOT': {
      const newArtists = state.artistSlots.filter(s => s.id !== action.id);
      // Auto-reset user position if it was band-specific and no more artists
      let newArtistPos = state.userPosition;
      const bandPositions = ['beside-vocalist', 'center-band', 'edge-band', 'leaning-near-band'];
      if (newArtists.length === 0 && bandPositions.includes(newArtistPos)) newArtistPos = '';
      return { ...state, artistSlots: newArtists, userPosition: newArtistPos };
    }
    case 'UPDATE_ARTIST_SLOT':
      if (action.value === null) return state;
      return {
        ...state,
        artistSlots: state.artistSlots.map(s =>
          s.id === action.id ? { ...s, [action.field]: action.value } : s
        )
      };

    case 'RESET_ALL':
      return {
        ...INITIAL_STATE,
        characterSlots: [],
        coupleSlots: [],
        globalUserPosition: '',
        artistSlots: [],
        userPosition: '',
      };
    default:
      return state;
  }
}
