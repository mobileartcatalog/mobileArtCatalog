// import axios from 'axios';
import artworkData from './data';

const GETTING_ARTWORK_DETAIL = 'GETTING_ARTWORK_DETAIL';
const GOT_ARTWORK_DETAIL = 'GOT_ARTWORK_DETAIL';

const gettingArtworkDetail = id => ({
  type: 'GETTING_ARTWORK_DETAIL',
  id,
});

const gotArtworkDetail = art => ({
  type: 'GOT_ARTWORK_DETAIL',
  art,
});

export const getArtworkDetail = id => {
  return async dispatch => {
    try {
      dispatch(gettingArtworkDetail());
      const data = artworkData[id - 1];
      // const { data } = await axios.get(`/api/art/${id}`);
      dispatch(gotArtworkDetail(data));
    } catch (err) {
      console.error(err);
    }
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case GETTING_ARTWORK_DETAIL:
      return { ...state, loading: true };
    case GOT_ARTWORK_DETAIL:
      return { ...state, loading: false, selected: action.art };
    default:
      return state;
  }
};

export default reducer;
