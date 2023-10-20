import { useState } from "react";

export const PomodoroSettings = ({ title, color }) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="gap-1 items-end flex w-40   justify-between  ">
        <div>
          <span className="text-2xl">{title}</span>
        </div>
        <div
          className={`flex w-full max-w-[80px] border border-${color}  rounded-2xl text-lg font-semibold justify-between`}
        >
          <button
            className={`w-5 px-1 `}
            onClick={() => {
              count != 0 ? setCount(count - 1) : "";
            }}
          >
            -
          </button>
          <div className="flex gap-1">
            <label>{count}</label>
            <label>m</label>
          </div>
          <button className={`w-5 px-1 `} onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>
      </div>
    </>
  );
};
