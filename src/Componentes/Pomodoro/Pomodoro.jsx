import { PomodoroApp } from "./PomodoroApp/PomodoroApp";
import { PomodoroInitial } from "./PomodoroApp/PomodoroInitial";

export const Pomodoro = () => {
  return (
    <>
      <div className="h-5/7 flex gap-4 p-4">
        <PomodoroApp />
        <PomodoroInitial />
        <PomodoroApp />
        <PomodoroApp />
      </div>
    </>
  );
};
