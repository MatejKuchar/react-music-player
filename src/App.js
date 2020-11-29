import React from "react";
import Song from "./components/Song.js";
import Player from "./components/Player.js";

function App() {
  return (
    <div className="App">
      <h1>Music player</h1>
      <Player></Player>
      <Song></Song>
    </div>
  );
}

export default App;
