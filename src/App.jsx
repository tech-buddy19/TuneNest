import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search  from './Search'
function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div class="d-flex vh-100 bg-secondary">
     <div className='w-20'><Search /></div>
     <div className='w-50 bg-info'>Home</div>
     <div className='w-30'>trending</div>
     </div>
    
  )
}


export default App
