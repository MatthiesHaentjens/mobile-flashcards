import React from "react";
import { Dimensions, Image, StyleSheet, View, Text } from "react-native";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

export const Deck = ({ data }) => {
  return (
    <View style={styles.item}>
      <Image
        source={{ uri: data.image }}
        style={{ width: windowWidth * 0.8, height: windowHeight * 0.5 }}
      />
      <Text style={styles.title}>{data.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
