import React from "react";

import "./styles/app.scss";

import Song from "./components/Song.js";
import Player from "./components/Player.js";

import data from "./util";

function App() {
  return (
    <div className="App">
      <Song></Song>
      <Player></Player>
      <h1>Music player</h1>
    </div>
  );
}

export default App;
