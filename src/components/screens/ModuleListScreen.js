import { StyleSheet } from 'react-native';
import Screen from '../layout/Screen';
import ModuleList from '../entity/modules/ModuleList';

import initialModules from '../../data/modules';

const ModuleListScreen = () => {
  // Initialisations -------------------------------------------------
  let modules = initialModules;

  // State -----------------------------------------------------------
  // Handlers --------------------------------------------------------
  const handleDelete = (module) => {
    modules = modules.filter ( () => {} );

    console.log(`After deleting ${module.ModuleCode}, the array modules has length ${modules.length}`);
  };

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
