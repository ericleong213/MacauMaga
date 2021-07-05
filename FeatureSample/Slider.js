import React, { Component } from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";

const images = [
  "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/917494/pexels-photo-917494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/531321/pexels-photo-531321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];

const { width } = Dimensions.get("window");
const height = width * 0.6;

class Slider extends Component {
  state = {
    active: 1,
  };

  //detect the sliding motion, and set the active page to highlight the indicator
  change = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== this.state.active) {
      this.setState({ active: slide });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal
          pagingEnabled
          onScroll={this.change}
          showsHorizontalScrollIndicator={false}
          style={{ width, height }}
        >
          {images.map((image, index) => (
            <Image
              style={styles.image}
              source={{
                uri: image,
              }}
            />
          ))}
        </ScrollView>
        <View style={styles.pagination}>
          {images.map((i, k) => (
            <Text
              key={k}
              style={k == this.state.active ? styles.dot : styles.dotActive}
            >
              ⬤
            </Text>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    width,
    height,
  },
  image: {
    width,
    height,
    resizeMode: "cover",
  },
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
  },
  dot: {
    fontSize: width / 30,
    color: "white",
    margin: 3,
  },
  dotActive: {
    fontSize: width / 30,
    color: "#888",
    margin: 3,
  },
});

export default Slider;

{
  /* <Text>This is Page 1</Text>
      <Image style={styles.tinyLogo} source={require("../assets/dog1.jpg")} />
      <Button title="Back to content" onPress={props.onSwitchDisplayScreen} />
      <Button title="Page 2" onPress={() => props.onSwitchToCertainPage(2)} /> */
}
