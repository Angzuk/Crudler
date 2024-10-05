import { ScrollView, StyleSheet } from 'react-native';

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