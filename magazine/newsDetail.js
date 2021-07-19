import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const NewsDetail = (props) => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleTxt}>{props.currentNews.title}</Text>
      </View>
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitleTxt}>
          {props.currentNews.title}
          {props.currentNews.date}
        </Text>
      </View>
      <View style={styles.subTitleContainer}>
        <Image
          style={styles.newsImg}
          source={{
            uri: "https://picsum.photos/200/200",
          }}
        />
      </View>
    </View>
  );
};

export default NewsDetail;

const styles = StyleSheet.create({
  titleContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderColor: "black",
    paddingBottom: 10,
  },
  titleTxt: {
    fontSize: 20,
    fontWeight: "500",
  },
  subTitleContainer: {
    marginHorizontal: 20,
    marginVertical: 0,
  },
  subTitleTxt: {
    fontSize: 16,
    color: "grey",
  },
  newsImg: {
    marginVertical: 10,
    width: 330,
    height: 480,
  },
});
