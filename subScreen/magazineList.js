import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import Magazine from "../components/magazine";

const MagazineList = () => {
  const [sample] = useState([
    "第1期",
    "第2期",
    "第3期",
    "第4期",
    "第5期",
    "第6期",
    "第7期",
    "第8期",
  ]);
  return (
    <View style={styles.MagazineListContainer}>
      <FlatList
        data={sample}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => <Magazine title={item} />}
      />
    </View>
  );
};

export default MagazineList;

const styles = StyleSheet.create({
  MagazineListContainer: {
    backgroundColor: "white",
    position: "absolute",
    top: 150,
    paddingHorizontal: 20,
    width: "100%",
  },
});
