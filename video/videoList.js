import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import { Foundation, AntDesign } from "@expo/vector-icons";


import Video from "./video";

const VideoList = (props) => {

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
        <TouchableOpacity
          onPress={props.setNewsScreen}
          style={styles.navigationTitleContainer}
        >
          <Text style={styles.navigationTitle}>快訊</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={props.setMagazineScreen}
          style={styles.navigationTitleContainer}
        >
          <Text style={styles.navigationTitle}>雜誌</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ActiveNavigationTitleContainer}>
          <Text style={styles.ActiveNavigationTitle}>短片</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.subScreen}>
      <View style={styles.screen}>
        <FlatList
          data={props.data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Video data={item.info} handleListToDetail={props.handleListToDetail}/>}
        />
      </View>
    </View>
  </View>


    
  );
};

export default VideoList;


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
    color: "#9e9796",
    fontSize: 20,
    marginHorizontal: 30,
  },
  ActiveNavigationTitle: {
    color: "white",
    fontSize: 20,
    marginHorizontal: 30,
  },
  navigationTitleContainer: {
    color: "#9e9796",
  },
  ActiveNavigationTitleContainer: {
    borderBottomWidth: 2,
    borderBottomColor: "white",
    paddingBottom: 5,
  },
  subScreen: {
    position: "relative",
    top: 95,
    width: "100%",
    height: 675,
    backgroundColor: "white",
  },
});