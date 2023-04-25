import PlaylistData from "../../../application/models/playlist";

import Actions from "./actions";

const defaultState = {
  isLoading: false,
  errorCode: null,
  isLoggedIn: false,
  data: [] as PlaylistData[],
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case Actions.FETCH_STARTED:
      return { ...state, isLoading: true, errorCode: false };
    case Actions.FETCH_ERROR:
      console.log("ERROR PLAYLISTS", action.errorCode);
      return { ...state, isLoading: false, errorCode: action.errorCode };
    case Actions.RESET_FETCH:
      return { ...state, isLoading: false, errorCode: null };
    case Actions.STORE_RESULTS:
      return {
        ...state,
        data: action.data,
        isLoading: false,
        errorCode: null,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default authReducer;
