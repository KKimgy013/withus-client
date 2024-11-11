import React from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routers/routes";


function App() {
  return (
    <div className="app">
      <main className="main">
        <RouterProvider router={routes} />
      </main>
    </div>
  );
}

export default App;
