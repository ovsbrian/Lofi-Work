import { BarSound } from "./BarSound";
import { ImagenMusic } from "./Img";
import { ListChannel } from "./ListChannel/ListChannel";

export const Musica = () => {
  return (
    <>
      <div className="h-2/7 w-72 ">
        <div className="bg-[#DAC0A3] h-full w-full rounded flex p-2 justify-center">
          <ImagenMusic />
          <div className="w-full p-2 flex  items-center">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <span className="font-semibold">Lofi song</span>
                <div className="flex gap-1">
                  <ListChannel />
                </div>
              </div>

              <BarSound />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
