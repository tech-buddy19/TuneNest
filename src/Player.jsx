import React from "react";

function Player({ currentSong }) {
  if (!currentSong) {
    return (
      <div className="player">
        <p>🎵 Select a song to play</p>
      </div>
    );
  }

  return (
    <div className="player">
      <div className="player-info">
        <img
          src={currentSong.cover}
          alt={currentSong.title}
          width="80"
          height="80"
        />
        <div>
          <h4>{currentSong.title}</h4>
          <p>{currentSong.artist}</p>
        </div>
      </div>

      <div className="player-controls">
        <p>Now Playing 🎶</p>
      </div>
    </div>
  );
}

export default Player;
