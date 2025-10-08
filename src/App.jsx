import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import Player from './Player'
import Sidebar from './Sidebar'
function App() {
 

  return (
    
    <div className='app-grid'>
     
    
    <aside className='sidebar  '><Sidebar /></aside> 
     <main className='main-content '><Home /></main>
     <section className='player'><Player /></section>
     </div>
    
  )
}


export default App
