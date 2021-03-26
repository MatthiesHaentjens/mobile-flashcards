import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { connect } from "react-redux";
import DeckList from "./DeckList";

class DeckDashboard extends Component {
	render() {
		const { decks } = this.props.decks;
		return (
			<View style={styles.container}>
				<Text style={styles.title}>
					{Object.keys(decks).length} decks
				</Text>
				<DeckList />
				<View style={styles.navigation}>
					<Button
						title="New Deck"
						onPress={() =>
							this.props.navigation.navigate("New Deck")
						}
					/>
					<Button
						title="Open Deck"
						onPress={() =>
							this.props.navigation.navigate("Open Deck")
						}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
	},
	title: {
		fontSize: 20,
		textAlign: "center",
		marginTop: 40,
	},
	navigation: {
		flexDirection: "row",
		marginBottom: 40,
		color: "green"
	},
});

function mapStatesToProps(decks) {
	return {
		decks,
	};
}

export default connect(mapStatesToProps)(DeckDashboard);
