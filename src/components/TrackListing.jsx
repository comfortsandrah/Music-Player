import React from "react";
import TrackCard from "./TrackCard";

const TrackListing = () => {
  const tracks = [
    {
      image: "./music.jpg",
      title: "Comfort's music",
      description: "By Comfort"
    },
    {
      image: "./music.jpg",
      title: "Comfort's music",
      description: "By Comfort"
    },
    {
      image: "./music.jpg",
      title: "Comfort's music",
      description: "By Comfort"
    },
    {
      image: "./music.jpg",
      title: "Comfort's music",
      description: "By Comfort"
    },
    {
      image: "./music.jpg",
      title: "Comfort's music",
      description: "By Comfort"
    },
    {
      image: "./music.jpg",
      title: "Comfort's music",
      description: "By Comfort"
    },
    {
      image: "./music.jpg",
      title: "Comfort's music",
      description: "By Comfort"
    },
    {
      image: "./music.jpg",
      title: "Comfort's music",
      description: "By Comfort"
    },
  ];
  return (
    <div className="flex flex-wrap mt-3 ml-3">
      {tracks.map((track, index) => (
        <TrackCard key={index} {...track} />
      ))}
    </div>
  );
};

export default TrackListing;
