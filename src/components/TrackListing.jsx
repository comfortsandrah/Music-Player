import React, { useEffect, useState } from "react";
import TrackCard from "./TrackCard";
import axios from "axios";
import { useMusicPlayer } from "../Context/MusicPlayerContext";

const TrackListing = () => {
  const url =
    "https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=ada+ehi"; // Using a proxy to handle CORS issues
  const [artistData, setArtistData] = useState([]);
  const {setTracks} = useMusicPlayer();

  const fetchInfo = async () => {
    try {
      const response = await axios.get(url);
      setArtistData(response.data.data); // Ensure you access 'data' array correctly
      setTracks(response.data.data); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
        <div className="grid grid-cols-2 md:flex md:flex-wrap mt-1 md:mt-3 ml-1 md:ml-3 gap-6 md:gap-5 pb-40 dark:bg-black">
      {artistData.length > 0 ? (
        artistData.map((track) => (
          <TrackCard
            key={track.id}
            preview={track.preview}
            image={track.album.cover_medium}
            title={track.title}
            artistName={track.artist.name}
          />
        ))
      ) : (
        <p>Loading tracks...</p>
      )}
    </div>
  );
};

export default TrackListing;
