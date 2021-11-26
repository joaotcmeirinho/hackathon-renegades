export const RadioDisplay = ({ toggleDisplay }) => {
  return (
    <div>
      <h4>RadioDisplay</h4>
      <button onClick={toggleDisplay}>Back</button>
      <div>
            <audio src="https://radio-stream-1.obozrevatel.com/radioec128.mp3" controls autoplay type="audio/m3u">radio</audio>
            radio test
        </div>
    </div>
  );

};

