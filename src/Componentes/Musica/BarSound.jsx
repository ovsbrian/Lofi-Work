import { Pause, Play, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { useState } from "react";

export const BarSound = ({ togglePlay }) => {
  const [pauseState, setPauseState] = useState(true);

  function pauseResume() {
    setPauseState(!pauseState);
    togglePlay(!pauseState);
  }

  return (
    <>
      <div className="flex gap-2 items-center select-none">
        <SkipBack />
        <span
          className="cursor-pointer "
          onClick={() => {
            pauseResume();
          }}
        >
          {pauseState == false ? <Play /> : <Pause />}
        </span>
        <SkipForward />
        <Volume2 />
      </div>
    </>
  );
};
