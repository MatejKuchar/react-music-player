import React from "react";

const LibrarySong = ({ song }) => {
  const { cover, name, artist } = song;

  return (
    <div className="library-song">
      <img src={cover} alt={`${name} - ${artist}`} />
      <h3>{name}</h3>
      <h4>{artist}</h4>
    </div>
  );
};

export default LibrarySong;
