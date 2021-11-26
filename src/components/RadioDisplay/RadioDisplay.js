import React from "react";
import './style.css'


export const RadioDisplay = ({
  toggleDisplay,
  setCountryRadioStations,
  setRadioStationGenre,
  setRadioStations,
}) => {
  const clearAll = () => {
    toggleDisplay();
    setRadioStations([]);
    setCountryRadioStations("");
    setRadioStations("");
  };


  return (
    <div className="radio-player">
      <div>

        <h4 className="radio-player">Enjoy your station</h4>
        <div>
          <audio
            src="https://radio-stream-1.obozrevatel.com/radioec128.mp3"
            controls
            autoplay
            type="audio/m3u"
          >
            radio
          </audio>
        </div>
        
        <button onClick={toggleDisplay} className="button-style">Return</button>
        
      </div>
    </div>
  );
};
