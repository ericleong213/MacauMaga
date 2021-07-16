import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

import News from '../components/news';
import { FontAwesome } from "@expo/vector-icons";

const NewsList = (props) => {
  const [sample] = useState([
    {id:1, info: {title: "今天天氣很差, 但又很好", date:"2021/06/01", imgUrl:"https://picsum.photos/200/200", context: "Sample Text 1 Sample Text 1"}},
    {id:2, info: {title: "這apps我弄了幾個月都未弄好", date:"2021/06/05", imgUrl:"https://picsum.photos/200/200", context: "Sample 2 2 2 2 2  2222"}},
    {id:3, info: {title: "救命，好攰", date:"2021/06/10", imgUrl:"https://picsum.photos/200/200", context: "3 text sample 3 sample text 3"}},
    {id:4, info: {title: "拿拿聲整埋個過場", date:"2021/06/20", imgUrl:"https://picsum.photos/200/200", context: "no 4 sample la"}},
    {id:5, info: {title: "整埋server backend RESTful APi", date:"2021/06/30", imgUrl:"https://picsum.photos/200/200", context: "gimme Five , the Fifth One"}},
    {id:6, info: {title: "upload埋去google store or apps store就叫禮成, 頂你!", date:"2021/07/30", imgUrl:"https://picsum.photos/200/200", context: "six xis xissix is kxisi xi "}},
  ]);
  const [selectedNews, setSelectedNews] = useState();
  const handleSelect = (data) => {
    setSelectedNews(data)
  };

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
        <View style={styles.newsList}>
          <FlatList
            data={sample}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <News info={item.info} onPress={props.toDetail}/>}
          />
        </View>
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
  newsList:{
  }
});
