import React from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";
import { MusicPlayerProvider } from "./Context/MusicPlayerContext";

const Layout = () => {
  return (
    <MusicPlayerProvider>
      <NavBar />
      <div className="flex">
      <SideBar />
      <Outlet />
      </div>
    </MusicPlayerProvider>
  );
};

export default Layout;
