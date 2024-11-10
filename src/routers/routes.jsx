import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage.jsx";
import MainPage from "../pages/MainPage.jsx";
import MyPage from "../pages/MyPage.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/api/main",
    element: <MainPage />,
  },
  {
    path: "/api/mypage",
    element: <MyPage />,
  },
]);

export default routes;
