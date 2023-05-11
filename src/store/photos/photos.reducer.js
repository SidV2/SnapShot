import PHOTOS_ACTION_TYPES from './photos.types';

export const USER_INITIAL_STATE = {
  photos: [],
};

export const photosReducer = (state = USER_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  console.log(action);
  switch (type) {
    case PHOTOS_ACTION_TYPES.SET_IMAGES:
      return { 
        ...state, 
        photos: payload 
      };
    default:
      return state;
  }
};