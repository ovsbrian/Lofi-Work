import { useState, useRef } from 'react';
import YouTube from 'react-youtube';
import { BarSound } from './BarSound';
import { ListChannel } from './ListChannel/ListChannel';

export const ImagenMusic = () => {
  const [youtubeID, setYoutubeID] = useState('jfKfPfyJRdk');
  const [imgID, setImgID] = useState('0hjOGLFaQa0AAAAd/lofi-girl-lofi');
  const [play, setPlay] = useState(false);
 
  const playerRef = useRef(null);

  const onReady = (event) => {
    playerRef.current = event.target;
    playerRef.current.playVideo();
  };

  
  return (
    <>
      <div className="items-center w-40 h-20">
        <YouTube
          videoId={youtubeID}
          opts={{ playerVars: { autoplay: play ? 1 : 0} }}
          onReady={onReady}
          className='hidden'
        />
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
          <BarSound
            togglePlay={setPlay}
            setYoutubeID={setYoutubeID}
            setImgID={setImgID}
            playerRef={playerRef}
          />
        </div>
      </div>
    </>
  );
};
