import { keys, sample } from "lodash";
import React, { useState } from "react";
import { View, Text, Button } from "react-native";

// firebase starts.
import firebase from "firebase/app";

import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCKxPNVc3rVqqT4R44ZMsDq3NuTzIGtJr8",
  authDomain: "api-test-517ed.firebaseapp.com",
  databaseURL:
    "https://api-test-517ed-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "api-test-517ed",
  storageBucket: "api-test-517ed.appspot.com",
  messagingSenderId: "270925623180",
  appId: "1:270925623180:web:4e12b400d4dd5f76b4f0a9",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}
// firebase.app();

//read Data ends

//firebase ends.

const dbRef = firebase.database().ref();

export default function Sample() {
  const [data, setData] = useState("nothing is here");
  const press = () => {
    dbRef
      .ref()
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setData(snapshot.val());
          console.log(data["name"]["first"]);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Text> Sample is working</Text>
      <Button title="press" onPress={press} />
    </View>
  );
}
