import { CircularProgress } from "@nextui-org/react";
export const PomodoroApp = () => {
  const value = 25;
  return (
    <>
      <div className="bg-lime-900 w-44 h-64 flex flex-col justify-center items-center text-white gap-4  rounded-2xl font-medium">
        <div className=" flex flex-col justify-center items-center w-full">
          <div className="w-full flex justify-between px-3">
            <span>Focus</span>
            <span>02:40</span>
          </div>
          <div>
            <CircularProgress
              classNames={{
                svg: "w-36 h-36 drop-shadow-md ",
                indicator: "stroke-white",
                track: "stroke-white/10",
                value: "text-2xl font-semibold  ",
              }}
              label="x"
              value={value}
              strokeWidth={4}
              showValueLabel={true}
              valueLabel={value + " m"}
            />
          </div>
          <div>
            <span>Cycle 1/6</span>
          </div>
        </div>
      </div>
    </>
  );
};
