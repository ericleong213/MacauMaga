import React, { useState } from "react";
import NewsScreenList from "./newsScreenList";
import NewsDetailScreen from "./newsDetailScreen";

const NewsScreen = (props) => {
  const [selected, setSelected] = useState("detail");
  const newsList = {}

  return (
    <>
      {selected == "list" && (
        <NewsScreenList setMagazineScreen={props.setMagazineScreen} setVideoScreen={props.setVideoScreen} toDetail={() => setSelected("detail")}/>
        )
      }
      {selected == "detail" && (
        <NewsDetailScreen backToList={() => setSelected("list")}/>
        )
      }
    </>
  )
};

export default NewsScreen;
