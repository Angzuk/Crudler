import { StyleSheet } from 'react-native';
import Screen from '../layout/Screen';
import ModuleForm from '../entity/modules/ModuleForm';



const ModuleAddScreen = ({navigation, route}) => {
  // Initialisations -------------------------------------------------
  const { onAdd } = route.params;

  // State -----------------------------------------------------------
  // Handlers --------------------------------------------------------
  const handleAdd = () => onAdd(module);
  const handleCancel = navigation.goBack;


  // View ------------------------------------------------------------
  return (
    <Screen>
      <ModuleForm/>
    </Screen>
  );
}

const styles = StyleSheet.create({

});

export default ModuleAddScreen;
