import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";

const News = (props) => {
  return (
    <TouchableHighlight style={styles.newsTile} onPress={props.onPress}>
      <View style={styles.newsTile}>
        <Image
          style={styles.newsImg}
          source={{
            uri: props.info.imgUrl,
          }}
        />
        <Text style={styles.newsText}>{props.info.date}{"\n\n"}{props.info.title}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default News;

const styles = StyleSheet.create({
  newsTile: {
    flex: 1,
    width: 320,
    height: 110,
    margin: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#DDDDDD",
  },
  newsImg: {
    width: 110,
    height: 100,

  },
  newsText: {
    color: "grey",
    fontSize: 20,
    marginTop: 5,
    marginLeft: 20,
  },
});
