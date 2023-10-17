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

export const BarSound = ({ togglePlay, setYoutubeID, setImgID, playerRef }) => {
  const [pauseState, setPauseState] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [volume, setVolume] = useState(100);

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
    setVolume(100)
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
    setVolume(100)
  };

  const onVolumeChange = (event) => {
    playerRef.current.setVolume(volume - 1);
    setVolume(event.target.value);
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
        {volume > 0 && volume < 50 ? (
          <Volume1 />
        ) : volume > 50 ? (
          <Volume2 />
        ) : (
          <VolumeX />
        )}
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
