import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Foundation, AntDesign } from "@expo/vector-icons";
import VideoList from './subScreen/videoList'
import NewsList from './subScreen/newsList';
import MagazineList from "./subScreen/magazineList";

const HomeScreen = (props) => {
  
  const[selected, setSelected] = useState("news");



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
          <TouchableOpacity onPress={() => setSelected("news")} style={[styles.navigationTitleContainer, selected == "news" && styles.ActiveNavigationTitleContainer]}>
            <Text style={[styles.navigationTitle, selected == "news" && styles.ActiveNavigationTitle]} >快訊</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelected("magazine")} style={[styles.navigationTitleContainer, selected == "magazine" && styles.ActiveNavigationTitleContainer]}>
          <Text style={[styles.navigationTitle, selected == "magazine" && styles.ActiveNavigationTitle]} >雜誌</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelected("video")} style={[styles.navigationTitleContainer, selected == "video" && styles.ActiveNavigationTitleContainer]}>
          <Text style={[styles.navigationTitle, selected == "video" && styles.ActiveNavigationTitle]} >短片</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.subScreen}>
        {selected == "news" && <NewsList/>}
        {selected == "magazine" && <MagazineList/>}
        {selected == "video" && <VideoList/>}
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
    height: 552,
    backgroundColor: "white",
  }
});
