import React, {useState} from "react";
import logo from "../img/logo.png";
import "../css/Header.css";
import UserInfo from "./UserInfo"; // UserInfo 컴포넌트 임포트

export default function Header() {
  const [isUserInfoVisible, setIsUserInfoVisible] = useState(false);

  // UserInfo 표시 여부를 토글하는 함수
  const toggleUserInfo = () => {
    setIsUserInfoVisible(!isUserInfoVisible);
  };

  // 서버에 요청을 보내고 응답을 받아 마이페이지로 이동
  const navigateToMyPage = async (e) => {
    e.preventDefault();

    try {
      // 서버에 마이페이지 이동 요청
      const response = await fetch("/navigate-to-mypage", { method: "GET" });
      
      if (response.ok) {
        // 응답이 성공적일 때 마이페이지로 이동
        window.location.href = "/api/mypage";
      } else {
        console.error("Failed to navigate to MyPage");
      }
    } catch (error) {
      console.error("Error occurred while navigating to MyPage:", error);
    }
  };

  return (
    <>
      <header>
      <div className="header-top">
        <img src={logo} className="logo" alt="logo" />
        <span className="header-title">나와, 볼만한 세상 part2</span>
      </div>
      <div className="main-nav">
        <div className="nav-section">
          <a href="#" id="main-hover">
            달성 현황
          </a>
          <div className="nav-divider"></div>
          <a href="#" id="chat-hover">
            <span>마음이랑</span>
            <br />
            <span>대화하기</span>
          </a>
          <div className="nav-divider"></div>
          <a href="#" id="exe-hover">목표 실행</a>
          <div className="nav-divider"></div>
          {/* 마이페이지 클릭 시 서버에 요청 보내기 */}
          <a href="#" id="mypage-hover" onClick={navigateToMyPage}>마이페이지</a>
          <div className="nav-divider"></div>
        </div>

        <div className="right-nav">
          {/* "나의 정보" 클릭 시 toggleUserInfo 함수 호출 */}
          <a href="#" onClick={(e) => { e.preventDefault(); toggleUserInfo(); }}>나의 정보</a>
          <a href="#">Log Out</a>
        </div>
      </div>
      </header>

      {/* 화면 최상단에 고정된 UserInfo 모달 */}
      {isUserInfoVisible && (
        <div className="userInfoContainer">
          <UserInfo closeInfo={() => setIsUserInfoVisible(false)} />
        </div>
      )}
    </>
  );
}
