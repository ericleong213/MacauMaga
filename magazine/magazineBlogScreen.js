import React, { useState } from "react";
import { View, Text} from "react-native";

import MagazineBlogList from "./magazineBloglist";
import MagazineDetail from "./magazineDetail";

const MagazineBlogScreen = (props) => {
  const [selected, setSelected] = useState("detail");
  const [currentDetail, setCurrentDetail] = useState(
    {
      id: 1,
      info: {
        title: "今天天氣很差, 但又很好",
        date: "2021/06/01",
        imgUrl: "https://picsum.photos/200/200",
        context: "Sample Text 1 Sample Text 1",
      }
    }
  );

  const handleBlogtoDetail = (info) => {
    setCurrentDetail(info);
    setSelected("detail");
  };

  return (
    <>
      {selected == "blog" && (
        <MagazineBlogList 
          data={props.data} 
          backToList={props.backToList}
          handleBlogtoDetail={handleBlogtoDetail}
        />
      )}
      {selected == "detail" && (
        <MagazineDetail
          backToBlog={() => setSelected("blog")}
          currentDetail={currentDetail}
        />
      )}
    </>
  );
};

export default MagazineBlogScreen;
