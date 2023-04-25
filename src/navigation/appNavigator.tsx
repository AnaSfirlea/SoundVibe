import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import StackRoutes from "./stackRoutes";
import MainNavigator from "./mainNavigator";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={StackRoutes.APP} component={MainNavigator} />
    </Stack.Navigator>
  );
};
export default AppNavigator;
