import React from 'react'

function Songcard({song}) {
  return (
    <div className='song-card'>
        <img src={song.cover} alt={song.title} />
        <h3>{song.title}</h3>
        <p>{song.artist}</p>
    </div>
  )
}

export default Songcard