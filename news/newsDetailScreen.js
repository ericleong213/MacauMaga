import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SimpleLineIcons, MaterialIcons } from "@expo/vector-icons";
import NewsDetail from "./newsDetail";

const NewsDetailScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity onPress={props.backToList}>
            <SimpleLineIcons style={styles.iconArrow} name="arrow-left" />
          </TouchableOpacity>
          <Text style={styles.title}>快訊</Text>
          <TouchableOpacity>
            <MaterialIcons name="forward-to-inbox" style={styles.iconMail} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.subScreen}>
        <NewsDetail currentNews={props.currentNews} />
      </View>
    </View>
  );
};

export default NewsDetailScreen;

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
  iconMail: {
    color: "white",
    fontSize: 25,
  },

  subScreen: {
    position: "relative",
    top: 75,
    width: "100%",
    height: 592,
    backgroundColor: "white",
  },
});
