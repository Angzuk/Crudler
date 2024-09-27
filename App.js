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
        <Stack.Screen 
          name='ModuleListScreen'
          component={ModuleListScreen}
          options={{ title: 'List modules' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
