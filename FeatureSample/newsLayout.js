import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import PDFReader from "rn-pdf-reader-js";

const NewsLayout = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.img}
          source={{ uri: "https://picsum.photos/200/200" }}
        />
      </View>
      <View style={styles.bottom}>
        <View style={styles.newsTile}>
          <Image
            style={styles.img2}
            source={{ uri: "https://picsum.photos/200/200" }}
          />
          <Text style={styles.newsDate}>date</Text>
          <Text style={styles.newsDesc}>
            海關辦比賽推廣保護知識產權7月起徵集作品這是一些廢話用來充一充字數
          </Text>
        </View>
        <View style={styles.newsTile}>
          <Image
            style={styles.img2}
            source={{ uri: "https://picsum.photos/200/200" }}
          />
          <Text style={styles.newsDate}>date</Text>
          <Text style={styles.newsDesc}>
            海關辦比賽推廣保護知識產權7月起徵集作品這是一些廢話用來充一充字數
          </Text>
        </View>
        <View style={styles.newsTile}>
          <Image
            style={styles.img2}
            source={{ uri: "https://picsum.photos/200/200" }}
          />
          <Text style={styles.newsDate}>date</Text>
          <Text style={styles.newsDesc}>
            海關辦比賽推廣保護知識產權7月起徵集作品這是一些廢話用來充一充字數
          </Text>
        </View>
      </View>
    </View>
  );
};

export default NewsLayout;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flex: 1,
    backgroundColor: "blue",
  },
  bottom: {
    flex: 1,
    backgroundColor: "green",
  },
  img: {
    height: 333,
    width: 375,
  },
  img2: {
    top: 15,
    left: 15,
    height: 90,
    width: 100,
  },
  newsTile: {
    display: "flex",
    flexDirection: "row",
    width: 375,
    backgroundColor: "silver",
    borderWidth: 2,
    height: 120,
  },
  newsDate: {
    top: 15,
    left: 55,
    height: 20,
    backgroundColor: "red",
  },
  newsDesc: {
    top: 50,
    left: 30,
    width: 180,
  },
});
