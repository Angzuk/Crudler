import { StyleSheet, Text, TextInput, View } from 'react-native';
import Screen from '../layout/Screen';



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
    </Screen>
  );
}

const styles = StyleSheet.create({

});

export default ModuleAddScreen;
