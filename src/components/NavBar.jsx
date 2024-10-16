import React from "react";
import { MdMoreHoriz } from "react-icons/md";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { MdHomeFilled } from "react-icons/md";
import SearchBar from "./SearchBar";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";

const NavBar = () => {
  return (
    <div className="shadow p-3 z-10 w-full fixed top-0 dark:bg-black bg-white">
      <div className="flex items-center justify-between">
        <div className="flex gap-3 md:gap-6 text-lg md:text-2xl items-center">
          <MdMoreHoriz />
          <div className="flex gap-2 text-lg md:text-2xl">
            <FaChevronLeft />
            <FaChevronRight />
          </div>
          <div className="w-10 h-10 dark:bg-gray-600 bg-gray-300 rounded-full flex items-center justify-center hover:scale-105">
            <a href="/">
              <MdHomeFilled />
            </a>
          </div>
        </div>
        <div className="hidden md:block">
          <SearchBar />
        </div>
        <div className="flex gap-3 md:gap-6 text-lg md:text-2xl justify-center items-center ">
          <IoNotificationsOutline className="hover:scale-105" />
          <FaUsers className="hover:scale-105" />
          <RxAvatar className="text-lg md:text-4xl hover:scale-105" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
