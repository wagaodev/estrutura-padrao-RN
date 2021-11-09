import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as NAVIGATORS from '../modules';

const { Navigator, Screen } = createNativeStackNavigator();

const routes = () => {
  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={NAVIGATORS.Home} />
    </Navigator>
  );
};

export default routes;
