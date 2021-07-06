import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";

const Blog = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.magaImg}
        source={{
          uri: "https://picsum.photos/200/200",
        }}
      />
      <View style={styles.videoClipContainer}>
        <Text style={styles.videoClip}>hello</Text>
      </View>
    </View>
  );
};

export default Blog;

const styles = StyleSheet.create({
  container: {
    top: 100,
    width: 150,
    height: 230,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  magaImg: {
    width: 148,
    height: 200,
  },

  videoClipContainer: {
    marginTop: 20,
    height: 220,
    backgroundColor: "grey",
  },
});
