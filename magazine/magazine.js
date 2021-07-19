import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";

const Magazine = (props) => {
  return (
    <View style={styles.Magazine}>
      <Image
        style={styles.magaImg}
        source={{
          uri: "https://picsum.photos/200/200",
        }}
      />
      <Text style={styles.tileText}>{props.info.title}</Text>
      <View style={styles.tileButtonContainer}>
        <TouchableOpacity onPress={() => props.handleListToBlog(props.info)}>
          <Feather name="book-open" style={styles.iconBook} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("twice")}>
          <FontAwesome name="download" style={styles.iconDownload} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Magazine;

const styles = StyleSheet.create({
  Magazine: {
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
  tileText: {
    color: "grey",
    alignSelf: "flex-start",
    fontSize: 20,
    marginTop: 5,
  },
  tileButtonContainer: {
    position: "absolute",
    bottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    backgroundColor: "#318b4d",
    width: 148,
    height: 35,
  },
  iconBook: {
    color: "white",
    fontSize: 25,
    marginHorizontal: 20,
  },
  iconDownload: {
    color: "white",
    fontSize: 25,
    marginHorizontal: 20,
  },
});
