import { Modal, Text, TextInput, View, StyleSheet, Keyboard } from "react-native";
import Button from "../common/Button";
import { useState } from "react";

export default function AddMeal({
    visible,
    onClose,
    onCreate,
}) {
    const [name, setName] = useState('');
    const [calories, setCalories] = useState(0);

    const addPressHandler = () => {
        // Create new meal object
        const newMeal = { name, calories: Number(calories) };

        // Submit new meal to parent
        onCreate(newMeal);

        // Close modal
        onClose();

        // Close keyboard
        Keyboard.dismiss();
    }

    return (
        <Modal
            visible={visible}
            onRequestClose={onClose}
            transparent
        >
            <View style={styles.overlay}
            >
                <View style={styles.modal}>
                    <Text>Add Meal</Text>

                    <View>
                        <Text>Food Name</Text>
                        <TextInput placeholder="e.g. Pizza slice" value={name} onChangeText={setName} />
                    </View>

                    <View>
                        <Text>Calories</Text>
                        <TextInput placeholder="0" keyboardType="number-pad" value={calories} onChangeText={setCalories} />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10 }}>
                        <Button title="Back" type="secondary" onPress={onClose} />
                        <Button title="Add" onPress={addPressHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        width: 300,
        height: 200,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 16,
        justifyContent: 'space-between'
    },
})
