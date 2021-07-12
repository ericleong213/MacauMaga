import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

import Video from "../components/video";
import { FontAwesome } from "@expo/vector-icons";

const VideoList = () => {
  const [sample] = useState([
    {title: "炫目扯鈴 天馬行空任你扯"},
    {title: "舞龍躍登小城非遺 矯健身姿團結人心"},
    {title: "第3期"},
    {title: "第4期"},
    {title: "第5期"},
    {title: "第6期"},
    {title: "第7期"},
  ]);
  return (
    <View style={styles.screen}>
      <FlatList
        data={sample}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <Video title={item.title}/>}
      />
    </View>
  );
};

export default VideoList;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
});
