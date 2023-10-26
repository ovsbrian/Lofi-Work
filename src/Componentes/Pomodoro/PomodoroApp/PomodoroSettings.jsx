import { useEffect, useState } from "react";

export const PomodoroSettings = ({ title, color, cycle, onChange }) => {
  const [count, setCount] = useState(5);
  const [countCycle, setCountCycle] = useState(1);

  const [cycles, setCycles] = useState(false);

  useEffect(() => {
    if (cycle) {
      setCycles(true);
    }
  }, [cycle]);

  const incrementar = () => {
    if (cycle) {
      const nuevoValor = countCycle + 1;
      setCountCycle(nuevoValor);
      onChange(title, nuevoValor);
    } else {
      const nuevoValor = count + 5;
      setCount(nuevoValor);
      onChange(title, nuevoValor);
    }
  };

  const decrementar = () => {
    if (count != 5 && !cycles) {
      const nuevoValor = count - 5;
      setCount(nuevoValor);
      onChange(title, nuevoValor);
    } else {
      if (countCycle != 1 && cycles) {
        const nuevoValor = countCycle - 1;
        setCountCycle(nuevoValor);
        onChange(title, nuevoValor);
      }
    }
  };

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
              decrementar();
            }}
          >
            -
          </button>
          <div className="flex gap-1">
            <label>{cycle ? countCycle : count}</label>
            <label>{cycle ? '' : "m"}</label>
          </div>
          <button className={`w-5 px-1 `} onClick={() => incrementar()}>
            +
          </button>
        </div>
      </div>
    </>
  );
};
