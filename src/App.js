import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navibar from "./components/Navibar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: `${process.env.PUBLIC_URL}/`,
    element: <Home />,
  },
  {
    path: `${process.env.PUBLIC_URL}/movie/:id`, //:id 로 변수명을 정해주면 param을 받을때도 id로 받는다 중요.
    element: <Detail />,
  },
]);

function App() {
  return (
    <div>
      <Navibar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
