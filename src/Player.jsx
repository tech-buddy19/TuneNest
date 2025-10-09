import React from 'react';

function Player({ currentSong }) {
  return (
    <section className="player">
      <h2>
        <i className="bi bi-snow"></i> Now Playing
      </h2>
      <p>
        <i className="bi bi-music-note-beamed"></i>
        {currentSong ? ` ${currentSong.title} - ${currentSong.artist}` : ' No songs selected'}
      </p>
    </section>
  );
}

export default Player;
