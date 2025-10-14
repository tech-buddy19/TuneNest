import React, { useEffect, useState, useRef } from "react";
import { supabase } from "./SupabaseClient";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Player from "./Player";

function App() {
  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playlists, setPlaylists] = useState([]);
  const audioRefs = useRef([]);

  //  Fetch songs from Supabase on mount
  useEffect(() => {
    async function fetchSongs() {
      const { data, error } = await supabase.from("songs").select("*");

      if (error) {
        console.error("Supabase error:", error);
      } else {
        console.log("Fetched songs:", data);
        setSongs(data); // Set the fetched songs into state
      }
    }
    fetchSongs();
  }, []);

  //  Update audio refs when songs change
  useEffect(() => {
    audioRefs.current = songs.map(() => React.createRef());
  }, [songs]);

  const handlePlay = (index) => {
    // Pause previous audio if playing something else
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
