import { NextUIProvider } from "@nextui-org/react";
import { Musica } from "./Componentes/Musica/Musica";
import { ToDo } from "./Componentes/ToDo/ToDo";
import { Pomodoro } from "./Componentes/Pomodoro/Pomodoro";

function App() {
  return (
    <>
      <NextUIProvider>
        <div className="h-screen w-full flex">
          <ToDo />
          <div className="w-7/12 h-full">
            <Pomodoro/>
            <Musica />
          </div>
        </div>
      </NextUIProvider>
    </>
  );
}

export default App;
