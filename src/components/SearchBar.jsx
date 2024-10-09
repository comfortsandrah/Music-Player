import React, { useEffect, useState } from "react";
import { PiBrowsersLight } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { useSearchParams } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";
import TrackCard from "./TrackCard";

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputData, setInputData] = useState(searchParams.get("q"));

  const debounced = useDebouncedCallback((value) => {
    setSearchParams({ q: value }), 1000;
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setInputData(value);
    debounced(value);
  };

  return (
    <div>
      <div className="flex border rounded-full justify-between items-center max-w-[620px] mx-auto">
        <CiSearch className="ml-4 text-2xl" />
        <input
          type="text"
          name="songTitle"
          placeholder="Search for artist or song title"
          value={inputData}
          className="p-3 min-w-[550px] outline-none"
          onChange={handleChange}
          aria-label="Search for artist or song title"
        />
        <button type="submit" className="mr-4 text-2xl">
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
        <ul className="flex flex-wrap gap-3">
          {fetchedData.map((track) => (
            <TrackCard
              key={track.id}
              preview={track.preview}
              image={track.album.cover_medium}
              title={track.title}
              artistName={track.artist.name}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default SearchBar;
