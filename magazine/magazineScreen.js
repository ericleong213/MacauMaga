import React, { useState, useEffect } from "react";
import MagazineScreenList from "./magazineScreenList";
import MagazineBlogScreen from "./magazineBlogScreen";
import apiClient from "../api/client";
import dataRef from "../api/firebaseDataBase";

const MagazineScreen = (props) => {
  const [selected, setSelected] = useState("list");
  const [currentMagazine, setCurrentMagazine] = useState();

  const handleListToBlog = (info) => {
    setCurrentMagazine(info);
    setSelected("blog");
  };

  const [MagazineList, setMagazineList] = useState();

  useEffect(() => {
    loadMagazines();
  }, []);

  const loadMagazines = async () => {
    // await apiClient.get().then((response) => setMagazineList(response.data[1]));
    await dataRef
      .ref()
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setMagazineList(snapshot.val()[1]);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      {selected == "list" && (
        <MagazineScreenList
          magazineList={MagazineList}
          setNewsScreen={props.setNewsScreen}
          setVideoScreen={props.setVideoScreen}
          handleListToBlog={handleListToBlog}
        />
      )}
      {selected == "blog" && (
        <MagazineBlogScreen
          data={currentMagazine}
          backToList={() => setSelected("list")}
        />
      )}
    </>
  );
};

export default MagazineScreen;
