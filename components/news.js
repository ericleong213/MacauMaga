import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
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
      <Text style={styles.newsText}>2021/06/10{"\n\n"}{props.description}</Text>
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  newsTile: {
    width: 350,
    height: 130,
    margin: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  newsImg: {
    width: 130,
    height: 120,

  },
  newsText: {
    color: "grey",
    fontSize: 20,
    marginTop: 5,
    marginLeft: 20,

  },
});
