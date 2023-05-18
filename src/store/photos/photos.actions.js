import PHOTOS_ACTION_TYPES from './photos.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setSearchParamter = (searchInput) =>
  createAction(PHOTOS_ACTION_TYPES.SET_SEARCH_PARAMETER, searchInput);

export const setImages = (photos) =>
  createAction(PHOTOS_ACTION_TYPES.SET_IMAGES, photos);

export const setLoading = (laodingStatus) =>
  createAction(PHOTOS_ACTION_TYPES.SET_LOADING, laodingStatus);