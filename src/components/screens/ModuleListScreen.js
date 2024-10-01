import { StyleSheet, Text, View } from 'react-native';
import Screen from '../layout/Screen';

import initialModules from '../../data/module';

const ModuleListScreen = () => {
  // Initialisations -------------------------------------------------
  const modules = initialModules;
  // State -----------------------------------------------------------
  // Handlers --------------------------------------------------------
  // View ------------------------------------------------------------
  return (
    <Screen>
      {
        modules.map((modules)=>{
          return(
            <View key={modules.ModuleCode}>
              <Text>{modules.ModuleCode} {modules.ModuleName}</Text>
            </View>
          )
        })
      }
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default ModuleListScreen;
