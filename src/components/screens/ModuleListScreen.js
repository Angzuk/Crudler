import { useState } from 'react';
import { LogBox, StyleSheet } from 'react-native';
import Screen from '../layout/Screen';
import API from '../API/API';
import ModuleList from '../entity/modules/ModuleList';
import Icons from '../UI/Icons';
import { Button, ButtonTray } from '../UI/Button';

const ModuleListScreen = ({navigation}) => {
  // Initialisations -------------------------------------------------
  LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);
  const modulesEndpoint = 'https://softwarehub.uk/unibase/api/modules';

  // State -----------------------------------------------------------
  const [modules, setModules] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);

  const loadModules = async (endpoint) => {
    const response = await API.get(endpoint);
    setIsLoading(false);
    if(response.isSuccess) setModules(response.result);
  };
  
  // Handlers --------------------------------------------------------
  const handleDelete = (module) =>
    setModules( modules.filter ( (item) => item.ModuleID !== module.ModuleID) );

  const handleAdd = (module) => setModules([...modules, module]);
  
  const handleModify = (updatedModule) => setModules(
    modules.map((module) => (module.ModuleID === updatedModule.ModuleID) ? updatedModule : module)
  );

  const onDelete = (module) => {
    handleDelete(module);
    navigation.goBack();
  };

  const onAdd = (module) => {
    handleAdd(module);
    navigation.goBack();
  };

  const onModify = (module) => {
    handleModify(module);
    navigation.navigate("ModuleListScreen");
  };

  const gotoViewScreen = (module) => navigation.navigate('ModuleViewScreen', { module, onDelete, onModify });
  const gotoAddScreen = () => navigation.navigate('ModuleAddScreen', { onAdd });
  // View ------------------------------------------------------------
  return (
    <Screen>
      <ButtonTray>
        <Button label="Add" icon={<Icons.Add/>} onClick={gotoAddScreen} />
      </ButtonTray>
      < ModuleList modules={modules} onSelect={gotoViewScreen}/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ModuleListScreen;
