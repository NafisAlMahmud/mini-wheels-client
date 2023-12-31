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
import PrivetRoutes from "../PrivateRoutes/PrivetRoutes";

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
        loader: () =>
          fetch("https://mini-wheels-server-nafisalmahmud.vercel.app/addToys"),
      },
      {
        path: "/myToys",
        element: <MyToys></MyToys>,
      },
      {
        path: "/addToys",
        element: (
          <PrivetRoutes>
            <AddToys></AddToys>
          </PrivetRoutes>
        ),
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
          fetch(
            `https://mini-wheels-server-nafisalmahmud.vercel.app/toys/${params.id}`
          ),
      },
      {
        path: "/singleToys/:id",
        element: (
          <PrivetRoutes>
            <AllSingleToys></AllSingleToys>
          </PrivetRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://mini-wheels-server-nafisalmahmud.vercel.app/singleToys/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
