import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';

import AuthenticationScreen from '../screens/AuthenticationScreen';
import DashboardScreen from '../screens/DashboardScreen';
import PumpControlScreen from '../screens/PumpControlScreen';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    
      <Stack.Navigator initialRouteName="Authentication">
        <Stack.Screen name="Authentication" component={AuthenticationScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="PumpControl" component={PumpControlScreen} />
      </Stack.Navigator>
    
  );
}

export default MainStackNavigator;
