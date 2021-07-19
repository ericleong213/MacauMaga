import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import Magazine from "./magazine";

const MagazineList = (props) => {
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
        data={props.magazineList}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => <Magazine info={item} />}
      />
    </View>
  );
};

export default MagazineList;

const styles = StyleSheet.create({
  MagazineListContainer: {
    // position: "absolute",
    padding: 15,
    // flexWrap: "wrap",
  },
});
