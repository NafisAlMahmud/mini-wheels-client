import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Layouts/Pages/Home/Home/Home";
import Blogs from "../Layouts/Pages/Blogs/Blogs";
import MyToys from "../Layouts/Pages/MyToys/MyToys";
import AddToys from "../Layouts/Pages/AddToys/AddToys";
import AllToys from "../Layouts/Pages/AllToys/AllToys";
import ErrorPage from "../Layouts/Pages/Error/ErrorPages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/myToys",
        element: <MyToys></MyToys>,
      },
      {
        path: "/addToys",
        element: <AddToys></AddToys>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

export default router;
