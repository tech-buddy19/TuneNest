import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Songcard from './Songcard'
function Home() {
  const[songs,setSongs]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3000/songs").
    then((res)=>setSongs(res.data)).
    catch((err)=>console.error(err));
  },[])
  return (
    <>
   <main className='main'>
    <h2>
      <i class="bi bi-arrow-up-right-square-fill"></i>Trending Songs
    </h2>
    <div className='grid-song'>
      {songs.map((song)=>(<Songcard key={song.id} song={song} />))}   
    </div>
   </main>
    </>
  )
}

export default Home