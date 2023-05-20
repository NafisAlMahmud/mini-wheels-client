import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Layouts/Pages/Home/Home/Home";
import Blogs from "../Layouts/Pages/Blogs/Blogs";
import MyToys from "../Layouts/Pages/MyToys/MyToys";
import AddToys from "../Layouts/Pages/AddToys/AddToys";
import AllToys from "../Layouts/Pages/AllToys/AllToys";
import ErrorPage from "../Layouts/Pages/Error/ErrorPages";
import Login from "../Layouts/Pages/Login/Login";
import Signup from "../Layouts/Pages/Signup/Signup";
import UpdateToys from "../Layouts/Pages/UpdateToys/UpdateToys";
import AllSingleToys from "../Layouts/Pages/AllSingleToys/AllSingleToys";

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
        loader: () => fetch("http://localhost:5000/addToys"),
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
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "toys/:id",
        element: <UpdateToys></UpdateToys>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/toys/${params.id}`),
      },
      {
        path: "/singleToys/:id",
        element: <AllSingleToys></AllSingleToys>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/singleToys/${params.id}`),
      },
    ],
  },
]);

export default router;
