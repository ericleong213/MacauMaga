import React, { useState, useEffect } from "react";

import VideoList from "./videoList";
import VideoDetail from "./videoDetail";
import apiClient from "../api/client";
import dataRef from "../api/firebaseDataBase";

const VideoScreen = (props) => {
  const [selected, setSelected] = useState("list");
  const [currentVideo, setCurrentVideo] = useState({
    title: "這apps我弄了幾個月都未弄好",
    date: "2021/06/05",
    videoUrl: "https://picsum.photos/200/200",
    context: "Sample 2 2 2 2 2  2222",
  });
  const handleListToDetail = (info) => {
    setCurrentVideo(info);
    setSelected("detail");
  };

  const [videoList, setVideoList] = useState();

  useEffect(() => {
    loadVideo();
  }, []);

  const loadVideo = async () => {
    // await apiClient.get().then((response) => setVideoList(response.data[2]));
    await dataRef
      .ref()
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setVideoList(snapshot.val()[2]);
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
        <VideoList
          setMagazineScreen={props.setMagazineScreen}
          setNewsScreen={props.setNewsScreen}
          data={videoList}
          handleListToDetail={handleListToDetail}
        />
      )}
      {selected == "detail" && (
        <VideoDetail
          backToList={() => setSelected("list")}
          data={currentVideo}
        />
      )}
    </>
  );
};

export default VideoScreen;
