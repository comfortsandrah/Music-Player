import React from "react";
import { PiBrowsersLight } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="flex border rounded-full justify-between items-center max-w-[620px] mx-auto">
      <CiSearch className="ml-4 text-2xl" />
      <input
        type="text"
        name="search"
        placeholder="Search for music..."
        className="p-3 min-w-[550px] outline-none"
        aria-label="Search for music"
      />
      <PiBrowsersLight className="mr-4 text-2xl" />
    </div>
  );
};

export default SearchBar;
