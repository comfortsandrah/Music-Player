import React from "react";
import TrackListing from "../components/TrackListing";
import { SearchResults } from "../components/SearchBar";
import MusicPlayer from "../components/MusicPlayer";

const Home = () => {
  return (
    <section className="h-[90vh] overflow-scroll">
      <SearchResults />
      <h2 className="font-bold text-3xl my-3 p-6">Made for you</h2>
      <TrackListing />
      <MusicPlayer />
    </section>
  );
};

export default Home;
