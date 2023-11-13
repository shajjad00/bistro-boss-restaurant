import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar></Navbar>

      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
