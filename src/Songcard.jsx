import React from 'react'

function Songcard({song}) {
  return (
    <div className='song-card'>
        <img src={song.cover} alt={song.title} />
        <div className='song-info gap-5'>
        <h3>{song.title}</h3>
        <p>{song.artist}</p>
    </div>
    <i class="bi bi-skip-backward" style={{ fontSize: "2rem", cursor: "pointer" }}></i>
    <i className="bi bi-pause-circle" style={{ fontSize: "2rem", cursor: "pointer" }}></i>
<i class="bi bi-skip-forward" style={{ fontSize: "2rem", cursor: "pointer" }}></i>
    </div>
  )
}

export default Songcard