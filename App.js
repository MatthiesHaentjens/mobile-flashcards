import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { SafeAreaView, StyleSheet } from "react-native";
import DeckDashboard from "./components/DeckDashboard";
import decks from "./reducers";
import applyMiddleware from "./middleware";
import { NavigationContainer } from "@react-navigation/native";

const store = createStore(combineReducers({ decks }), applyMiddleware);

export default function App() {
	return (
		<NavigationContainer>
			<Provider store={store}>
				<SafeAreaView style={styles.container}>
					<StatusBar
						backgroundColor={styles.backgroundColor}
						barStyle="light-content"
					/>
					<DeckDashboard />
				</SafeAreaView>
			</Provider>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
	},
});
