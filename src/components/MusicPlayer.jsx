import React, { useRef, useState } from "react";
import { IoPauseCircle } from "react-icons/io5";
import {  IoMdSkipBackward } from "react-icons/io";
import { TiArrowShuffle } from "react-icons/ti";
import { IoIosPlayCircle } from "react-icons/io";
import { IoMdSkipForward } from "react-icons/io";
import { SlLoop } from "react-icons/sl";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="shadow bottom-0 sticky z-10 bg-white p-4">
      <div className="flex justify-between items-center max-w-96 mx-auto text-4xl">
        <TiArrowShuffle />
        <div className="flex gap-6 text-4xl items-center">
          <IoMdSkipBackward />
          {isPlaying ? (
            <IoPauseCircle onClick={togglePlayPause} />
          ) : (
            <IoIosPlayCircle onClick={togglePlayPause} />
          )}
          <IoMdSkipForward />
        </div>
        <SlLoop />
      </div>
      <audio ref={audioRef} src=""></audio>
    </div>
  );
};

export default MusicPlayer;
