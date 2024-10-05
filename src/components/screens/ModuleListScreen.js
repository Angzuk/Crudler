import { StyleSheet } from 'react-native';
import Screen from '../layout/Screen';
import ModuleItem from '../entity/modules/ModuleItem';

import initialModules from '../../data/modules';

const ModuleListScreen = () => {
  // Initialisations -------------------------------------------------
  const modules = initialModules;

  // State -----------------------------------------------------------
  // Handlers --------------------------------------------------------
  const handleSelect = () => alert("Item selected");

  // View ------------------------------------------------------------
  return (
    <Screen>
      < ModuleList modules={modules} onSelect={}/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ModuleListScreen;
