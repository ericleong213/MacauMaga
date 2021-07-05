import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  Feather,
  FontAwesome,
} from "@expo/vector-icons";

const Magazine = (props) => {
  return (
    <View style={styles.Magazine}>
      <Image
        style={styles.magaImg}
        source={{
          uri: "https://picsum.photos/200/200",
        }}
      />
      <Text style={styles.tileText}>{props.title}</Text>
      <View style={styles.tileButtonContainer}>
        <TouchableOpacity onPress={() => console.log("once")}>
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
    width: 140,
    height: 230,
    margin: 10,
    borderWidth: 2,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  magaImg: {
    width: 130,
    height: 190,
  },
  tileText: {
    color: "grey",
    alignSelf: "flex-start",
    fontSize: 20,
    marginTop: 5,
  },
  tileButtonContainer: {
    position: "absolute",
    bottom: 30,
    display: "flex",
    flexDirection: "row",
    marginBottom: 5,
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
