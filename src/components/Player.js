import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  const { audio } = currentSong;
  const audioRef = useRef(null);

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  //Event Handlers
  const playSongHandler = () => {
    if (isPlaying) {
      setIsPlaying(!isPlaying);
      audioRef.current.pause();
    } else {
      setIsPlaying(!isPlaying);
      audioRef.current.play();
    }
  };

  const timeUpdateHandler = (e) => {
    let currentTime = e.target.currentTime;
    let duration = e.target.duration;

    setSongInfo({ ...songInfo, currentTime, duration });
  };

  const dragHandler = (e) => {
    setSongInfo({ ...songInfo, currentTime: e.target.value });
    audioRef.current.currentTime = e.target.value;
  };

  // Functions

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          onChange={dragHandler}
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime}
          type="range"
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          size="2x"
          className="skip"
          icon={faAngleLeft}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          onClick={playSongHandler}
          size="2x"
          className="play"
          icon={isPlaying ? faPause : faPlay}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          size="2x"
          className="skip-forward"
          icon={faAngleRight}
        ></FontAwesomeIcon>
      </div>
      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={audio}
      ></audio>
    </div>
  );
};

export default Player;
