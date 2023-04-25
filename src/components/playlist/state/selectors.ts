import React from "react";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import PlaylisData from "../../../application/models/playlist";

const selectPlaylistsState = (state) => state.playlists;
const selectIsLoading = createSelector(
  selectPlaylistsState,
  (state) => state.isLoading
);
const selectIsError = createSelector(
  selectPlaylistsState,
  (state) => !!state.errorCode
);
const selectPlaylists = createSelector(
  selectPlaylistsState,
  (state) => state.data
);

const usePlaylist = (playlistID): PlaylisData => {
  const playlists = useSelector(selectPlaylists);

  return React.useMemo(
    () => playlists.find((playlist) => playlist.id === playlistID),
    [playlists]
  );
};
export { selectIsError, selectIsLoading, selectPlaylists, usePlaylist };
