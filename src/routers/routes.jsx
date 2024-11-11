import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage.jsx";
import MainPage from "../pages/MainPage.jsx";
import MyPage from "../pages/MyPage.jsx";
import ChatPage from "../pages/ChatPage.jsx";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/main",
    element: <MainPage />,
  },
  {
    path: "/api/mypage",
    element: <MyPage />,
  },
  {
    path: "/api/chat",
    element: <ChatPage />,
    
  },
]);
export default routes;