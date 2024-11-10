import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import KakaoLogin from "../components/KakaoLogin";

function LoginPage() {
  return (
    <div>
      <div className="login-page">
        <Header />
      </div>
      <div>
        <KakaoLogin />
      </div>{" "}
    </div>
  );
}

export default LoginPage;
