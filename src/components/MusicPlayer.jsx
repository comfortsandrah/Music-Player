import React, { useEffect, useRef, useState } from "react";
import { IoPauseCircle } from "react-icons/io5";
import { IoMdSkipBackward } from "react-icons/io";
import { TiArrowShuffle } from "react-icons/ti";
import { IoIosPlayCircle } from "react-icons/io";
import { IoMdSkipForward } from "react-icons/io";
import { SlLoop } from "react-icons/sl";
import { useMusicPlayer } from "../Context/MusicPlayerContext";
import VolumeSlider from "./Volume";

const MusicPlayer = () => {
  const { currentTrack, currentTitle, currentArtist, tracks, playTrack } = useMusicPlayer();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);

  // Get the current track index from the tracks list
  const currentTrackIndex = tracks.findIndex((track) => track.preview === currentTrack);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const skipForward = () => {
    let nextIndex;
    if (isShuffle) {
      do {
        nextIndex = Math.floor(Math.random() * tracks.length);
      } while (nextIndex === currentTrackIndex && tracks.length > 1);
    } else {
      nextIndex = (currentTrackIndex + 1) % tracks.length;
    }
    playTrack(tracks[nextIndex].preview, tracks[nextIndex].title, tracks[nextIndex].artist);
    setIsPlaying(true);
  };

  const skipBackward = () => {
    let prevIndex = currentTrackIndex === 0 ? tracks.length - 1 : currentTrackIndex - 1;
    playTrack(tracks[prevIndex].preview, tracks[prevIndex].title, tracks[prevIndex].artist);
    setIsPlaying(true);
  };

  const toggleShuffle = () => {
    setIsShuffle(!isShuffle);
  };

  const toggleLoop = () => {
    setIsLooping(!isLooping);
  };

  const updateProgress = () => {
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    if (duration > 0) {
      setProgress((currentTime / duration) * 100);
    }
  };

  const handleTrackEnd = () => {
    if (isLooping) {
      audioRef.current.play();
    } else {
      skipForward();
    }
  };

  useEffect(() => {
    if (currentTrack) {
      audioRef.current.pause();
      audioRef.current.src = currentTrack;
      audioRef.current.load();
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [currentTrack]);

  return (
    <div className="shadow bottom-0 sticky z-10 bg-white p-4">
      {currentTitle && currentArtist && (
        <div>
          <h3 className="font-semibold text-xl">{currentTitle}</h3>
          <p className="font-base">By {currentArtist.name}</p>
        </div>
      )}
      <div className="flex justify-between items-center max-w-96 mx-auto text-2xl">
        <TiArrowShuffle
          className={`cursor-pointer ${isShuffle ? "text-pink-500" : ""}`}
          onClick={toggleShuffle}
        />
        <div className="flex gap-6 text-2xl items-center">
          <IoMdSkipBackward onClick={skipBackward} className="cursor-pointer" />
          {isPlaying ? (
            <IoPauseCircle onClick={togglePlayPause} className="cursor-pointer" />
          ) : (
            <IoIosPlayCircle onClick={togglePlayPause} className="cursor-pointer" />
          )}
          <IoMdSkipForward onClick={skipForward} className="cursor-pointer" />
        </div>
        <SlLoop
          className={`cursor-pointer ${isLooping ? "text-pink-500" : ""}`}
          onClick={toggleLoop}
          />
        <VolumeSlider/>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4 mb-2">
        <div
          ref={progressBarRef}
          className="bg-pink-500 h-2.5 rounded-full"
          style={{ width: `${progress}%` }}
          ></div>
      </div>
      <audio ref={audioRef} onTimeUpdate={updateProgress} onEnded={handleTrackEnd} />
    </div>
  );
};

export default MusicPlayer;
