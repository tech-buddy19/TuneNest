import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import Home from './Home';
import Player from './Player';

function App() {
  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playlists, setPlaylists] = useState([]);
  const audioRefs = useRef([]);

  // Fetch songs and set up audio refs
  useEffect(() => {
    axios.get('http://localhost:3000/songs')
      .then((res) => {
        setSongs(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // Set audio refs when songs change
  useEffect(() => {
    audioRefs.current = songs.map(() => React.createRef());
  }, [songs]);

  // Play / Pause handler
  const handlePlay = (index) => {
    // Pause previously playing song
    if (currentSongIndex !== -1 && currentSongIndex !== index) {
      const prevAudio = audioRefs.current[currentSongIndex]?.current;
      if (prevAudio) {
        prevAudio.pause();
        prevAudio.currentTime = 0;
      }
    }

    const currAudio = audioRefs.current[index]?.current;
    if (!currAudio) return;

    if (currentSongIndex === index && isPlaying) {
      currAudio.pause();
      setIsPlaying(false);
    } else {
      currAudio.play();
      setIsPlaying(true);
      setCurrentSongIndex(index);
    }
  };

  // Skip controls
  const handleSkipForward = () => {
    if (songs.length === 0) return;
    let nextIndex = (currentSongIndex + 1) % songs.length;
    handlePlay(nextIndex);
  };

  const handleSkipBackward = () => {
    if (songs.length === 0) return;
    let prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    handlePlay(prevIndex);
  };

  // Playlist creation
  const handleCreatePlaylist = (name) => {
    if (!name.trim()) return;
    setPlaylists([...playlists, { name, songs: [] }]);
  };

  return (
    <div className="app-grid">
      <Sidebar 
        onCreatePlaylist={handleCreatePlaylist}
        playlists={playlists}
      />
      <Home
        songs={songs}
        currentSongIndex={currentSongIndex}
        isPlaying={isPlaying}
        audioRefs={audioRefs}
        handlePlay={handlePlay}
        handleSkipForward={handleSkipForward}
        handleSkipBackward={handleSkipBackward}
      />
      <Player currentSong={songs[currentSongIndex]} />
    </div>
  );
}

export default App;
