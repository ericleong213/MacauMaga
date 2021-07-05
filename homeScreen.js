import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Foundation, AntDesign } from "@expo/vector-icons";
import VideoList from './subScreen/videoList'
import NewsList from './subScreen/newsList';
import MagazineList from "./subScreen/magazineList";


const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity>
            <Foundation style={styles.iconList} name="list" />
          </TouchableOpacity>
          <Text style={styles.title}>澳門雜誌</Text>
          <TouchableOpacity>
            <AntDesign style={styles.iconSetting} name="setting" />
          </TouchableOpacity>
        </View>
        <View style={styles.headerBottom}>
          <Text style={styles.navigationTitle}>快訊</Text>
          <Text style={styles.navigationTitle}>雜誌</Text>
          <Text style={styles.navigationTitle}>短片</Text>
        </View>
      </View>
      <View style={styles.subScreen}>
        <NewsList />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#318b4d",
    alignItems: "center",
    height: "100%",
  },
  header: {
    position: "absolute",
    top: 25,
    height: 100,
  },
  headerTop: {
    display: "flex",
    flexDirection: "row",
  },
  headerBottom: {
    display: "flex",
    flexDirection: "row",
    marginTop: 15,
  },
  title: {
    color: "white",
    fontSize: 25,
    marginHorizontal: 90,
  },
  iconList: {
    color: "white",
    fontSize: 25,
  },
  iconSetting: {
    color: "white",
    fontSize: 25,
  },
  navigationTitle: {
    color: "white",
    fontSize: 20,
    marginHorizontal: 30,
  },
  subScreen: {
    position: "relative",
    top: 95,
    width: "100%",
    height: 552,
    backgroundColor: "white",
  }
});
