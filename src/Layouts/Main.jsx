import { Outlet } from "react-router-dom";
import NavBar from "./Pages/Shared/NavBar/NavBar";
import Footer from "./Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="lg:px-28">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
