import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

import News from '../components/news';
import { FontAwesome } from "@expo/vector-icons";

const NewsList = () => {
  const [sample] = useState([
    {description: "今天天氣很差, 但又很好。"},
    {description: "這apps我弄了幾個月都未弄好"},
    {description: "救命，好攰"},
    {description: "拿拿聲整埋個過場"},
    {description: "整埋api攞data"},
    {description: "整埋server backend RESTful APi"},
    {description: "upload埋去google store or apps store就叫禮成, 頂你!"},
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
          keyExtractor={(item) => item.description}
          renderItem={({ item }) => <News description={item.description}/>}
        />
      </View>
    </View>
  );
};

export default NewsList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
  },
  topImage: {
    width: 375,
    height: 110,
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
    marginBottom: 5,
    display: "flex",
    flexDirection: "row",
    paddingBottom: 10,
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
