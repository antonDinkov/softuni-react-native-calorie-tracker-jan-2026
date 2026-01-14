import { View, Text, StyleSheet } from "react-native";

export default function MealCard({
    name,
    calories,
}) {
    return (
        <View style={styles.container}>
            <Text>{name}</Text>
            <Text>{calories} cal</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#efefef',
        borderRadius: 5,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
