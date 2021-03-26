import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import CardFlip from "react-native-card-flip";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { handleDeleteQuestion } from "../actions";

const Question = ({ route, dispatch, navigation }) => {
	const [index, setIndex] = useState(0);
	const [correct, setCorrect] = useState(0);
	const [answered, setAnswer] = useState([]);

	const { deck } = route.params;

	const nextQuestion = () => {
		index < deck.questions.length - 1
			? setIndex(index + 1)
			: setIndex(index);
		console.log(index);
	};

	const previousQuestion = () => {
		index > 0 ? setIndex(index - 1) : setIndex(index);
		console.log(index);
	};

	const answer = () => {
		setAnswer(answered.concat(index));
		setCorrect(correct + 1);
	};

	const deleteQuestion = () => {
		dispatch(handleDeleteQuestion(item.id, deckId));
		goBack();
	};

	const goBack = () => {
		navigation.goBack();
	};

	return (
		<View style={styles.container}>
			<Text style={styles.header}>
				Question {index + 1} out of {deck.questions.length}
			</Text>
			<CardFlip
				style={styles.cardContainer}
				ref={(card) => (this.card = card)}
			>
				<TouchableOpacity
					activeOpacity={1}
					style={[styles.card, styles.card1]}
					onPress={() => this.card.flip()}
				>
					<Text style={styles.label}>
						{deck.questions[index].question}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					activeOpacity={1}
					style={[styles.card, styles.card2]}
					onPress={() => this.card.flip()}
				>
					<Text style={styles.label}>
						{deck.questions[index].answer}
					</Text>
				</TouchableOpacity>
			</CardFlip>
			<View style={styles.navigate}>
				<TouchableOpacity onPress={previousQuestion}>
					<Text style={styles.answer}>Previous</Text>
				</TouchableOpacity>
				<TouchableOpacity disabled={false} onPress={answer}>
					<Text style={styles.correct}>Correct</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={nextQuestion}>
					<Text style={styles.answer}>Next</Text>
				</TouchableOpacity>
			</View>
			{index + 1 === deck.questions.length ? (
				<TouchableOpacity>
					<Text style={styles.answer}>Complete Quiz</Text>
				</TouchableOpacity>
			) : null}
			<TouchableOpacity onPress={deleteQuestion}>
				<Text style={styles.delete}>Delete Question</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF",
	},
	header: {
		marginBottom: 40,
		fontSize: 16,
	},
	cardContainer: {
		width: 320,
		height: 320,
	},
	card: {
		width: 320,
		height: 320,
		backgroundColor: "#FE474C",
		borderRadius: 5,
		shadowColor: "rgba(0,0,0,0.5)",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.5,
	},
	card1: {
		backgroundColor: "#03cafc",
	},
	card2: {
		backgroundColor: "#03fc56",
	},
	label: {
		padding: 20,
		textAlign: "center",
		alignSelf: "center",
		fontSize: 24,
		color: "#ffffff",
	},
	navigate: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: 320,
	},
	answer: {
		marginTop: 20,
		marginBottom: 10,
	},
	correct: {
		fontSize: 20,
		color: "green",
		textAlign: "center",
		marginTop: 20,
		marginBottom: 10,
	},
	delete: {
		fontSize: 20,
		color: "red",
		textAlign: "center",
		marginTop: 20,
		marginBottom: 10,
	},
});

export default connect()(Question);
