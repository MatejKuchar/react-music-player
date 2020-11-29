import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = () => {
  return (
    <div>
      <h1>Player</h1>
      <div className="time-control">
        <p>Start time</p>
        <input type="range" />
        <p>End time</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          size="2x"
          className="skip"
          icon={faAngleLeft}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          size="2x"
          className="play"
          icon={faPlay}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          size="2x"
          className="skip-forward"
          icon={faAngleRight}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default Player;
