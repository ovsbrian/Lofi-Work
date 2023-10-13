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
 
export const BarSound = ({ togglePlay, setYoutubeID, setImgID }) => {
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
       
        <VolumeX />
        <Volume1 />
        <Volume2 />
      </div>
    </>
  );
};
