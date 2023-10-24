import { Button, CircularProgress } from "@nextui-org/react";
import { useState } from "react";

export const PomodoroApp = ({ hourAndMinutes, setInitial, info,   }) => {
  const [pause, setPause] = useState(false);
  const {Break = 5, Focus  = 5, Cycles = 1} = info
  const value = Focus;

  const pauseChange = () => {
    setPause(!pause);
    console.log(focus)
  };

  const restart = () => {

    setInitial(false)
    
  }

  return (
    <>
      <div className="bg-lime-900 w-44 h-64 flex flex-col justify-center items-center text-white gap-4  rounded-2xl font-medium">
        <div className=" flex flex-col justify-around items-center w-full h-full">
          <div className="w-full flex justify-between px-3">
            <span>Focus</span>
            <span>{hourAndMinutes}</span>
          </div>
          <div>
            <CircularProgress
              classNames={{
                svg: "w-36 h-36 drop-shadow-md ",
                indicator: "stroke-white",
                track: "stroke-white/10",
                value: "text-2xl font-semibold  ",
              }}
              value={value}
              strokeWidth={4}
              showValueLabel={true}
              valueLabel={pause ? "paused" : value + "m"}
            />
          </div>
          <div className="flex flex-col gap-1 items-center justify-center">
            <div className="flex gap-1 w-full">
              <Button
                size="sm"
                color="success"
                className="font-semibold w-16"
                onClick={pauseChange}
              >
                {pause ? "Resume" : "Pause"}
              </Button>
              <Button
                size="sm"
                color="warning"
                className="font-semibold w-16"
                onClick={() => restart()}
              >
                Restart
              </Button>
            </div>
            <span>Cycle 1/{Cycles}</span>
          </div>
        </div>
      </div>
    </>
  );
};
