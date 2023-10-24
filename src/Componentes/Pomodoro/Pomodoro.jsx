import { useEffect, useState } from "react";
import { PomodoroApp } from "./PomodoroApp/PomodoroApp";
import { PomodoroInitial } from "./PomodoroApp/PomodoroInitial";

export const Pomodoro = () => {
  const [hourAndMinutes, setHourAndMinutes] = useState('');

  useEffect(() => {
    const updateHourAndMinutes = () => {
      const date = new Date();
      const newHourAndMinutes = date.getHours() + ':' + date.getMinutes();
      setHourAndMinutes(newHourAndMinutes);
    };
  
    // Llama a la función una vez al cargar el componente
    updateHourAndMinutes();
  
    // Calcula cuánto tiempo falta para el próximo cambio de minuto
    const timeToNextMinute = 60 - new Date().getSeconds();
  
    // Establece un intervalo para actualizar la hora en el próximo cambio de minuto
    const timeoutId = setTimeout(() => {
      updateHourAndMinutes();
      // Establece un intervalo para actualizar la hora cada minuto después del primer cambio de minuto
      const intervalId = setInterval(updateHourAndMinutes, 60000);
      // Limpia el intervalo al desmontar el componente
      return () => clearInterval(intervalId);
    }, timeToNextMinute * 1000);
  
    // Limpia el timeout al desmontar el componente
    return () => clearTimeout(timeoutId);
  }, []);
  
  
  return (
    <>
      <div className="h-5/7 flex gap-4 p-4 select-none ">
        <PomodoroApp hourAndMinutes={hourAndMinutes} />
        <PomodoroInitial hourAndMinutes={hourAndMinutes} />
      </div>
    </>
  );
};
