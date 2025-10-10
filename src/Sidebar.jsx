import React, { useState } from "react";

function Sidebar({ onCreatePlaylist, playlists }) {
  const [playlistName, setPlaylistName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreatePlaylist(playlistName);
    setPlaylistName("");
  };

  return (
    <div className="sidebar">
      <h2>🎧 TuneNest</h2>

      <form onSubmit={handleSubmit} className="playlist-form">
        <input
          type="text"
          placeholder="New Playlist"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
        />
        <button type="submit">➕</button>
      </form>

      <div className="playlist-section">
        <h4>My Playlists</h4>
        {playlists.length === 0 ? (
          <p>No playlists yet</p>
        ) : (
          <ul>
            {playlists.map((pl, idx) => (
              <li key={idx}>🎵 {pl.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
