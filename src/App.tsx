import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';

import theme from './global';
import Routes from './routes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Routes />
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
