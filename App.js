import { StatusBar } from "expo-status-bar";
import React from "react";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { SafeAreaView, StyleSheet} from "react-native";
import DeckDashboard from "./components/DeckDashboard";
import decks from "./reducers";
import applyMiddleware from "./middleware";

const store = createStore(combineReducers({decks}), applyMiddleware);


export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={styles.backgroundColor} barStyle="light-content" />
        <DeckDashboard />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
  },
});
