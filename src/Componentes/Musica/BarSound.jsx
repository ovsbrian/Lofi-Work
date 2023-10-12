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



 


export const BarSound = ({ togglePlay, setYoutubeID, setImgID }) => {
  const [pauseState, setPauseState] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const siguienteCanal = () => {
    if (currentIndex < videosLofi.length + 1) {
      setCurrentIndex(currentIndex + 1);
      const videoActual = videosLofi[currentIndex];

      
      localStorage.setItem( 'nombrepista', videoActual.nameRadio)
      setYoutubeID(videoActual.radioID);
      setImgID(videoActual.setImgID);


    }
  };

  function pauseResume() {
    setPauseState(!pauseState);
    togglePlay(!pauseState);
  }
  const anteriorCanal = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      const videoActual = videosLofi[currentIndex];
      localStorage.setItem( 'nombrepista', videoActual.nameRadio)
      setYoutubeID(videoActual.radioID);
      setImgID(videoActual.setImgID);
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
            pauseResume();
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
