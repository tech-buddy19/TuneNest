import React, { useState, useRef } from 'react';


function Songcard({
  song,
  audioRef,
  isPlaying,
  onPlay,
  onSkipForward,
  onSkipBackward,
}) {
  const [liked, setLiked] = useState(false);
  const [progress, setProgress] = useState(0);

  const handlePlayClick = (e) => {
    e.stopPropagation();
    onPlay();
  };

  
  const onTimeUpdate = (e) => {
    const audio = e.target;
    const percent = audio.currentTime / audio.duration;
    setProgress(percent);
  };

  // Circle progress circle constants
  const size = 60; // px
  const strokeWidth = 4;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const dashoffset = circumference - (progress * circumference);

  const toggleLike = (e) => {
    e.stopPropagation();
    setLiked(!liked);
  };

  return (
    <div className="song-card" style={{ position: "relative" }}>
      <img src={song.cover} alt={song.title} style={{ width: "150px", height: "150px", borderRadius: "15px" }} />
      <div className="song-info" style={{ marginTop: "10px" }}>
        <h3>{song.title}</h3>
        <p>{song.artist}</p>
      </div>
      <audio
        ref={audioRef}
        src={song.audio}
        onEnded={onSkipForward}
        onTimeUpdate={onTimeUpdate}
      />
      <div style={{ marginTop: "10px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ position: "relative", margin: "10px" }}>
          <svg width={size} height={size}>
            <circle
              cx={size/2} cy={size/2} r={radius}
              fill="none"
              stroke="#ccc"
              strokeWidth={strokeWidth}
            />
            <circle
              className="progress-circle"
              cx={size/2} cy={size/2} r={radius}
              fill="none"
              stroke="#1db954"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={dashoffset}
              strokeLinecap="round"
            />
          </svg>
          <button
            onClick={handlePlayClick}
            style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              background: "white", border: "none", borderRadius: "50%",
              width: size-16, height: size-16, display: "flex", alignItems: "center", justifyContent: "center"
            }}>
            <i 
              className={isPlaying ? "bi bi-pause-fill" : "bi bi-play-fill"}
              style={{ fontSize: "2rem", color: "#1db954" }}
            ></i>
          </button>
        </div>
        <div style={{ display: "flex", gap: "15px" }}>
          <button onClick={(e) => { e.stopPropagation(); onSkipBackward(); }} style={{ borderRadius: "50%", background: "white", border: "1px solid #ccc" }}>
            <i className="bi bi-skip-backward" style={{ fontSize: "1.5rem", color: "#333" }}></i>
          </button>
          <button onClick={(e) => { e.stopPropagation(); onSkipForward(); }} style={{ borderRadius: "50%", background: "white", border: "1px solid #ccc" }}>
            <i className="bi bi-skip-forward" style={{ fontSize: "1.5rem", color: "#333" }}></i>
          </button>
        </div>
        <button
          onClick={toggleLike}
          className="like-btn"
          style={{ marginTop: "15px" }}>
          <i
            className={liked ? "bi bi-heart-fill" : "bi bi-heart"}
            style={{ fontSize: "2rem", color: liked ? "#e53935" : "#222" }}
          ></i>
        </button>
      </div>
    </div>
  );
}

export default Songcard;
