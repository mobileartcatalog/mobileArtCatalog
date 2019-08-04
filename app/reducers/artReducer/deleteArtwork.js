// import axios from 'axios';

const deletedArtwork = id => ({
  type: 'DELETED_ARTWORK',
  id,
});

export const deleteArtwork = id => {
  return async dispatch => {
    try {
      // await axios.delete(`/api/art/${id}`);
      dispatch(deletedArtwork(id));
    } catch (err) {
      console.error(err);
    }
  };
};

const reducer = (state, action) => {
  let filteredArtList = state.all.filter(artwork => artwork.id !== action.id);
  return { ...state, all: filteredArtList };
};

export default reducer;
