// import axios from 'axios';
import artworkData from './data';

const GETTING_ART = 'GETTING_ART';
const GOT_ART = 'GOT_ART';

const gettingArt = () => ({
  type: 'GETTING_ART',
});

const gotArt = data => ({
  type: 'GOT_ART',
  data,
});

export const getArt = () => {
  return async dispatch => {
    try {
      dispatch(gettingArt());
      const data = artworkData;
      // const { data } = await axios.get('/api/art');
      dispatch(gotArt(data));
    } catch (err) {
      console.error(err);
    }
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case GETTING_ART:
      return { ...state, loading: true };
    case GOT_ART:
      return {
        ...state,
        loading: false,
        all: action.data,
        count: action.data.length,
      };
    default:
      return state;
  }
};

export default reducer;
