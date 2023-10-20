import {
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Volume1,
  Volume2,
  VolumeX,
} from "lucide-react";
import { useState } from "react";
import { videosLofi } from "./ListChannel/ListMusic";
import { cambiarCanal, pauseResume } from "./FuncionesMusic";

export const BarSound = ({
  togglePlay,
  setYoutubeID,
  setImgID,
  playerRef,
  volume,
  setVolume,
}) => {
  const [pauseState, setPauseState] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const siguienteCanal = () => {
    cambiarCanal(
      "siguiente",
      currentIndex,
      videosLofi,
      setCurrentIndex,
      setYoutubeID,
      setImgID
    );
    playerRef.current.playVideo();
    togglePlay(true);
    setVolume(10);
  
   
  };

  const anteriorCanal = () => {
    cambiarCanal(
      "anterior",
      currentIndex,
      videosLofi,
      setCurrentIndex,
      setYoutubeID,
      setImgID
    );
    playerRef.current.playVideo();
    togglePlay(true);
    setVolume(10);
 
  };

  const onVolumeChange = (event) => {
    playerRef.current.unMute();
    playerRef.current.setVolume(volume - 1);
    setVolume(event.target.value);
  };

  const mutear = (volume) => {
    if (volume > 0) {
      playerRef.current.mute();
      setVolume(0);
    } else {
      playerRef.current.unMute();
      setVolume(10);
      playerRef.current.setVolume(10) 
    }
  };

  return (
    <>
      <div className="flex gap-2 items-center select-none">
        <span
          className="cursor-pointer hover:scale-95"
          onClick={() => anteriorCanal()}
        >
          <SkipBack />
        </span>
        <span
          className="cursor-pointer hover:scale-95"
          onClick={() => {
            pauseResume(pauseState, setPauseState, togglePlay);
            if (pauseState) {
              playerRef.current.pauseVideo();
            } else {
              playerRef.current.playVideo();
            }
          }}
        >
          {pauseState == false ? <Play /> : <Pause />}
        </span>
        <span
          className="cursor-pointer hover:scale-95 hover:opacity-95"
          onClick={() => {
            siguienteCanal();
          }}
        >
          <SkipForward />
        </span>
        <button onClick={() => mutear(volume)}>
          {volume > 0 && volume < 50 ? (
            <Volume1 />
          ) : volume > 50 ? (
            <Volume2 />
          ) : (
            <VolumeX />
          )}
        </button>
        <input
          className="slider bg-[#BCA37F] "
          type="range"
          min="0"
          max="100"
          value={volume}
          onInput={onVolumeChange}
        />
      </div>
    </>
  );
};
