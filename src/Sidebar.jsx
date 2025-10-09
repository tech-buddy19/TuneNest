import React, { useState } from 'react';

function Sidebar({ playlists, onCreatePlaylist }) {
  const [playlistName, setPlaylistName] = useState('');

  const handleCreate = () => {
    onCreatePlaylist(playlistName);
    setPlaylistName('');
  };

  return (
    <div className="sidebar">
      <div>Your Library</div>
      <input
        type="text"
        placeholder="Playlist name"
        value={playlistName}
        onChange={e => setPlaylistName(e.target.value)}
        style={{ marginBottom: '5px' }}
      />
      <button onClick={handleCreate}>Create Playlist</button>
      <ul>
        {playlists && playlists.map((playlist, idx) => (
          <li key={idx}>
            <b>{playlist.name}</b>
            <ul>
              {playlist.songs.map(song => (
                <li key={song.id}>{song.title} - {song.artist}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
