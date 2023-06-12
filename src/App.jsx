import { useState } from 'react'
import './App.css'
import NavBarra from './Components/NavBarra'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBarra/>
    </>
  )
}

export default App
