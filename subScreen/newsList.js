import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

import News from '../components/news';
import { FontAwesome } from "@expo/vector-icons";

const NewsList = () => {
  const [sample] = useState([
    "第1期",
    "第2期",
    "第3期",
    "第4期",
    "第5期",
    "第6期",
    "第7期",
    "第8期",
  ]);
  return (
    <View style={styles.container}>
      <Image
        style={styles.topImage}
        source={{ uri: "https://picsum.photos/200/200" }}
      />
      <View style={styles.topTitleContainer}>
        <Image
          style={styles.titleImage}
          source={{ uri: "https://picsum.photos/200/200" }}
        />
        <Text style={styles.topTitle}>澳門雜誌第141期出版</Text>
      </View>
      <View style={styles.newsContainer}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <FontAwesome name="download" style={styles.iconDownload} />
          <Text style={styles.headerTxt}>快訊</Text>
        </View>
        <FlatList
          data={sample}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => <News />}
        />
      </View>
    </View>
  );
};

export default NewsList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    position: "absolute",
    top: 150,
    width: "100%",
  },
  topImage: {
    width: 375,
    height: 130,
  },
  topTitle: {
    fontSize: 20,
    marginHorizontal: 15,
  },
  titleImage: {
    width: 50,
    height: 65,
  },
  topTitleContainer: {
    margin: 20,
    display: "flex",
    flexDirection: "row",
    paddingBottom: 20,
    borderBottomColor: "#cbced4",
    borderBottomWidth: 2,
  },
  newsContainer: {
    paddingHorizontal: 20,
  },
  headerTxt: {
    fontSize: 20,
    color: "grey",
    marginLeft: 10,
  },
});
