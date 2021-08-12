import { sample } from "lodash";
import React from "react";
import { View, Text } from "react-native";
import dataRef from "./firebaseDataBase";

export default function Sample() {
  dataRef
    .ref()
    .get()
    .then((snapshot) => console.log(snapshot));

  return (
    <View>
      <Text> Sample is working</Text>
    </View>
  );
}
