import React from 'react';
import Songcard from './Songcard';

function Home({
  songs,
  currentSongIndex,
  isPlaying,
  audioRefs,
  handlePlay,
  handleSkipForward,
  handleSkipBackward,
  playlists,
  onAddSongToPlaylist,
}) {
  return (
    <main className="main-content">
      <h2>
        <i className="bi bi-arrow-up-right-square-fill"></i> Trending Songs
      </h2>
      <div className="grid-song">
        {songs.length > 0 ? songs.map((song, index) => (
          <Songcard
            key={song.id}
            song={song}
            audioRef={audioRefs.current[index]}
            isPlaying={isPlaying && currentSongIndex === index}
            onPlay={() => handlePlay(index)}
            onSkipForward={handleSkipForward}
            onSkipBackward={handleSkipBackward}
            playlists={playlists}
            onAddSongToPlaylist={onAddSongToPlaylist}
          />
        )) : (
          <p>No trending songs available.</p>
        )}
      </div>
    </main>
  );
}

export default Home;
