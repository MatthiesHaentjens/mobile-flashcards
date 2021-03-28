import React from "react";
import {
	Text,
	StyleSheet,
	TextInput,
	SafeAreaView,
	TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { handleAddDeck } from "../actions";

const NewDeck = ({ dispatch, navigation }) => {
	
    const [text, setText] = React.useState('');
    const [image, setImage] = React.useState('https://i.pinimg.com/originals/52/bc/39/52bc3928fd63daa22ebfb555f9ae07dd.jpg');
	
    const clearState = () => {
		setText('');
	};

	const addDeck = () => {
		dispatch(handleAddDeck(text, image));
        clearState();
        goBack();
	};

    const goBack = () => {
        navigation.goBack();
    }

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Create a new Deck</Text>
            <Text style={styles.label}>Insert a nice deck title</Text>
			<TextInput
				style={styles.input}
				onChangeText={text => setText(text)}
				value={text}
                placeholder="For example: The wonders of Python"
                keyboardType="default"
			/>  
			<TouchableOpacity  onPress={addDeck}>
				<Text style={styles.submit}>Add Deck</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
        
	},
	title: {
		textAlign: "center",
		fontSize: 24,
        fontWeight: "bold",
        marginBottom: 40
	},
    label: {
        textAlign: "center",
		fontSize: 18,
        marginBottom: 10,
    }, 
	input: {
		height: 60,
		marginBottom: 40,
        padding: 5,
        borderWidth: 2,
        borderRadius: 5,
        width: "80%",
        alignSelf: "center"
	},
    submit: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "green",
    }
});

export default connect()(NewDeck);
