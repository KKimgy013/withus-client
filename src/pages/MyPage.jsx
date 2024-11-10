import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import LevelSection from "../components/LevelSection";
import UserInfo from "../components/UserInfo";
import '../css/MyPage.css';

export default function MyPage() {

  const [header, setHeader] = useState("");
  const [mainContent, setMainContent] = useState(null);
  const [footer, setFooter] = useState("");
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const beginnerTasks = [
    { name: "자기소개 글 작성하기", completed: true },
    { name: "밖에 나가서 풍경 찍기", completed: true },
    { name: "5분 명상하기", completed: true },
    { name: "감정일기 1장 작성하기", completed: false },
    { name: "취미 정리하기", completed: false },
    { name: "행복한 글귀 읽기", completed: false },
    { name: "자기소개 글 작성하기", completed: true },
    { name: "밖에 나가서 풍경 찍기", completed: true },
    { name: "5분 명상하기", completed: true },
    { name: "감정일기 1장 작성하기", completed: false },
    { name: "취미 정리하기", completed: false },
    { name: "행복한 글귀 읽기", completed: false },
    { name: "자기소개 글 작성하기", completed: true },
    { name: "밖에 나가서 풍경 찍기", completed: true },
    { name: "5분 명상하기", completed: true },
    { name: "감정일기 1장 작성하기", completed: false },
    { name: "취미 정리하기", completed: false },
    { name: "행복한 글귀 읽기", completed: false },
    { name: "취미 정리하기", completed: false },
    { name: "행복한 글귀 읽기", completed: false },
  ];

  useEffect(() => {
    fetch('/api/mypage')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
            setHeader(data.header);
            setMainContent(data.main);
            setFooter(data.footer);
        })
        .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const openInfo = () => setIsInfoOpen(true); 
  const closeInfo = () => setIsInfoOpen(false);

  return (
    <div className="pageWrapper my-page">
      <Header openInfo={openInfo}/> 
      <header className="header">
        <h1>{header}</h1>
      </header>

        {/* 서버에서 받아온 mainContent가 있을 때만 LevelSection으로 전달 */}
      {/* <main className="mainContent">
        {mainContent ? (
          <LevelSection beginnerTasks={mainContent.tasks} />
        ) : (
          <p>Loading...</p>
        )}
      </main> */}
      <main className="mainContent">
        <LevelSection beginnerTasks={beginnerTasks} />
      </main>

      {/* isInfoOpen 상태에 따라 UserInfo 모달을 렌더링 */}
      {isInfoOpen && <UserInfo closeInfo={closeInfo} />}
    </div>
  );
}
