import React, { Component } from "react";
import { connect } from "react-redux";
import { View, FlatList, StyleSheet, StatusBar } from "react-native";
import { handleInitialData } from "../actions";
import { Deck } from "./Deck";

class DeckCarousel extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    const { decks } = this.props.decks;
    const decksArray = Object.entries(decks)

    const renderItem = ({ item }) => {
      return <Deck data={item[1]} />;
    };

    return (
      <View style={styles.container}>
        <FlatList
          data={decksArray}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ flex: 1 }}
          pagingEnabled
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

function mapStatesToProps(decks) {
  return {
    decks,
  };
}

export default connect(mapStatesToProps)(DeckCarousel);
