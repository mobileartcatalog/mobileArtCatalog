import reduceReducers from 'reduce-reducers';

import getArt from './getArt';
import getArtworkDetail from './getArtworkDetail';
import addArtwork from './addArtwork';
// import editArtwork from './editArtwork';
import deleteArtwork from './deleteArtwork';

const initialState = {
  loading: false,
  all: [],
  selected: {},
  count: 0,
};

const artReducer = reduceReducers(
  initialState,
  getArt,
  getArtworkDetail,
  addArtwork,
  // editArtwork,
  deleteArtwork
);

export default artReducer;
