import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";

const News = (props) => {
  return (
    <View style={styles.newsTile}>
      <Image
        style={styles.newsImg}
        source={{
          uri: "https://picsum.photos/200/200",
        }}
      />
      <Text style={styles.newsText}>2021/06/10{"\n"}勢力本地新片</Text>
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  newsTile: {
    width: 140,
    height: 230,
    margin: 10,
    borderWidth: 2,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  newsImg: {
    width: 130,
    height: 190,
  },
  newsText: {
    color: "grey",
    alignSelf: "flex-start",
    fontSize: 20,
    marginTop: 35,
    marginLeft: 35,
  },
});
