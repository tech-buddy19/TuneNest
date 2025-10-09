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

  useEffect(() => {
    axios.get('http://localhost:3000/songs')
      .then((res) => {
        setSongs(res.data);
        audioRefs.current = res.data.map(() => React.createRef());
      })
      .catch((err) => console.error(err));
  }, []);

  const handlePlay = (index) => {
    if (currentSongIndex !== -1 && currentSongIndex !== index) {
      audioRefs.current[currentSongIndex]?.current?.pause();
      audioRefs.current[currentSongIndex]?.current && (audioRefs.current[currentSongIndex].current.currentTime = 0);
    }
    if (currentSongIndex === index && isPlaying) {
      audioRefs.current[index]?.current?.pause();
      setIsPlaying(false);
    } else {
      audioRefs.current[index]?.current?.play();
      setIsPlaying(true);
      setCurrentSongIndex(index);
    }
  };

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
