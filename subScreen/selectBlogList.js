import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

import Blog from "../components/blog";
import { Foundation, AntDesign } from "@expo/vector-icons";

const themeName = "專題";

const SelectBlogList = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity>
            <Foundation style={styles.iconList} name="list" />
          </TouchableOpacity>
          <Text style={styles.themeName}>{themeName}</Text>
        </View>
      </View>
      <View style={styles.subScreen}>
        <View style={styles.blogListContainer}>
          <Blog />
        </View>
      </View>
    </View>
  );
};

export default SelectBlogList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#318b4d",
    alignItems: "center",
    height: "100%",
  },
  header: {
    position: "absolute",
    top: 45,
    left: 25,
    width: 320,
  },
  headerTop: {
    display: "flex",
    flexDirection: "row",
  },
  iconList: {
    color: "white",
    fontSize: 25,
    marginRight: 130,
  },
  subScreen: {
    position: "relative",
    top: 95,
    width: "100%",
    height: 552,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "white",
  },
  themeName: {
    fontSize: 20,
    color: "white",
  },
  blogListContainer: {},
});
