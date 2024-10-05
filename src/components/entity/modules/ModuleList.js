import { ScrollView, StyleSheet } from 'react-native';
import ModuleItem from '../entity/modules/ModuleItem';

const ModuleList = () => {
// Initialisations ---------------------
// State -------------------------------
// Handlers ----------------------------
// View --------------------------------
return (
    <ScrollView style={styles.container}>
        {
          modules.map((module)=>{
            return(
              < ModuleItem key={module.ModuleCode} module={module} onSelect={handleSelect}/>
            )
          })
        }
    </ScrollView>
);
};

const styles = StyleSheet.create({});

export default ModuleList;