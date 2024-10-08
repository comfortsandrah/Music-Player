import React from "react";
import { BiLibrary } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";

const SideBar = () => {
  return (
    <div className="flex flex-col shadow h-[90vh] pt-4 items-center max-w-[90px] gap-4">
      <div className="group flex">
        <BiLibrary
          className="text-4xl cursor-pointer hover:text-pink-500 relative transition duration-300"
          aria-label="Library"
        />
        <p className="invisible group-hover:visible absolute left-20 text-black bg-gray-200 p-3 rounded-xl ">
          Expand your Library
        </p>
      </div>

      <div className="group w-12 h-14 bg-gradient-to-br from-pink-500 to-pink-50 opacity-80 rounded-xl flex justify-center items-center cursor-pointer hover:opacity-100 transition duration-300">
        <FaHeart
          className="text-2xl opacity-90 text-white relative"
          aria-label="Favorites"
        />
        <p className="invisible group-hover:visible absolute left-20 p-3 bg-gray-200 rounded-xl text-black">Liked songs</p>
      </div>

      <div className="group relative w-12 h-14 bg-gradient-to-br from-pink-500 to-pink-50 opacity-80 rounded-xl flex justify-center items-center cursor-pointer hover:opacity-100 transition duration-300">
        <FaBookmark
          className="text-2xl opacity-90 text-white"
          aria-label="Bookmarks"
        />
        <p className="invisible group-hover:visible absolute left-20 p-3  bg-gray-200 rounded-xl text-black">Your Episode</p>
      </div>
    </div>
  );
};

export default SideBar;
