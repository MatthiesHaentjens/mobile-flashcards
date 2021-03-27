import React from "react";
import {
	Text,
	StyleSheet,
	TextInput,
	SafeAreaView,
	TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions";

const AddQuestion = ({ route, dispatch, navigation }) => {
	

    const { deckId } = route.params;
	console.log(deckId)
	const [question, setQuestion] = React.useState("");
	const [answer, setAnswer] = React.useState("");

	const clearState = () => {
		setQuestion("");
		setAnswer("");
	};

	const addQuestion = () => {
		dispatch(handleAddQuestion(question, answer, deckId));
		clearState();
		goBack();
	};

	const goBack = () => {
		navigation.goBack();
	};

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Create a new Question</Text>
			<Text style={styles.label}>Question</Text>
			<TextInput
				style={styles.input}
				onChangeText={(question) => setQuestion(question)}
				value={question}
				placeholder="For example: What Array methods are there?"
				keyboardType="default"
			/>
			<Text style={styles.label}>Answer</Text>
			<TextInput
				style={styles.input}
				onChangeText={(answer) => setAnswer(answer)}
				value={answer}
				placeholder="For example: .map, .filter. and many more"
				keyboardType="default"
			/>
			<TouchableOpacity onPress={addQuestion}>
				<Text style={styles.submit}>Add Question</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

// To do: Submitting the form correctly adds the question to the deck.

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
	},
	title: {
		textAlign: "center",
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 40,
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
		alignSelf: "center",
	},
	submit: {
		textAlign: "center",
		fontSize: 20,
		fontWeight: "bold",
		color: "green",
	},
});

export default connect()(AddQuestion);
