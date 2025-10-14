import React from "react";

function Home({
  songs,
  currentSongIndex,
  isPlaying,
  audioRefs,
  handlePlay,
  handleSkipForward,
  handleSkipBackward
}) {
  return (
    <div className="home-container">
      <h2 className="section-title">🎵 Trending Songs</h2>
      
      <div className="song-grid">
        {songs && songs.length > 0 ? (
          songs.map((song, index) => (
            <div key={song.id} className="song-card">
              <img
                src={song.cover_url}
                alt={song.title}
                className="song-image"
              />
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
              
              <div className="controls">
                <button onClick={handleSkipBackward}>⏮️</button>
                <button onClick={() => handlePlay(index)}>
                  {currentSongIndex === index && isPlaying ? "⏸️" : "▶️"}
                </button>
                <button onClick={handleSkipForward}>⏭️</button>
              </div>
              
              <audio
                ref={audioRefs.current[index]}
                src={song.audio_url}
                preload="auto"
                controls
              />
            </div>
          ))
        ) : (
          <p>No songs found. Please check your Supabase table!</p>
        )}
      </div>
    </div>
  );
}

export default Home;
