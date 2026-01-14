import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { Delete } from 'lucide-react-native'

export default function MealCard({
    id,
    name,
    calories,
    onDelete
}) {
    return (
        <View style={styles.container}>
            <Text>{name}</Text>
            <Text>{calories} cal</Text>
            <TouchableHighlight onPress={() => onDelete(id)}>
                <Delete />
            </TouchableHighlight>
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
