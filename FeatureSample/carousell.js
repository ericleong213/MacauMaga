import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");
const height = width * 0.6;

const Carousell = (props) => {
  const [pageIndex, setPageIndex] = useState(2);

  const change = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== pageIndex) {
      setPageIndex(slide);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal pagingEnabled onScroll={change}>
        {props.images.map((image, index) => (
          <Image
            id={index}
            style={styles.image}
            source={{
              uri: image,
            }}
          />
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {props.images.map((image, index) => (
          <Text style={[styles.dot, pageIndex == index && styles.activedot]}>
            ⬤
          </Text>
        ))}
      </View>
    </View>
  );
};

export default Carousell;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    marginTop: 200,
    backgroundColor: "grey",
  },
  image: {
    width,
    height,
  },
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: 200,
    alignSelf: "center",
  },
  dot: {
    fontSize: width / 30,
    color: "white",
    margin: 3,
  },
  activedot: {
    fontSize: width / 30,
    color: "red",
    margin: 3,
  },
});
