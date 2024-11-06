// import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage.jsx";
//import ChatPage from "../pages/ChatPage.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },

]);

export default routes;
