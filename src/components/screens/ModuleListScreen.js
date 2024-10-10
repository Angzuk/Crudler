import { useState } from 'react';
import { StyleSheet } from 'react-native';
import Screen from '../layout/Screen';
import ModuleList from '../entity/modules/ModuleList';

import initialModules from '../../data/modules';

const ModuleListScreen = ({navigation}) => {
  // Initialisations -------------------------------------------------
  // State -----------------------------------------------------------
  const [modules, setModules] = useState(initialModules);

  // Handlers --------------------------------------------------------
  const handleSelect = () => {};
  const handleDelete = (module) => setModules( modules.filter ( (item) => item.ModuleID !== module.ModuleID) );

  // View ------------------------------------------------------------
  return (
    <Screen>
      < ModuleList modules={modules} onSelect={handleSelect}/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ModuleListScreen;
