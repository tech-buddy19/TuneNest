import React from 'react'

function Player() {
  return (
    <section className='players'>
      <h2 className='d-flex align-items-center gap-2'><i class="bi bi-snow"></i>Now Playing</h2>
      <p className='d-flex align-items-center gap-2'><i class="bi bi-music-note-beamed "></i>no songs selected</p>
    </section>
  );
}

export default Player