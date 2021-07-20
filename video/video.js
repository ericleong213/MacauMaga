import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ShadowPropTypesIOS, TouchableHighlight } from "react-native";

const Video = (props) => {
  return (
    <TouchableHighlight onPress={() => props.handleListToDetail(props.data)}>
      <View style={styles.videoTile}>
        <Image
          style={styles.video}
          source={{
            uri: "https://picsum.photos/200/200"
          }}
        />
        <View style={styles.txtContainer}>
          <Text style={styles.txt}>{props.data.title}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default Video;

const styles = StyleSheet.create({
  videoTile: {
    width: "100%",
    height: 200,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
  },
  video: {
    width: "100%",
    height: 200,
  },
  txtContainer: {
    backgroundColor: "rgba(204,204,204,0.5)",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 35,
    justifyContent: "center",
    paddingLeft: 10,
  },
  txt: {
    color: "white",
  }
});
