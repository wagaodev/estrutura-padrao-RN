import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { Icon } from './styles';

import { theme } from '../global';
import { Home, Onboarding } from '../modules';
import { RootStackParamList } from './types';

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const HeaderIcon = () => <Icon />;

const options: NativeStackNavigationOptions = {
  headerLeft: HeaderIcon,
  headerShown: true,
  headerStyle: {
    backgroundColor: theme.colors.new.header,
  },
  headerTintColor: theme.colors.new.header,
  headerTitleStyle: {
    fontSize: 20,
    fontFamily: 'Inter',
    fontWeight: '700',
  },
  contentStyle: { backgroundColor: theme.colors.base.gray200 },
  headerBackTitleVisible: false,
  headerTitleAlign: 'center',
};

const routes = () => {
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
