import { select } from "async";
import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import NewsScreen from "./news/newsScreen"
import MagazineScreen from "./magazine/magazineScreen"
import VideoScreen from "./Screen/videoScreen";

const SelectScreen = (props) => {
  const [selected, setSelected] = useState("video");
  return (
    <>
      {selected == "news" && (
        <NewsScreen
          setMagazineScreen={() => setSelected("magazine")}
          setVideoScreen={() => setSelected("video")}
        />
      )}
      {selected == "magazine" && (
        <MagazineScreen
          setNewsScreen={() => setSelected("news")}
          setVideoScreen={() => setSelected("video")}
        />
      )}
      {selected == "video" && (
        <VideoScreen
          setNewsScreen={() => setSelected("news")}
          setMagazineScreen={() => setSelected("magazine")}
        />
      )}
    </>
  );
};

export default SelectScreen;
