import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Slidebar from './components/Slidebar/Slidebar.jsx'
import Maindash from './components/Dashboard/Maindash'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='mainapp'><Slidebar/>
    <Maindash/></div>
    
         
    </>
  )
}

export default App
