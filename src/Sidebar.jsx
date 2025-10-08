import React from 'react'

function Sidebar() {
  return (
    <>
    <aside className='sidebar'>
        <h2>Your Library</h2>
        <button className='d-flex align-items-center gap-2'>
          <i class="bi bi-plus-square-fill"></i>Create Playlist</button>
        <button className='d-flex align-items-center gap-1'><i class="bi bi-browser-edge"></i>
        Browse Podcasts</button>
    </aside>
    <div className='quick'>
            <h4>Quickies</h4>
            <ul>
                <button className='d-flex align-items-center gap-2'><i className="bi bi-house-heart-fill"></i>Home</button>
                <button className='d-flex align-items-center gap-2'><i className="bi bi-search"></i>Search</button>
                <button className='d-flex align-items-center gap-2'><i className="bi bi-heart-fill"></i>Liked Songs</button>
            </ul>
        </div>
        </>
  )
}

export default Sidebar