import React, { useState, useEffect } from "react";
import MagazineScreenList from "./magazineScreenList";
import MagazineBlogScreen from "./magazineBlogScreen";
import apiClient from "../api/client";

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
    await apiClient.get().then((response) => setMagazineList(response.data[1]));
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
