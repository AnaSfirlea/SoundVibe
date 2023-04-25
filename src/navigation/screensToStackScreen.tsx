import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

interface StackScreen {
  name: string;
  component: any;
  options?: object;
}

const screensToStackScreens = (screens: StackScreen[]) =>
  screens.map(screen => (
    <Stack.Screen
      name={screen.name}
      component={screen.component}
      options={screen.options}
      key={screen.name}
    />
  ));

export default screensToStackScreens;
export { StackScreen };
