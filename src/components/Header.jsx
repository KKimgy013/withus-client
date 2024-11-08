import React from "react";
import logo from "../img/logo.png";

export default function Header() {
  return (
    <header>
      <div className="header-top">
        <img src={logo} className="logo" alt="logo" />
        <span className="header-title">나와, 볼만한 세상 part2</span>
      </div>
      <div className="main-nav">
        <div className="nav-section">
          <a href="#">달성 현황</a>
          <div className="nav-divider"></div>
          <a href="#"><span>마음이랑</span><br /><span>대화하기</span></a>
          <div className="nav-divider"></div>
          <a href="#">목표 실행</a>
          <div className="nav-divider"></div>
          <a href="#">마이페이지</a>
        </div>

        <div className="right-nav">
        <a href="#">나의 정보</a>
          <a href="#">Log Out</a>
        </div>
      </div>
    </header>
  );
}
