import React, { useEffect } from "react";
import { useMusicPlayer } from "../Context/MusicPlayerContext";

const VoiceControl = () => {
  const { volume, setVolume, currentTrack, playTrack, tracks } =
    useMusicPlayer();

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "en-US"; // Set the language
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    // Start recognition when component mounts
    recognition.start();

    recognition.onresult = (event) => {
      const speechResult =
        event.results[event.resultIndex][0].transcript.toLowerCase();
      console.log("Speech recognized:", speechResult);
      handleVoiceCommand(speechResult.trim());
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };

    // Stop recognition when component unmounts
    return () => {
      recognition.stop();
    };
  }, []);

  // Get the current track index from the tracks list
  const currentTrackIndex = tracks.findIndex(
    (track) => track.preview === currentTrack
  );

  const handleVoiceCommand = (command) => {
    const commandMap = {
      "play": () => {
        if (!currentTrack) {
            playTrack(tracks[0]); // Play the first track if nothing is playing
        } else {
            playTrack(currentTrack);
        }
      },
      "pause": () => playTrack(null),
      "next": () => {
        const currentIndex = tracks.findIndex((track) => track === currentTrack);
        if (currentIndex < tracks.length - 1) playTrack(tracks[currentIndex + 1]);
      },
      "previous": () => {
        const currentIndex = tracks.findIndex((track) => track === currentTrack);
        if (currentIndex > 0) playTrack(tracks[currentIndex - 1]);
      },
      "volume up": () => setVolume(Math.min(volume + 10, 100)),
      "volume down": () => setVolume(Math.max(volume - 10, 0)),
      "mute": () => setVolume(0),
      "unmute": () => setVolume(50),
    };
  
    // Execute the command if it exists in the map
    for (let key in commandMap) {
      if (command.includes(key)) {
        commandMap[key]();
        break;
      }
    }
  };
  

  return (
    <div>
      <p>
        Voice control activated. You can say commands like "play", "pause",
        "next", or "volume up/down".
      </p>
    </div>
  );
};

export default VoiceControl;
