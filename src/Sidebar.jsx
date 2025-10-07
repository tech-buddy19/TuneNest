import React from 'react'

function Sidebar() {
  return (
    <aside className='sidebar'>
        <h2>Your Library</h2>
        <button>Create Playlist</button>
        <button>Browse Podcasts</button>
        <div style={{marginTop:"20px"}}>
            <h4>Quickies</h4>
            <ul>
                <li>Home</li>
                <li>Search</li>
                <li>Liked Songs</li>
            </ul>
        </div>
    </aside>
  )
}

export default Sidebar