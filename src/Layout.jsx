import React from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";
import { MusicPlayerProvider } from "./Context/MusicPlayerContext";
import SearchBar from "./components/SearchBar";

const Layout = () => {
  return (
    <MusicPlayerProvider>
      <NavBar />
      <div className="md:hidden m-2 mt-16 bg-white mx-auto w-full rounded-full fixed ">
      <SearchBar/>
      </div>
      <div>
        <Outlet />
      </div>
    </MusicPlayerProvider>
  );
};

export default Layout;
