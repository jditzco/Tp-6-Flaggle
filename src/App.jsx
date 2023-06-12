import { useEffect } from 'react'
import './App.css'
import Bandera from './Components/Bandera'
function App() {

  useEffect(() => {
         const logDatos = async() => {
           const response = await fetch('https://countriesnow.space/api/v0.1/countries/flag/images')
           const data = await response.json()
           console.log(data)
         }
        logDatos()
     }, [])


  return (
    <>
    <Bandera/>
    </>
  )
}

export default App
