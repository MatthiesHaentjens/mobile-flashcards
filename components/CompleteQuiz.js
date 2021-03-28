import React from "react";
import { connect } from "react-redux";
import { Button, StyleSheet, View, Text } from "react-native";

const CompleteQuiz = ({ route, navigation }) => {
	const { questions, correct } = route.params;
	const percentCorrect = Math.round((correct / questions) * 100);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Awesome your done!</Text>
			<Text style={styles.title}>you scored:</Text>
			<Text style={styles.result}>{percentCorrect}%</Text>
			<Button
				title="Restart Quiz"
				onPress={() => navigation.navigate("Quiz")}
			/>
            <Button
				title="Back to Dashboard"
				onPress={() => navigation.navigate("Home")}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 30,
        marginBottom: 20,
	},
	result: {
		fontSize: 60,
	},
});

export default connect()(CompleteQuiz);
