import React, { useEffect, useState } from "react";
import { Howler } from "howler";
import { FaVolumeHigh, FaVolumeLow, FaVolumeXmark } from "react-icons/fa6";

const VolumeSlider = () => {
  const [volume, setVolume] = useState(10);
  const [isDragging, setIsDragging] = useState(false);

  
  useEffect(() => {
    Howler.volume(volume / 100);
  }, [volume]);


  const handleChange = (e) => {
    setVolume(Number(e.target.value));
  };
  return (
    <div className="flex gap-x-2 items-center">
      {volume === 0 && <FaVolumeXmark />}
      {volume < 50 && volume > 0 && <FaVolumeLow />}
      {volume >= 50 && <FaVolumeHigh />}
      <div className="w-36 h-2 bg-slate-300 rounded-xl">
        <div
          className="bg-pink-500 h-2 rounded-full"
          style={{ width: `${volume}%` }}
        >
          <input
            type="range"
            min={0}
            max={100}
            value={volume}
            onChange={handleChange}
            className="cursor-pointer w-full absolute top-0 left-0 opacity-0.9"
          />
        </div>
      </div>
    </div>
  );
};

export default VolumeSlider;
