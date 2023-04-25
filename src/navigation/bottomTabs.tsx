import React from "react";
import { useSelector } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeArea } from "react-native-safe-area-context";

import { Colors, isIOS, isIPhoneX } from "../constants";
import { PlaylistBrowseScreen, PlaylistRoute } from "../screens/playlist";
import TabButton from "../generic/tabButton";
import { ListenBrowseScreen, ListenRoutes } from "../screens/listen";

const Tab = createBottomTabNavigator();

const computeOptions = (extraHeight = 0) => ({
  tabBarActiveTintColor: Colors.red700,
  tabBarInactiveTintColor: Colors.gray500,
  lazyLoad: true,
  tabBarShowLabel: false,
  allowFontScaling: false,
  style: {
    height: isIOS && isIPhoneX ? extraHeight + 48 : 64,
  },
});

const EmptyComponent = () => null;

const BottomTabs = () => {
  const inset = useSafeArea();

  return (
    <Tab.Navigator
      initialRouteName={ListenRoutes.BROWSE}
      screenOptions={computeOptions(inset.bottom)}
      backBehavior={"history"}
    >
      <Tab.Screen
        name={ListenRoutes.BROWSE}
        component={ListenBrowseScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabButton
              onPress={null}
              text={"Listen"}
              iconName={"music-video"}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name={PlaylistRoute.BROWSE}
        component={PlaylistBrowseScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabButton
              onPress={null}
              text={"Playlist"}
              iconName={"playlist-play"}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabs;
