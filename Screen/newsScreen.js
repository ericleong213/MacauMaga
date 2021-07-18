import React, { useState } from "react";
import NewsScreenList from "./newsScreenList";
import NewsDetailScreen from "./newsDetailScreen";

const NewsScreen = (props) => {
  const [selected, setSelected] = useState("list");
  const [currentNews, setCurrentNews] = useState(null);
  const handleListToDetail = (info) => {
    setCurrentNews(info);
    setSelected("detail");
  };
  const newsList = [
    {
      id: 1,
      info: {
        title: "今天天氣很差, 但又很好",
        date: "2021/06/01",
        imgUrl: "https://picsum.photos/200/200",
        context: "Sample Text 1 Sample Text 1",
      },
    },
    {
      id: 2,
      info: {
        title: "這apps我弄了幾個月都未弄好",
        date: "2021/06/05",
        imgUrl: "https://picsum.photos/200/200",
        context: "Sample 2 2 2 2 2  2222",
      },
    },
    {
      id: 3,
      info: {
        title: "救命，好攰",
        date: "2021/06/10",
        imgUrl: "https://picsum.photos/200/200",
        context: "3 text sample 3 sample text 3",
      },
    },
    {
      id: 4,
      info: {
        title: "拿拿聲整埋個過場",
        date: "2021/06/20",
        imgUrl: "https://picsum.photos/200/200",
        context: "no 4 sample la",
      },
    },
    {
      id: 5,
      info: {
        title: "整埋server backend RESTful APi",
        date: "2021/06/30",
        imgUrl: "https://picsum.photos/200/200",
        context: "gimme Five , the Fifth One",
      },
    },
    {
      id: 6,
      info: {
        title: "upload埋去google store or apps store就叫禮成, 頂你!",
        date: "2021/07/30",
        imgUrl: "https://picsum.photos/200/200",
        context: "six xis xissix is kxisi xi ",
      },
    },
  ];

  return (
    <>
      {selected == "list" && (
        <NewsScreenList
          setMagazineScreen={props.setMagazineScreen}
          setVideoScreen={props.setVideoScreen}
          newsList={newsList}
          toDetail={handleListToDetail}
        />
      )}
      {selected == "detail" && (
        <NewsDetailScreen
          backToList={() => setSelected("list")}
          currentNews={currentNews}
        />
      )}
    </>
  );
};

export default NewsScreen;
