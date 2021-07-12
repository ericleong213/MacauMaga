import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Foundation, AntDesign } from "@expo/vector-icons";
import VideoClip from "../FeatureSample/VideoClip";

const title = "炫目扯鈴 天馬行空任你2扯";
const titleDate = "2021/06/30";

const VideoViewPage = (props) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity>
            <Foundation style={styles.iconList} name="list" />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign style={styles.iconSetting} name="setting" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.subScreen}>
        <View style={styles.videoTitleContainer}>
          <Text style={styles.videoTitle}>{title}</Text>
        </View>
        <View style={styles.videoTitleContainer2}>
          <Text style={styles.videoTitle2}>
            {title}
            {titleDate}
          </Text>
        </View>
        <VideoClip />
        {/* <View style={styles.videoClipContainer}>
          <Text style={styles.videoClip}>{title}</Text>
        </View> */}
      </View>
    </View>
  );
};

export default VideoViewPage;

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
    marginRight: 280,
  },
  iconSetting: {
    color: "white",
    fontSize: 25,
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
  videoTitleContainer: {
    borderBottomWidth: 2,
    borderBottomColor: "rgb(207,207,207)",
  },
  videoTitle: {
    fontSize: 25,
    fontWeight: "500",
    paddingBottom: 10,
  },
  videoTitleContainer2: {
    marginTop: 10,
  },
  videoTitle2: {
    fontSize: 18,
    color: "rgb(207,207,207)",
  },
  videoClipContainer: {
    marginTop: 20,
    height: 220,
    backgroundColor: "grey",
  },
  videoClip: {},
});
