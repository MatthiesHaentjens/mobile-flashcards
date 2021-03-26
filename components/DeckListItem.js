import React from "react";
import { connect } from "react-redux";
import {
	View,
	StyleSheet,
	Dimensions,
	Image,
	Text,
	Button,
} from "react-native";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const DeckListItem = ({ item, navigation }) => {
	const { image, title, questions } = item[1];

	return (
		<View style={styles.item}>
			<Image source={{ uri: image }} style={styles.image} />
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.questions}>{questions.length} Questions</Text>
			<Button
				style={styles.button}
				title="Open Deck"
				onPress={() => navigation.navigate("Open Deck", {
                    deck: item[1]
                })}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 40,
		width: "100%",
	},
	item: {
		backgroundColor: "#99ffff",
		padding: 20,
		marginHorizontal: 20,
		borderColor: "#99ffff",
		borderWidth: 2,
		borderRadius: 10,
	},
	image: {
		marginBottom: 20,
		width: windowWidth * 0.8,
		height: windowHeight * 0.4,
		borderRadius: 5,
	},
	title: {
		fontSize: 32,
		textAlign: "center",
		marginBottom: 10,
	},
	questions: {
		fontSize: 20,
		textAlign: "center",
		marginBottom: 20,
	},
	button: {
		fontSize: 20,
		borderColor: "green",
		borderRadius: 5,
		backgroundColor: "green",
		marginBottom: 20,
	},
});

export default connect()(DeckListItem);
