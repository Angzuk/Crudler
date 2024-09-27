import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ModuleListScreen from './src/components/screens/ModuleListScreen';
import { Component } from 'react';

export const App = () => {
  // Initialisations -------------------------------------------------
  // State -----------------------------------------------------------
  // Handlers --------------------------------------------------------
  // View ------------------------------------------------------------
  return (
    <NavigationContainer>
      <Stack.Navigator initalRouteName="ModuleListScreen">

      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
