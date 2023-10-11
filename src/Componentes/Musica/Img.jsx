import { useState } from "react";
import { BarSound } from "./BarSound";
import { ListChannel } from "./ListChannel/ListChannel";

export const ImagenMusic = () => {
  const [youtubeID, setYoutubeID] = useState("jfKfPfyJRdk");
  const [imgID, setImgID] = useState("https://media.tenor.com/0hjOGLFaQa0AAAAd/lofi-girl-lofi.gif");

  const [play, setPlay] = useState(false);
  const togglePlay = (playState) => {
    setPlay(playState);
  };
  return (
    <>
      <div className="flex gap-4">
        <div className=" items-center w-32 h-20">
          <iframe
            className="video pointer-events-none select-none w-full h-full hidden"
            title="Youtube player"
            src={`https://youtube.com/embed/${youtubeID}?autoplay=${
              play ? 1 : 0
            }&modestbranding=1&controls=0&showinfo=0`}
          ></iframe>
          <img
            src={imgID}
            className="w-32 h-20 rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-semibold">Lofi song</span>
          <ListChannel setYoutubeID={setYoutubeID} setImgID={setImgID}/>
          <BarSound togglePlay={togglePlay} />
        </div>
      </div>
    </>
  );
};
