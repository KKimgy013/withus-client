import React, { useEffect } from "react";
import kakao from "../img/kakao.png";
import "../css/KakaoLogin.css";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../utils/url";

export default function KakaoLogin() {
  const navigate = useNavigate();

  useEffect(() => {
    const KAKAO_APP_KEY = "15dc65f260ca6907a6c926ed6fd9046b";

    if (typeof window.Kakao !== "undefined" && !window.Kakao.isInitialized()) {
      window.Kakao.init(KAKAO_APP_KEY);
      console.log("Kakao SDK initialized");
    }
  }, []);

  const handleKakaoLogin = async () => {
    if (typeof window.Kakao !== "undefined" && window.Kakao.Auth) {
      window.Kakao.Auth.authorize({
        redirectUri: `http://${BASE_URL}/api/auth/kakao/callback`,
      });

      try {
        const response = await fetch(
          `http://${BASE_URL}/api/auth/kakao/callback`
        );
        const data = await response.json();
        if (data.accessToken) {
          localStorage.setItem("kakaoToken", data.accessToken);
          navigate("/main");
        }
      } catch (error) {
        console.error("로그인 실패:", error);
        alert("로그인에 실패했습니다.");
      }
    } else {
      console.error("Kakao SDK가 로드되지 않았습니다.");
      alert("Kakao SDK가 로드되지 않았습니다.");
    }
  };

  return (
    <div className="kakao-login-container">
      <button onClick={handleKakaoLogin} className="kakao-login-button">
        <img src={kakao} alt="kakao logo" className="kakao-logo" />
        <div className="kakao-login-text">카카오톡으로 시작하기</div>
      </button>
    </div>
  );
}
