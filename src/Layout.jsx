import React from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="">
      <NavBar />
      <div className="flex">

      <SideBar />
      <Outlet />
      </div>
    </div>
  );
};

export default Layout;
