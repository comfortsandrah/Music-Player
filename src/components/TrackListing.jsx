import React, { useEffect, useState } from "react";
import TrackCard from "./TrackCard";
import axios from "axios";

const TrackListing = () => { 
  const url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=eminem"; // Using a proxy to handle CORS issues
  const [artistData, setArtistData] = useState([]);

  const fetchInfo = async () => {
    try {
      const response = await axios.get(url);
      setArtistData(response.data.data); // Ensure you access 'data' array correctly
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="flex flex-wrap mt-3 ml-3">
      {artistData.length > 0 ? (
        artistData.map((track, index) => (
          <TrackCard
            key={index}
            image={track.album.cover_medium}
            title={track.title}
            description={track.artist.name}
          />
        ))
      ) : (
        <p>Loading tracks...</p>
      )}
    </div>
  );
};

export default TrackListing;
