import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ModuleListScreen from './src/components/screens/ModuleListScreen';
import ModuleViewScreen from './src/components/screens/ModuleViewScreen';
import ModuleAddScreen from './src/components/screens/ModuleAddScreen';
import ModuleModifyScreen from './src/components/screens/ModuleModifyScreen';

const Stack = createNativeStackNavigator();


export const App = () => {
  // Initialisations -------------------------------------------------
  // State -----------------------------------------------------------
  // Handlers --------------------------------------------------------
  // View ------------------------------------------------------------
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="ModuleListScreen"
        screenOptions={{
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: 'white',
        }}
      >
        <Stack.Screen 
          name='ModuleListScreen'
          component={ModuleListScreen}
          options={{ title: 'List modules' }}
        />
        <Stack.Screen 
          name='ModuleViewScreen'
          component={ModuleViewScreen}
          options={{ title: 'View module' }}
        />
        <Stack.Screen 
          name='ModuleAddScreen'
          component={ModuleAddScreen}
          options={{ title: 'Add module' }}
        />
        <Stack.Screen 
          name='ModuleModifyScreen'
          component={ModuleModifyScreen}
          options={{ title: 'Modify module' }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
