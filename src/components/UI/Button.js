import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const Button = ({label, onClick}) => {
    // Initialisations ---------------------
    // State -------------------------------
    // Handlers ----------------------------
    // View --------------------------------
    return (
        <Pressable onPress={onClick}>
            <Text>{label}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({});

export default Button;