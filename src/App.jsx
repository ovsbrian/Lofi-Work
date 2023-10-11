import { NextUIProvider } from "@nextui-org/react";
import { Musica } from "./Componentes/Musica/Musica";
 
import { Pomodoro } from "./Componentes/Pomodoro/Pomodoro";
import { ToDo } from "./Componentes/ToDo/ToDo";

function App() {
  return (
    <>
      <NextUIProvider>
        <main className="h-screen w-full flex bg-[#EAD7BB]">
          <ToDo />
          <div className="w-7/12 h-full flex flex-col justify-between ">
            <Pomodoro />
            <div className="flex w-full justify-end"> 
              <Musica />
            </div>
          </div>
        </main>
      </NextUIProvider>
    </>
  );
}

export default App;
