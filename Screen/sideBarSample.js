import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

const SideBarSample = () => {
  const sample = [
    { description: "今天天氣很差, 但又很好。" },
    { description: "這apps我弄了幾個月都未弄好" },
    { description: "救命，好攰" },
    { description: "拿拿聲整埋個過場" },
    { description: "整埋api攞data" },
    { description: "整埋server backend RESTful APi" },
    { description: "upload埋去google store or apps store就叫禮成, 頂你!" },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={sample}
        keyExtractor={(item) => item.description}
        renderItem={({ item }) => <Text>{item.description}</Text>}
      />
    </View>
  );
};

export default SideBarSample;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
  },
  topImage: {
    width: 375,
    height: 110,
  },
  topTitle: {
    fontSize: 20,
    marginHorizontal: 15,
  },
  titleImage: {
    width: 50,
    height: 65,
  },
  topTitleContainer: {
    margin: 20,
    marginBottom: 5,
    display: "flex",
    flexDirection: "row",
    paddingBottom: 10,
    borderBottomColor: "#cbced4",
    borderBottomWidth: 2,
  },
  newsContainer: {
    paddingHorizontal: 20,
  },
  headerTxt: {
    fontSize: 20,
    color: "grey",
    marginLeft: 10,
  },
});
