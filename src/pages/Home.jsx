import React from "react";
import TrackListing from "../components/TrackListing";
import SearchBar, { SearchResults } from "../components/SearchBar";
import MusicPlayer from "../components/MusicPlayer";

const Home = () => {
  return (
    <section className="h-[137vh] mx-autoflex-grow">     
      <SearchResults />      
      <h2 className="font-semibold md:font-bold text-xl md:text-3xl my-1 md:my-3 p-2 md:p-6 ml-3">Made for you</h2>      
      <TrackListing />
      <MusicPlayer />
    </section>
  );
};

export default Home;
