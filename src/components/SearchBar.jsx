import React, { useEffect, useState } from "react";
import { PiBrowsersLight } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { useSearchParams } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";
import TrackCard from "./TrackCard";

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputData, setInputData] = useState(searchParams.get("q") ?? "");

  const debounced = useDebouncedCallback((value) => {
    setSearchParams({ q: value }), 1000;
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setInputData(value);
    debounced(value);
  };

  return (
    <div className="  dark:bg-black  p-4 md:p-0 ">
      <div className="flex border  mx-auto dark:bg-gray-700 dark:text-white rounded-full justify-between items-center md:max-w-[620px]">
        <CiSearch className="md:ml-4 ml-2 text-lg md:text-2xl" />
        <input
          type="text"
          name="songTitle"
          placeholder="Search for artist or song title"
          value={inputData}
          className="p-1 md:p-3 md:min-w-[550px] outline-none text-sm  md:font-normal dark:bg-gray-700 dark:text-white"
          onChange={handleChange}
          aria-label="Search for artist or song title"
          />
        <button type="submit" className="mr-2 md:mr-4 text-lg md:text-2xl">
          <PiBrowsersLight />
        </button>
      </div>
      </div>
  );
};

export const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [fetchedData, setFetchedData] = useState([]);
  const [fetchErr, setFetchErr] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (queryString) => {
    if (!queryString) {
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${queryString}`
      );
      const data = await res.json();
      if (res.status === 200) {
        setFetchedData(data.data);
      } else {
        const error = `Error: ${res.status} ${res.statusText}`;
        setFetchErr(error);
      }
    } catch (err) {
      setFetchErr(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(searchParams.get("q"));
  }, [searchParams]);
  return (
    <>
      {loading && <div>Loading...</div>}
      {fetchErr && <div className="text-red-500">{fetchErr}</div>}
      {fetchedData.length > 0 && (
        <div className="grid grid-cols-2 md:flex md:flex-wrap mt-1 md:mt-3 ml-1 md:ml-3 gap-6 md:gap-5">
          {fetchedData.map((track) => (
            <TrackCard
              key={track.id}
              preview={track.preview}
              image={track.album.cover_medium}
              title={track.title}
              artistName={track.artist.name}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default SearchBar;
