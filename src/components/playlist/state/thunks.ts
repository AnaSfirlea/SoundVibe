import { Dispatch } from "redux";

import BackendAPI from "../../../api/backendAPI";

import { selectIsLoading } from "./selectors";
import { setError, storeData } from "./creators";

const fetchPlaylists = () => async (
  dispatch: Dispatch,
  getState: () => any
) => {
  const state = getState();
  const isLoading = selectIsLoading(state);

  if (isLoading) {
    return;
  }

  const response = await new BackendAPI().playlists();

  if (response.status !== 200) {
    dispatch(setError(response.status));
    return;
  }

  dispatch(storeData(response.data));
};

export { fetchPlaylists };
