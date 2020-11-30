import React, { useState } from "react";

import "./styles/app.scss";
import data from "./data";

import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[1]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song isPlaying={isPlaying} currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
      <Library songs={songs} />
    </div>
  );
}

export default App;
