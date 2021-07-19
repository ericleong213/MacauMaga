import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";

import MagazineBloglistTile from "./magazineBloglistTile";


import { SimpleLineIcons } from "@expo/vector-icons";

const MagazineBlogList = (props) => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity onPress={props.backToList}>
            <SimpleLineIcons style={styles.iconArrow} name="arrow-left" />
          </TouchableOpacity>
          <Text style={styles.title}>Hello</Text>
        </View>
      </View>
      <View style={styles.subScreen}>
        <FlatList
            data={props.data.blog}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <MagazineBloglistTile info={item.info}  />
            )}
          />
      </View>
    </View>
  );
};

export default MagazineBlogList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#318b4d",
    alignItems: "center",
    height: "100%",
  },
  header: {
    position: "absolute",
    top: 35,
    height: 75,
  },
  headerTop: {
    display: "flex",
    flexDirection: "row",
  },
  title: {
    color: "white",
    fontSize: 25,
    marginHorizontal: 120,
  },
  iconArrow: {
    color: "white",
    fontSize: 25,
  },

  subScreen: {
    position: "relative",
    top: 75,
    width: "100%",
    height: 683,
    backgroundColor: "white",
  },
});
