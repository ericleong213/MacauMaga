import React, { useState } from "react";
import MagazineScreenList from "./magazineScreenList";
import MagazineBlogScreen from "./magazineBlogScreen";

const MagazineScreen = (props) => {
  const [selected, setSelected] = useState("list");
  const [currentMagazine, setCurrentMagazine] = useState();

  const handleListToBlog = (info) => {
    setCurrentMagazine(info);
    setSelected("blog");
  };
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
            imgUrl: "https://cdn.pixabay.com/photo/2021/07/06/19/26/drops-6392473_960_720.jpg",
            pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            context: "Sample Text 1 Sample Text 1",
          },
        },
        {
          id: 2,
          info: {
            title: "這apps我弄了幾個月都未弄好",
            date: "2021/06/05",
            imgUrl: "https://picsum.photos/200/200",
            pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            context: "Sample 2 2 2 2 2  2222",
          },
        },
        {
          id: 3,
          info: {
            title: "救命，好攰",
            date: "2021/06/10",
            imgUrl: "https://picsum.photos/200/200",
            pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
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
            title: "大江東去, 浪淘盡",
            date: "2021/07/01",
            imgUrl: "https://picsum.photos/200/200",
            pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            context: "臨時想起的一首詩",
          },
        },
        {
          id: 22,
          info: {
            title: "隨風潛入夜, 潤物細無聲",
            date: "2021/07/05",
            imgUrl: "https://picsum.photos/200/200",
            pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            context: "好似講緊澳門潮濕的天氣",
          },
        },
        {
          id: 23,
          info: {
            title: "兩岸屌聲啼不盡, 又互吠叫, 無寧日",
            date: "2021/06/10",
            imgUrl: "https://picsum.photos/200/200",
            pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            context: "地區鬥爭, no offensive, dont ban me, please",
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
            title: "有無可能7月份搞得掂依個apps?",
            date: "2021/08/01",
            imgUrl: "https://picsum.photos/200/200",
            pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            context: "其實都幾複雜，但應該有D無咁弱智的方法去整",
          },
        },
        {
          id: 32,
          info: {
            title: "效能應該差到喊出聲",
            date: "2021/08/05",
            imgUrl: "https://picsum.photos/200/200",
            pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            context: "遲D將sample的json data都放入一個file統一管理",
          },
        },
        {
          id: 33,
          info: {
            title: "有D想食炸雞, 但係健緊身, 要食健康D, bitches!",
            date: "2021/08/10",
            imgUrl: "https://picsum.photos/200/200",
            pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            context: "雞胸肉做得好, 都可以好好味的",
          },
        },
      ],
    },
  ];

  return (
    <>

    {selected == "list" && (
      <MagazineScreenList
      magazineList={MagazineList}
      setNewsScreen={props.setNewsScreen}
      setVideoScreen={props.setVideoScreen}
      handleListToBlog={handleListToBlog}
      />
    )}
    {selected == "blog" && (
      <MagazineBlogScreen
      data={currentMagazine}
      backToList={() => setSelected("list")}
      />
    )}
  </>
    
  );
};

export default MagazineScreen;
