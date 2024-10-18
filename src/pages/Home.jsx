import React from "react";
import TrackListing from "../components/TrackListing";
import SearchBar, { SearchResults } from "../components/SearchBar";
import MusicPlayer from "../components/MusicPlayer";

const Home = () => {
  return (
    <section className="mx-auto flex-grow dark:bg-black pt-20 md:pt-10 px-2 md:px-1">
      {/* Search Results */}
      <SearchResults />
      
      {/* Title Section */}
      <h2 className="font-semibold md:font-bold dark:text-white text-xl pt-4 md:text-3xl my-4 md:my-6">
        Made for you
      </h2>
      
      {/* Track Listing */}
      <TrackListing />
      
      {/* Music Player */}
      <MusicPlayer />
    </section>
  );
};

export default Home;
