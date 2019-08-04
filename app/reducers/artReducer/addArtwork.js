// import axios from 'axios';

const ADDED_ART = 'ADDED_ART';

const addedArt = artwork => ({
  type: 'ADDED_ART',
  artwork,
});

export const addArt = artwork => {
  return async dispatch => {
    try {
      // const { data } = await axios.post('/api/art/', artwork);
      dispatch(addedArt(data));
    } catch (err) {
      console.error(err);
    }
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADDED_ART:
      return { ...state, all: [...state.all, action.art] };
    default:
      return state;
  }
};

export default reducer;
