import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Colors, Dimensions } from "../../../constants";
import PlaylistData from "../../../application/models/playlist";
// import { useEstimatedToll } from "pigeon/components/playlist/hooks";
// import { NavActions as PlaylistNavActions } from "pigeon/screens/playlist/routes";

interface Props {
  playlist: PlaylistData;
}

const PlaylistCard = (props: Props) => {
  const { playlist } = props;
  const navigation = useNavigation();
  //const toll = useEstimatedToll(playlist);

  //   const onPress = React.useCallback(() => {
  //     navigation
  //       .navigate
  //       // ...PlaylistNavActions.goToDetails({ playlistID: playlist.id })
  //       ();
  //   }, [navigation, playlist.id]);

  return (
    <TouchableOpacity style={styles.root}>
      {/* onPress={onPress}> */}
      <View style={styles.container}>
        <Text style={styles.title}>
          Travel: {playlist.startPoint} - {playlist.endPoint}
        </Text>
        <Text style={styles.currentSong}>
          Current song: {playlist.currentSong.startPoint} -{" "}
          {playlist.currentSong.endPoint}
        </Text>
        {/* <Text>Estimated toll: {toll} RON</Text> */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    borderRadius: 4,
    marginHorizontal: Dimensions.primarySpacing,
    backgroundColor: Colors.white,
    marginTop: Dimensions.primarySpacing,

    shadowColor: Colors.black,
    shadowOpacity: 0.25,
    shadowRadius: 6 * 0.75,
    //@ts-ignore
    shadowOffset: { height: 6 * 0.45 },
    elevation: 6,
  },
  container: {
    padding: Dimensions.ternarySpacing,
  },

  title: {
    fontSize: Dimensions.primaryFontSize,
    color: Colors.black,
    marginBottom: Dimensions.elementSpacing,
  },
  currentSong: {
    color: Colors.gray600,
    marginBottom: Dimensions.secondarySpacing,
  },
});
export default PlaylistCard;
