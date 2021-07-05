import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ShadowPropTypesIOS } from "react-native";

const Video = (props) => {
  return (
    <View style={styles.videoTile}>
      <Image
        style={styles.video}
        source={{
          uri: "https://picsum.photos/200/200",
        }}
      />
      <Text>{props.title}</Text>
    </View>
  );
};

export default Video;

const styles = StyleSheet.create({
  videoTile: {
    width: 375,
    height: 180,
    margin: 10,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: 330,
    height: 180,
  },
});
