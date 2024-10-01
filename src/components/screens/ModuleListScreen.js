import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Screen from '../layout/Screen';

import initialModules from '../../data/module';

const ModuleListScreen = () => {
  // Initialisations -------------------------------------------------
  const modules = initialModules;
  // State -----------------------------------------------------------
  // Handlers --------------------------------------------------------
  const handleSelect = () => alert("Item selected");
  // View ------------------------------------------------------------
  return (
    <Screen>
      <ScrollView style={styles.container}>
        {
          modules.map((modules)=>{
            return(
              <Pressable key={modules.ModuleCode} onPress={handleSelect}>
                <View style={styles.item}>
                  <Text style={styles.text}>
                    {modules.ModuleCode} {modules.ModuleName}
                  </Text>
                </View>
              </Pressable>
            )
          })
        }
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  item: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: 'lightgray',
  },
  text: {
    fontSize: 16,
  },
});

export default ModuleListScreen;
