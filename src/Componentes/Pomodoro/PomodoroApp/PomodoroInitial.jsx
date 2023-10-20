import { Button } from "@nextui-org/react";
import { PomodoroSettings } from "./PomodoroSettings";
export const PomodoroInitial = () => {
  return (
    <>
      <div className="bg-lime-900 w-44 h-64 flex flex-col justify-center items-center text-white py-2 rounded-2xl font-medium">
        <div className="w-full  flex flex-col justify-center items-center gap-2">
          <div className="w-full flex justify-end px-3">
            <span>02:40</span>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-4">
            <PomodoroSettings title={"Focus"} color={'red-800'}/>
            <PomodoroSettings title={"Break"} color={'lime-900'}/>
            <PomodoroSettings title={"Cycles"} color={'green-800'}/>
          </div>
          <div>
            <Button color="danger">Start</Button>
          </div>
        </div>
      </div>
    </>
  );
};
