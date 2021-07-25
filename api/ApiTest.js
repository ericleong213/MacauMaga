import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import apiClient from "./client";

const ApiTest = () => {
  const [sample, setSample] = useState();
  const [title, setTitle] = useState("nothing");

  const testApi = async () => {
    await apiClient.get().then((response) => console.log(response.data));
  };

  return (
    <View style={styles.container}>
      <Text>sample API</Text>
      <Button title="fetch" onPress={testApi} />
      <Button title="print" onPress={() => setTitle(sample[0]["title"])} />
      <Text>{title}</Text>
    </View>
  );
};

export default ApiTest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
});
