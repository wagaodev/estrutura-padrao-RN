import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Icon } from './styles';

import { theme } from '../global';
import { Home, Onboarding } from '../modules';

const { Navigator, Screen } = createNativeStackNavigator();

const routes = () => {
  const HeaderIcon = <Icon />;
  const options = {
    headerLeft: () => HeaderIcon,
    headerTintColor: theme.colors.brand.header,
    headerTitleStyle: {
      color: theme.colors.brand.header,
    },
    headerBackTitleStyle: {
      color: 'red',
    },
  };

  return (
    <Navigator initialRouteName="Onboarding" screenOptions={options}>
      <Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

export default routes;
