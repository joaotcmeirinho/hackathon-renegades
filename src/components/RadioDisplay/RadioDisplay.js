import React from "react";

export const RadioDisplay = ({ toggleDisplay }) => {
  return (
    <div className="radio-player">
      <div>
        <h4>Enjoy your station</h4>
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
        <button onClick={toggleDisplay}>Return</button>
      </div>
    </div>
  );
};
