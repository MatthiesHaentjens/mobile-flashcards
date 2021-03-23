import React, { Component } from "react";
import { connect } from "react-redux";
import { View, FlatList, StyleSheet, StatusBar, Dimensions, Image, Text  } from "react-native";
import { handleInitialData } from "../actions";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

class DeckList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    const { decks } = this.props.decks;
    const decksArray = Object.entries(decks)

    const renderItem = ({ item }) => {
      const { image, title, questions } = item[1]
      console.log(item)
      return (
        <View style={styles.item}>
          <Image
            source={{ uri: image }}
            style={{ width: windowWidth * 0.8, height: windowHeight * 0.4 }}
          />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.questions}>{questions.length} Questions</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={decksArray}
          renderItem={renderItem}
          keyExtractor={(item ) => item.id}
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
    marginTop: 40,
    marginBottom: 80 
  },
  item: {
    backgroundColor: "#99ffff",
    padding: 20,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10
  },
  questions: {
    fontSize: 20,
    textAlign: "center"
  }
});

function mapStatesToProps(decks) {
  return {
    decks,
  };
}

export default connect(mapStatesToProps)(DeckList);
