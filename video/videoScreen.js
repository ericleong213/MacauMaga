import React, { useState, useEffect } from "react";

import VideoList from "./videoList";
import VideoDetail from "./videoDetail";

const VideoScreen = (props) => {
  const [selected, setSelected] = useState("detail");
  const [currentVideo, setCurrentVideo] = useState(
      {
        title: "這apps我弄了幾個月都未弄好",
        date: "2021/06/05",
        videoUrl: "https://picsum.photos/200/200",
        context: "Sample 2 2 2 2 2  2222",
      },
  );
  const handleListToDetail = (info) => {
    setCurrentVideo(info);
    setSelected("detail");
  };
  const videoList = [
    {
      id: 1,
      info: {
        title: "今天天氣很差, 但又很好",
        date: "2021/06/01",
        videoUrl: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        context: "Sample Text 1 Sample Text 1",
      },
    },
    {
      id: 2,
      info: {
        title: "這apps我弄了幾個月都未弄好",
        date: "2021/06/05",
        videoUrl: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        context: "Sample 2 2 2 2 2  2222",
      },
    },
    {
      id: 3,
      info: {
        title: "救命，好攰",
        date: "2021/06/10",
        videoUrl: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        context: "3 text sample 3 sample text 3",
      },
    },
    {
      id: 4,
      info: {
        title: "拿拿聲整埋個過場",
        date: "2021/06/20",
        videoUrl: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        context: "no 4 sample la",
      },
    },
    {
      id: 5,
      info: {
        title: "整埋server backend RESTful APi",
        date: "2021/06/30",
        videoUrl: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        context: "gimme Five , the Fifth One",
      },
    },
    {
      id: 6,
      info: {
        title: "upload埋去google store or apps store就叫禮成, 頂你!",
        date: "2021/07/30",
        videoUrl: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        context: "six xis xissix is kxisi xi ",
      },
    },
  ];

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
