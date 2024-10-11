import { Pressable, StyleSheet, Text, View } from "react-native";

export const Button = ({label, onClick}) => {
    // Initialisations ---------------------
    // State -------------------------------
    // Handlers ----------------------------
    // View --------------------------------
    return (
        <Pressable onPress={onClick} style={styles.button}>
            <Text style={styles.label}>{label}</Text>
        </Pressable>
    );
};

export const ButtonTray = ({children}) => {
    // Initialisations ---------------------
    // State -------------------------------
    // Handlers ----------------------------
    // View --------------------------------
    return (
        <View style={styles.buttonTray}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    buttonTray: {
        flexDirection: 'row',
        gap: 15,
    },
    button: {
        minHeight: 50,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: 'grey',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        flex: 1,
    },
    label: {
        fontSize: 16,
    },
});
