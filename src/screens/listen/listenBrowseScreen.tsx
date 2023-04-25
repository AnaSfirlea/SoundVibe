import React, { useState } from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

//import { useFetchSegments } from "pigeon/components/segments/hooks";
//import { selectSegments } from "pigeon/components/segments/state";
//import { useNavigationFocusListener } from "pigeon/hooks";
// import { RoadSegmentCard } from "pigeon/components/segments/browse";
import { NavActions as SegmentNavActions } from "./routes";
import { Text, TextInput, View, StyleSheet } from "react-native";
const keyExtractor = (item) => `${item.id}`;

const ListenBrowseScreen = () => {
  // const fetchSegments = useFetchSegments();
  // const segments = useSelector(selectSegments);

  ///const navigation = useNavigation();
  // const onCardPress = React.useCallback(
  //   (roadSegment: RoadSegmentData) => {
  //     navigation.navigate(...SegmentNavActions.goToDetails({ segmentID: roadSegment.id }));
  //   },
  //   [navigation],
  // );

  // const renderItem = React.useCallback(
  //   ({ item }) => <RoadSegmentCard roadSegment={item} onPress={onCardPress} />,
  //   [onCardPress],
  // );

  // useNavigationFocusListener(fetchSegments);
  // return <FlatList data={segments} renderItem={renderItem} keyExtractor={keyExtractor} />;
  const [name, setName] = useState("Ana");

  return (
    <View>
      <TextInput
        placeholder="Enter your name..."
        onChangeText={(text) => setName(text)}
      />
      <Text>Hello {name}!</Text>
    </View>
  );
};

export default ListenBrowseScreen;
