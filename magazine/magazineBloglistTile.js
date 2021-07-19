import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";

const MagazineBloglistTile = (props) => {
  return (
    <TouchableHighlight
      style={styles.newsTile}
      onPress={() => console.log("pressed")}
    >
      <View style={styles.newsTile}>
        <Image
          style={styles.newsImg}
          source={{
            uri: props.info.imgUrl,
          }}
        />
        <Text style={styles.newsText}>
          •
          {props.info.date}
          {"\n\n"}
          {props.info.title}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default MagazineBloglistTile;

const styles = StyleSheet.create({
  newsTile: {
    width: 320,
    height: 110,
    margin: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  newsImg: {
    width: 130,
    height: 90,
  },
  newsText: {
    color: "grey",
    fontSize: 20,
    marginTop: 5,
    marginLeft: 20,
  },
});
