import { select } from "async";
import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import NewsScreen from "./Screen/newsScreen";
import MagazineScreen from "./Screen/magazineScreen";

const SelectScreen = (props) => {
  const [selected, setSelected] = useState("magazine");
  return (
    <>
      {selected == "news" && (
        <NewsScreen setScreen={() => setSelected("magazine")} />
      )}
      {selected == "magazine" && (
        <MagazineScreen setScreen={() => setSelected("news")} />
      )}
    </>
  );
};

export default SelectScreen;
