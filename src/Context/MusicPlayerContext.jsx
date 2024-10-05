import { createContext, useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";

// MusicPlayerContext.js

export const MusicPlayerContext = createContext();

export const MusicPlayerProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [currentTitle, setCurrentTitle] = useState(null);
  const [currentArtist, setCurrentArtist] = useState(null);
  const [tracks, setTracks] = useState([]);
  // const navigate = useNavigate();

  const playTrack = (track, title, artist) => {
    if (currentTrack === track) {
      setCurrentTrack(null);
      setCurrentTitle("");
      setCurrentArtist("");
      // navigate("/");
    } else {
      setCurrentTrack(track);
      setCurrentTitle(title);
      setCurrentArtist(artist);
      // navigate(`/?q = ${track}`);
    }
  };

  return (
    <MusicPlayerContext.Provider
      value={{ currentTrack,currentTitle,currentArtist, playTrack, tracks, setTracks }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
};

export const useMusicPlayer = () => {
  const context = useContext(MusicPlayerContext);
  if (!context) throw new Error(`MusicPlayer provider is not available`);
  return context;
};
