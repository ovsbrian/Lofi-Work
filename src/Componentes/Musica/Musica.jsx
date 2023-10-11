import { useState } from "react";
import { BarSound } from "./BarSound";
import { ImagenMusic } from "./Img";
 

export const Musica = () => {
  return (
    <>
      <div className="h-2/7 w-full ">
        <div className="bg-[#DAC0A3] h-full w-full rounded flex p-2 justify-start border border-[#0F2C59] items-center">
          <ImagenMusic />
        </div>
      </div>
    </>
  );
};
