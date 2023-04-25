import React, { useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSafeArea } from "react-native-safe-area-context";

import { ListenDetailParams } from "./routes";
//import { Colors, Dimensions, Layout } from 'pigeon/constants';

const ListenDetailScreen = () => {
  const route = useRoute();
  const { songID } = route.params as ListenDetailParams;
  //const song = useSong(songID);
  const navigation = useNavigation();
  // const user = useSelector(selectUser);
  const insets = useSafeArea();

  // useEffect(() => {
  //   if (song) {
  //     navigation.setOptions({
  //       title: `${segment.startPoint} - ${segment.endPoint}`,
  //     });
  //   }
  // }, [segment]);

  return (
    <ScrollView style={{ marginBottom: insets.bottom }}>
      {/* <TrafficChart
        title={"Traffic volume per day"}
        stats={segment.stats.frequencyStats || {}}
      /> */}
      {/* {user.role === UserRole.ADMIN ? (
        <TrafficChart
          title={"Nb of cars without insurance"}
          stats={segment.stats.withoutInsuranceStats || {}}
          style={styles.chart}
          color={Colors.green600}
        />
      ) : null} */}
      This is Listen Detail Screen
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  // chart: {
  //   marginTop: Dimensions.primarySpacing,
  // },
});
export default ListenDetailScreen;
