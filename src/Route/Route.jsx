import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Pages/MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default Route;
