import React from "react";

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
firebase.initializeApp(firebaseConfig);

//read Data ends

var dataRef = firebase.database();

//read Data ends

export default dataRef;
