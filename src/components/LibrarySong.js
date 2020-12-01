import React from "react";

const LibrarySong = ({ song }) => {
  const { cover, name, artist } = song;

  return (
    <div className="library-song">
      <img src={cover} alt={`${name} - ${artist}`} />
      <div className="song-info">
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
