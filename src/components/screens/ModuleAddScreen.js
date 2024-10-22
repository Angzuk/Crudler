import { StyleSheet, Text, TextInput, View } from 'react-native';
import Screen from '../layout/Screen';
import Icons from '../UI/Icons';
import { Button, ButtonTray } from '../UI/Button';

const defaultModule = {
  ModuleID: Math.floor(100000 + Math.random() * 900000),
  ModuleCode: 'CI6330',
  ModuleName: 'Mobile Application Development',
  ModuleLevel: 6,
  ModuleLeaderID: 1,
  ModuleLeaderName: 'Graeme JONES',
  ModuleImage: 'https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg',
}

const ModuleAddScreen = ({navigation, route}) => {
  // Initialisations -------------------------------------------------
  const { onAdd } = route.params;

  // State -----------------------------------------------------------
  // Handlers --------------------------------------------------------
  const handleAdd = () => onAdd(defaultModule);
  const handleCancel = navigation.goBack;

  // View ------------------------------------------------------------
  return (
    <Screen>
       <View style={styles.item} >
        <Text style={styles.itemLabel} > Module code </Text>
        <TextInput style={styles.itemTextInput} />
       </View>
      <ButtonTray>
        <Button label="Add" icon={<Icons.Add/>} onClick={handleAdd} />
        <Button label="Cancel" onClick={handleCancel} />
      </ButtonTray>
    </Screen>
  );
}

const styles = StyleSheet.create({
  itemLabel: {
    color: 'grey',
    fontSize: 16,
    marginBottom: 5,
  },
  itemTextInput: {
    height: 50,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: 'white',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
});

export default ModuleAddScreen;
