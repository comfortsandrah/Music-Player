import React, { useEffect, useRef } from "react";
import { FaVolumeHigh, FaVolumeLow, FaVolumeXmark } from "react-icons/fa6";
import { useMusicPlayer } from "../Context/MusicPlayerContext";

const VolumeSlider = () => {
  const { volume, setVolume } = useMusicPlayer(); // Initial volume set to 50 for a mid-point
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      // audioRef.current.volume(volume/100);
    }
  }, [volume]);

  const handleChange = (e) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
  };

  return (
    <div className="flex gap-x-2 items-center">
      {volume === 0 && <FaVolumeXmark />}
      {volume > 0 && volume < 50 && <FaVolumeLow />}
      {volume >= 50 && <FaVolumeHigh />}
      <div className="w-16 md:w-36 h-2 bg-slate-300 rounded-xl relative">
        <div
          className="bg-pink-500 h-2 rounded-full"
          style={{ width: `${volume}%` }}
        ></div>
        <input
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={handleChange}
          className="cursor-pointer md:w-full absolute top-0 left-0 opacity-0"
        />
      </div>
    </div>
  );
};

export default VolumeSlider;
