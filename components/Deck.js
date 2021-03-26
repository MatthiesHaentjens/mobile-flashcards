import React from "react";
import { connect } from "react-redux";
import {
	Dimensions,
	Button,
	Image,
	StyleSheet,
	View,
	SafeAreaView,
	Text,
} from "react-native";
import { handleDeleteDeck } from "../actions";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const Deck = ({ decks, dispatch, navigation }) => {
	const deck = decks.decks.xxx;

	const deleteDeck = () => {
		dispatch(handleDeleteDeck(deck.id));
		goBack();
	};

	const goBack = () => {
		navigation.goBack();
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.item}>
				<Image source={{ uri: deck.image }} style={styles.image} />
				<Text style={styles.title}>{deck.title}</Text>
				<Text style={styles.questions}>
					{deck.questions.length} Questions
				</Text>
			</View>
			<View style={styles.navigation}>
				<Button
					title="Start Quiz"
					onPress={() =>
						navigation.navigate("Quiz", {
							deck: deck,
						})
					}
				/>
				<Button
					title="Add Question"
					onPress={() =>
						navigation.navigate("Add Question", {
							deckId: deck.id,
						})
					}
				/>
				<Button title="Delete Deck" onPress={deleteDeck} />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 40,
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
	},
	item: {
		backgroundColor:"#f9c2ff",
		padding: 20,
		marginBottom: 80,
		marginHorizontal: 20,
		borderColor: "#f9c2ff",
    borderWidth: 2,
    borderRadius: 10
	},
	image: {
		marginBottom: 20,
		width: windowWidth * 0.8,
		height: windowHeight * 0.4,
		borderRadius: 5
	},
	title: {
		fontSize: 32,
		textAlign: "center",
		marginBottom: 10,
	},
	questions: {
		fontSize: 20,
		textAlign: "center",
	},
	navigation: {
		flexDirection: "row",
		marginBottom: 40,
		color: "green",
	},
});

function mapStatesToProps(decks) {
	return {
		decks,
	};
}

export default connect(mapStatesToProps)(Deck);
