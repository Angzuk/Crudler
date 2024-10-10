import { StyleSheet, Text } from 'react-native';
import Screen from '../layout/Screen';

const ModuleViewScreen = ({ navigation, route }) => {
  // Initialisations -------------------------------------------------
  const { module } = route.params;

  // State -----------------------------------------------------------
  // Handlers --------------------------------------------------------
  // View ------------------------------------------------------------
  return (
    <Screen>
      <Text>View {module.ModuleCode} {module.ModuleName}</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default ModuleViewScreen;
