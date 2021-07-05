import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

import Video from "../components/video";
import { FontAwesome } from "@expo/vector-icons";

const VideoList = () => {
  const [sample] = useState([
    {title: "第1期"},
    {title: "第2期"},
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
    backgroundColor: "white",
    top: 150,
  },
});
