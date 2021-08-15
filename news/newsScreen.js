import React, { useEffect, useState } from "react";
import NewsScreenList from "./newsScreenList";
import NewsDetailScreen from "./newsDetailScreen";
import dataRef from "../api/firebaseDataBase";

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
    // await apiClient.get().then((response) => setNewsList(response.data[0]));
    await dataRef
      .ref()
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setNewsList(snapshot.val()[0]);
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
