import { Button, CircularProgress } from "@nextui-org/react";
import { useEffect, useState } from "react";

export const PomodoroApp = ({ hourAndMinutes, setInitial, info,   }) => {
  const { Break = 5, Focus = 5, Cycles = 1 } = info;
  const [secondsLeft, setSecondsLeft] = useState(Focus * 60);
  const [cyclesLeft, setCyclesLeft] = useState(Cycles);
  const [isPaused, setIsPaused] = useState(false);
  const [isBreakTime, setIsBreakTime] = useState(false);
 
  useEffect(() => {
    let timer;
    if (!isPaused && cyclesLeft > 0) {
      timer = setInterval(() => {
        if (secondsLeft > 0) {
          setSecondsLeft(secondsLeft - 1);
        } else if (isBreakTime) {
          setIsBreakTime(false);
          setSecondsLeft(Focus * 60);
          setCyclesLeft(cyclesLeft - 1);
        } else {
          setIsBreakTime(true);
          setSecondsLeft(Break * 60);
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [secondsLeft, isPaused, cyclesLeft, isBreakTime]);

  const pauseChange = () => setIsPaused(!isPaused);

  const restart = () => setInitial(false);

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes != 0? minutes +':' : ''}${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}${minutes != 0? "m" : "s"}`;
  }

  return (
    <>
      <div className="bg-lime-900 w-44 h-64 flex flex-col justify-center items-center text-white gap-4  rounded-2xl font-medium">
        <div className=" flex flex-col justify-around items-center w-full h-full">
          <div className="w-full flex justify-between px-3">
            <span>{isBreakTime? 'Break' : 'Focus'}</span>
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
              value={formatTime(secondsLeft)}
              strokeWidth={4}
              showValueLabel={true}
              valueLabel={isPaused ? "paused" : formatTime(secondsLeft) }
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
                {isPaused ? "Resume" : "Pause"}
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
