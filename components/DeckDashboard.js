import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { connect } from "react-redux";
import { Header } from "./Header";
import DeckList from "./DeckList";

const Tab = createBottomTabNavigator();

const AddDeck = () => {
	return <Text>Add</Text>;
};

const OpenDeck = () => {
	return <Text>Delete</Text>;
};

class DeckDashboard extends Component {
	render() {
		const { decks } = this.props.decks
		return (
			<View>
				<Header title={"Decks"} />
				<Text style={styles.title}>{Object.keys(decks).length} decks</Text>
				<DeckList />
				{/* <Tab.Navigator>
					<Tab.Screen name="NEW DECK" component={AddDeck} />
					<Tab.Screen name="OPEN DECK" component={Deck} />
				</Tab.Navigator> */}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		textAlign: "center",
		marginTop: 20,
		marginBottom: 0
	}
})

function mapStatesToProps(decks){
	return {
		decks,
	};
};

export default connect(mapStatesToProps)(DeckDashboard)