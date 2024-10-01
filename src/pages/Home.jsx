import React from "react";
import TrackCard from "../components/TrackCard";
import TrackListing from "../components/TrackListing";
import { SearchResults } from "../components/SearchBar";

const Home = () => {
  return (
    <section className="h-[90vh] overflow-scroll">
      <SearchResults />
      <TrackListing />
    </section>
  );
};

export default Home;
