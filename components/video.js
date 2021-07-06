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
      <View style={styles.txtContainer}>
        <Text style={styles.txt}>{props.title}</Text>
      </View>
    </View>
  );
};

export default Video;

const styles = StyleSheet.create({
  videoTile: {
    width: 375,
    height: 200,
    marginBottom: 20,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
  },
  video: {
    width: 375,
    height: 200,
  },
  txtContainer: {
    // backgroundColor: "#f2f2f2",
    backgroundColor: "rgba(204,204,204,0.5)",
    position: "absolute",
    bottom: 0,
    width: 375,
    height: 35,
    justifyContent: "center",
    paddingLeft: 10,
  },
  txt: {
    color: "white",
  }
});
