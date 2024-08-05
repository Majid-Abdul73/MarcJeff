import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './navigation/MainStackNavigator';
import { WaterLevelProvider } from './context/WaterLevelContext';
import { SafeAreaView, StatusBar } from 'react-native';

const App = () => {
  return (
    <WaterLevelProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
      </SafeAreaView>
     
    </WaterLevelProvider>
  );
};

export default App;
