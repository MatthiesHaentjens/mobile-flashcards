import React, { Component } from "react";
import { connect } from "react-redux";
import { View, FlatList, StyleSheet } from "react-native";
import { handleInitialData } from "../actions";
import DeckListItem from "./DeckListItem";

class DeckList extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(handleInitialData());
	}

	render() {
		const { decks } = this.props.decks;
		const decksArray = Object.entries(decks);
		const navigation = this.props.navigation;

		const renderItem = ({ item }, index) => {
			return (
				<DeckListItem item={item} key={index} navigation={navigation} />
			);
		};

		return (
			<View style={styles.container}>
				<FlatList
					data={decksArray}
					renderItem={renderItem}
					keyExtractor={(item, index) => index.toString()}
					horizontal
					showsHorizontalScrollIndicator={false}
					style={{ flex: 1 }}
					pagingEnabled
					alwaysBounceHorizontal={true}
				/>
			</View>
		);
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 40,
		marginBottom: 40,
		width: "100%",
	},
});

function mapStatesToProps(decks) {
	return {
		decks,
	};
}

export default connect(mapStatesToProps)(DeckList);
