import { StyleSheet } from 'react-native';
import Screen from '../layout/Screen';
import ModuleList from '../entity/modules/ModuleList';

import initialModules from '../../data/modules';

const ModuleListScreen = () => {
  // Initialisations -------------------------------------------------
  const modules = initialModules;

  // State -----------------------------------------------------------
  // Handlers --------------------------------------------------------
  const handleDelete = (module) => alert(`Item ${module.ModuleCode} selected`);

  // View ------------------------------------------------------------
  return (
    <Screen>
      < ModuleList modules={modules} onSelect={handleDelete}/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ModuleListScreen;
