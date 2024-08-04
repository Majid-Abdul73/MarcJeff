import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './navigation/MainStackNavigator';
import { WaterLevelProvider } from './context/WaterLevelContext';

const App = () => {
  return (
    <WaterLevelProvider>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </WaterLevelProvider>
  );
};

export default App;
