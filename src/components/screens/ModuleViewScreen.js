import { StyleSheet, Text, View } from 'react-native';
import FullWidthImage from 'react-native-fullwidth-image';
import Screen from '../layout/Screen';


const ModuleViewScreen = ({ navigation, route }) => {
  // Initialisations -------------------------------------------------
  const { module } = route.params;

  // State -----------------------------------------------------------
  // Handlers --------------------------------------------------------
  // View ------------------------------------------------------------
  return (
    <Screen>

      < FullWidthImage source={{ uri: module.ModuleImage }} style={styles.image} />

      <View style={styles.infoTray}>
        <Text style={styles.boldText}>
          {module.ModuleCode} {module.ModuleName}
        </Text>
        <Text style={styles.text}>Level {module.ModuleLevel}</Text>
        <Text style={styles.text}>{module.ModuleLeaderName} <Text style={styles.dimText}> (Module Leader)</Text></Text>
      </View>

    </Screen>
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 3,
  },
  infoTray: {
    gap: 5,
  },
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
