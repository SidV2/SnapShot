import PHOTOS_ACTION_TYPES from './photos.types';

export const USER_INITIAL_STATE = {
  photos: [],
  isLoading: null
};

export const photosReducer = (state = USER_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case PHOTOS_ACTION_TYPES.SET_IMAGES:
      return { 
        ...state, 
        photos: payload 
      };
    case PHOTOS_ACTION_TYPES.SET_LOADING:
      return {
        ...state,
        isLoading: payload
      }
    default:
      return state;
  }
};