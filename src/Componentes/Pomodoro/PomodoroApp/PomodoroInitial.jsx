import { Button } from "@nextui-org/react";
import { PomodoroSettings } from "./PomodoroSettings";
import { useEffect, useState } from "react";

export const PomodoroInitial = ({ hourAndMinutes, setInitial, setUserSettings }) => {
  const [settings, setSettings] = useState({})

  const manejarCambioContador = (nombre, valor) => {
    setSettings(prevContadores => ({ ...prevContadores, [nombre]: valor }));
 
  };

  useEffect(() => {
    
    setUserSettings(settings)
  }, [settings]); // no cambia la primera vez, es decir, con default


  return (
    <>
      <div className="bg-lime-900 w-44 h-64 flex flex-col justify-center items-center text-white py-2 rounded-2xl font-medium">
        <div className="w-full  flex flex-col h-full gap-2">
          <div className="w-full flex justify-end px-3">
            <span>{hourAndMinutes}</span>
          </div>
          <div className="flex flex-col justify-between h-full items-center mt-2">
            <div className="w-full flex flex-col justify-center items-center gap-4">
              <PomodoroSettings title={"Focus"} color={"red-800"}  onChange={manejarCambioContador}/>
              <PomodoroSettings title={"Break"} color={"lime-900"} onChange={manejarCambioContador}/>
              <PomodoroSettings
                title={"Cycles"}
                color={"green-800"}
                onChange={manejarCambioContador}
                cycle={true}
              />
            </div>
            <div className="w-full px-2">
              <Button
                color="danger"
                size="md"
                className="w-full"
                onClick={() => setInitial(true)}
              >
                Start
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
