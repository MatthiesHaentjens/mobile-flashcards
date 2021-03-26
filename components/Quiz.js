import React from "react";
import { connect } from "react-redux";
import {
	Button,
    FlatList,
	StyleSheet,
	View,
	SafeAreaView,
	Text,
	TouchableOpacity,
} from "react-native";
import Question from './Question';

const Quiz = ({ route }) => {

	const { deck } = route.params;

	const renderItem = ({ item }) => {
		return <Question item={item} deckId={deck.id} />
	};

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={deck.questions}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				horizontal
				showsHorizontalScrollIndicator={false}
				style={{ flex: 1 }}
				pagingEnabled
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 40,
		marginBottom: 80,
        justifyContent: "center",
        alignItems: "center",
		width: "100%",
	},
});

export default connect()(Quiz);
