import React, { useState } from "react";
import MagazineScreenList from "./magazineScreenList";

const MagazineScreen = (props) => {
  const MagazineList = [
    {
      id: 101,
      thumbnailUrl: "https://picsum.photos/200/200",
      title: "總第一期",
      blog: [
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
      ],
    },
    {
      id: 201,
      thumbnailUrl: "https://picsum.photos/200/200",
      title: "總第二期",
      blog: [
        {
          id: 21,
          info: {
            title: "今天天氣很差, 但又很好",
            date: "2021/06/01",
            imgUrl: "https://picsum.photos/200/200",
            context: "Sample Text 1 Sample Text 1",
          },
        },
        {
          id: 22,
          info: {
            title: "這apps我弄了幾個月都未弄好",
            date: "2021/06/05",
            imgUrl: "https://picsum.photos/200/200",
            context: "Sample 2 2 2 2 2  2222",
          },
        },
        {
          id: 23,
          info: {
            title: "救命，好攰",
            date: "2021/06/10",
            imgUrl: "https://picsum.photos/200/200",
            context: "3 text sample 3 sample text 3",
          },
        },
      ],
    },
    {
      id: 301,
      thumbnailUrl: "https://picsum.photos/200/200",
      title: "總第三期",
      blog: [
        {
          id: 31,
          info: {
            title: "今天天氣很差, 但又很好",
            date: "2021/06/01",
            imgUrl: "https://picsum.photos/200/200",
            context: "Sample Text 1 Sample Text 1",
          },
        },
        {
          id: 32,
          info: {
            title: "這apps我弄了幾個月都未弄好",
            date: "2021/06/05",
            imgUrl: "https://picsum.photos/200/200",
            context: "Sample 2 2 2 2 2  2222",
          },
        },
        {
          id: 33,
          info: {
            title: "救命，好攰",
            date: "2021/06/10",
            imgUrl: "https://picsum.photos/200/200",
            context: "3 text sample 3 sample text 3",
          },
        },
      ],
    },
  ];

  return (
    <MagazineScreenList
      setNewsScreen={props.setNewsScreen}
      setVideoScreen={props.setVideoScreen}
      magazineList={MagazineList}
    />
  );
};

export default MagazineScreen;
