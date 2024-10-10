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
      <Text style={styles.boldText}>
        {module.ModuleCode} {module.ModuleName}
      </Text>
      <Text style={styles.text}>Level {module.ModuleLevel}</Text>
      <Text style={styles.text}>{module.ModuleLeaderName} <Text style={styles.dimText}> (Module Leader)</Text></Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
  boldText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dimText: {
    color: 'grey',
  },
});

export default ModuleViewScreen;
