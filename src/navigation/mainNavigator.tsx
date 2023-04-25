import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BottomTabs from "./bottomTabs";
import StackRoutes from "./stackRoutes";
import screensToStackScreens from "./screensToStackScreen";
import { ListenStack } from "../screens/listen";
import { PlaylistStack } from "../screens/playlist";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerBackTitle: null }}>
      <>
        <Stack.Screen
          name={StackRoutes.BOTTOM_TABS}
          component={BottomTabs}
          options={{ title: "Sound Vibe" }}
        />
        {screensToStackScreens(ListenStack)}
        {screensToStackScreens(PlaylistStack)}
      </>
    </Stack.Navigator>
  );
};

export default MainNavigator;
