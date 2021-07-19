import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import Magazine from "./magazine";

const MagazineList = (props) => {

  return (
    <View style={styles.MagazineListContainer}>
      <FlatList
        data={props.magazineList}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => <Magazine info={item} handleListToBlog={props.handleListToBlog}/>}
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
