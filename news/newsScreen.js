import React, { useEffect, useState } from "react";
import NewsScreenList from "./newsScreenList";
import NewsDetailScreen from "./newsDetailScreen";
import apiClient from "../api/client";

const NewsScreen = (props) => {
  const [selected, setSelected] = useState("list");
  const [currentNews, setCurrentNews] = useState(null);
  const handleListToDetail = (info) => {
    setCurrentNews(info);
    setSelected("detail");
  };

  const [newsList, setNewsList] = useState();

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    await apiClient.get().then((response) => setNewsList(response.data[0]));
  };

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
