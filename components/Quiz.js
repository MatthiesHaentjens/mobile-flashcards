import React, { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { Button, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import CardFlip from "react-native-card-flip";
import { FontAwesome } from "@expo/vector-icons";
import { handleDeleteQuestion } from "../actions";

const Quiz = ({ route, dispatch, navigation }) => {
	const [index, setIndex] = useState(0);
	const [correct, setCorrect] = useState(0);
	const [answered, setAnswer] = useState([]);

	const { deck } = route.params;

	const nextQuestion = () => {
		index < deck.questions.length - 1
			? setIndex(index + 1)
			: setIndex(index);
	};

	const previousQuestion = () => {
		index > 0 ? setIndex(index - 1) : setIndex(index);
	};

	const answerCorrect = () => {
		setAnswer(answered.concat(index));
		setCorrect(correct + 1);
	};

	const answerIncorrect = () => {
		setAnswer(answered.concat(index));
	};

	const completeQuiz = () => {
		navigation.navigate("Complete Quiz", {
			questions: deck.questions.length,
			correct: correct,
		});
	};

	const deleteQuestion = () => {
		dispatch(handleDeleteQuestion(deck.questions[index].id, deck.id));
		goBack();
	};

	const goBack = () => {
		navigation.goBack();
	};

	useEffect(() => {
		const unsubscribe = navigation.addListener("focus", () => {
			setIndex(0);
			setCorrect(0);
			setAnswer([]);
		});
		return () => {
			unsubscribe;
		};
	}, [navigation]);

	if (deck.questions.length === 0) {
		return (
			<View style={styles.container}>
				<Text fontSize={20}>Sorry nothing here...</Text>
				<Text fontSize={14}>
					Go back and create a question to start
				</Text>
			</View>
		);
	} else {
		return (
			<View style={styles.container}>
				<Text style={styles.header}>
					Question {index + 1} out of {deck.questions.length}
				</Text>
				<Text style={styles.tab}>Tab to show the answer</Text>
				<CardFlip
					style={styles.cardContainer}
					ref={(ref) => (this.card = ref)}
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
						<FontAwesome
							name="chevron-circle-left"
							size={30}
							color="blue"
						/>
					</TouchableOpacity>
					<TouchableOpacity
						disabled={answered.includes(index)}
						onPress={answerCorrect}
					>
						<FontAwesome
							name="thumbs-up"
							size={50}
							style={
								!answered.includes(index)
									? styles.thumbsUp
									: styles.disabled
							}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						disabled={answered.includes(index)}
						onPress={answerIncorrect}
					>
						<FontAwesome
							name="thumbs-down"
							size={50}
							style={
								!answered.includes(index)
									? styles.thumbsDown
									: styles.disabled
							}
						/>
					</TouchableOpacity>
					<TouchableOpacity onPress={nextQuestion}>
						<FontAwesome
							name="chevron-circle-right"
							size={30}
							color="blue"
						/>
					</TouchableOpacity>
				</View>
				{index + 1 === deck.questions.length ? (
					<Button
						color="blue"
						title="Complete Quiz"
						onPress={completeQuiz}
					/>
				) : null}
				<TouchableOpacity onPress={deleteQuestion}>
					<Text style={styles.delete}>Delete Question</Text>
				</TouchableOpacity>
			</View>
		);
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF",
	},
	header: {
		marginBottom: 20,
		fontSize: 16,
	},
	tab: {
		fontSize: 18,
		fontStyle: "italic",
		marginBottom: 20,
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
		marginBottom: 20,
	},
	card1: {
		backgroundColor: "#03cafc",
		justifyContent: "center",
		alignItems: "center",
	},
	card2: {
		backgroundColor: "#03fc56",
		justifyContent: "center",
		alignItems: "center",
	},
	label: {
		padding: 20,
		textAlign: "center",
		alignSelf: "center",
		justifyContent: "center",
		fontSize: 24,
		color: "#ffffff",
	},
	navigate: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: 320,
		marginBottom: 20,
		marginLeft: 10,
		marginRight: 10,
	},
	answer: {
		marginTop: 20,
		marginBottom: 10,
	},
	thumbsUp: {
		textAlign: "center",
		marginTop: 20,
		color: "green",
	},
	thumbsDown: {
		textAlign: "center",
		marginTop: 20,
		color: "red",
	},
	disabled: {
		color: "grey",
		textAlign: "center",
		marginTop: 20,
	},
	button: {
		borderColor: "blue",
		borderWidth: 2,
		backgroundColor: "blue",
		borderRadius: 5,
		color: "blue",
	},
	delete: {
		fontSize: 16,
		color: "red",
		textAlign: "center",
		marginTop: 20,
		marginBottom: 10,
	},
});

export default connect()(Quiz);
