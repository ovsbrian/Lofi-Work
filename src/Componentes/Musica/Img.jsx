import { useState } from "react";
import { BarSound } from "./BarSound";
import { ListChannel } from "./ListChannel/ListChannel";

export const ImagenMusic = () => {
  const [youtubeID, setYoutubeID] = useState("jfKfPfyJRdk");
  const [imgID, setImgID] = useState("0hjOGLFaQa0AAAAd/lofi-girl-lofi");

  const [play, setPlay] = useState(false);
  const togglePlay = (playState) => {
    setPlay(playState);
  };
  return (
    <>
      <div className=" items-center w-40 h-20">
        <iframe
          className="video pointer-events-none select-none w-full h-full hidden"
          title="Youtube player"
          src={`https://youtube.com/embed/${youtubeID}?autoplay=${
            play ? 1 : 0
          }&modestbranding=1&controls=0&showinfo=0`}
        ></iframe>
        <img
          src={`https://media.tenor.com/${imgID}.gif`}
          className="w-40 h-20 rounded-sm"
        />
      </div>
      <div className="flex flex-col w-full items-center justify-center gap-4">
        <div className="flex flex-col items-center gap-1">
          <span className="font-bold">Lofi song</span>
          <ListChannel setYoutubeID={setYoutubeID} setImgID={setImgID} />
        </div>
        <div className="flex gap-2">
          <BarSound togglePlay={togglePlay} setYoutubeID={setYoutubeID} setImgID={setImgID} />
        </div>
      </div>
    </>
  );
};
