import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SimpleLineIcons, MaterialIcons } from "@expo/vector-icons";
import Publications from "../FeatureSample/pdfViewer";


const MagazineDetail = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity onPress={props.backToBlog}>
            <SimpleLineIcons style={styles.iconArrow} name="arrow-left" />
          </TouchableOpacity>
          <Text style={styles.title}>類型</Text>
          <TouchableOpacity>
            <MaterialIcons name="forward-to-inbox" style={styles.iconMail} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.subScreen}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleTxt}>{props.data.title}</Text>
          </View>
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitleTxt}>
              {props.data.title}
              {props.data.date}
            </Text>
          </View>
          <View style={styles.subTitleContainer}>
            <Publications pdfUrl={props.data.pdfUrl}/>
            <Text style={styles.coontextTxt}>{props.data.context}</Text>
          </View>
      </View>
    </View>
  );
};

export default MagazineDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#318b4d",
    alignItems: "center",
    height: "100%",
  },
  header: {
    position: "absolute",
    top: 35,
    height: 75,
  },
  headerTop: {
    display: "flex",
    flexDirection: "row",
  },
  title: {
    color: "white",
    fontSize: 25,
    marginHorizontal: 120,
  },
  iconArrow: {
    color: "white",
    fontSize: 25,
  },
  iconMail: {
    color: "white",
    fontSize: 25,
  },

  subScreen: {
    position: "relative",
    top: 75,
    width: "100%",
    height: 592,
    backgroundColor: "white",
  },
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
