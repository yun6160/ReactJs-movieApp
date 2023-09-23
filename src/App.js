import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//영화 전체를 보여주지 않고
//router를 render 한다
//router는 URL을 보고있는 component고
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movie/:id", //:id 로 변수명을 정해주면 param을 받을때도 id로 받는다 중요.
    element: <Detail />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
