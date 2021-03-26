import "react-native-gesture-handler";
import React from "react";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { SafeAreaView, StyleSheet } from "react-native";
import DeckDashboard from "./components/DeckDashboard";
import decks from "./reducers";
import applyMiddleware from "./middleware";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NewDeck from "./components/NewDeck";
import Deck from "./components/Deck";
import Question from "./components/Question";
import Quiz from "./components/Quiz";
import AddQuestion from "./components/AddQuestion";

const store = createStore(combineReducers({ decks }), applyMiddleware);

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Provider store={store}>
				<SafeAreaView style={styles.container}>
					<Stack.Navigator initialRouteName="Home">
						<Stack.Screen name="Home" component={DeckDashboard} />
						<Stack.Screen name="New Deck" component={NewDeck} />
						<Stack.Screen name="Open Deck" component={Deck} />
						<Stack.Screen name="Quiz" component={Question} />
						<Stack.Screen name="Add Question" component={AddQuestion} />
					</Stack.Navigator>
				</SafeAreaView>
			</Provider>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		width: "100%"
	},
});
