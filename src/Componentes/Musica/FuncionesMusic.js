export const cambiarCanal = (direccion, currentIndex, videosLofi, setCurrentIndex, setYoutubeID, setImgID) => {
    if (
      (direccion === "siguiente" && currentIndex < videosLofi.length + 1) ||
      (direccion === "anterior" && currentIndex > 0)
    ) {
      const nuevoIndice =
        direccion === "siguiente" ? currentIndex + 1 : currentIndex - 1;
      setCurrentIndex(nuevoIndice);
      
      const videoActual = videosLofi[nuevoIndice];
      localStorage.setItem("nombrepista", videoActual.nameRadio);
      setYoutubeID(videoActual.radioID);
      setImgID(videoActual.setImgID);
    }
  };
  
  export const pauseResume = (pauseState, setPauseState, togglePlay) => {
    setPauseState(!pauseState);
    togglePlay(!pauseState);
  };