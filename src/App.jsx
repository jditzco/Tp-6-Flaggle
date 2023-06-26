import './App.css'
import './Components/Flaggle.css'
import React, {useState, useEffect, useRef } from "react"

const App = () => {
  const [listaBanderas, setListaBanderas] = useState([])
  const [bandera, setBandera] = useState(0)
  const [puntos, setPuntos] = useState(0)
  const input = useRef()

  useEffect(() => {
     fetch("https://countriesnow.space/api/v0.1/countries/flag/images")
    .then(res => res.json())
    .then(res => setListaBanderas(res.data))
  }, [])

  useEffect(() => {
    if (!listaBanderas) return
    setBandera(listaBanderas[Math.floor(Math.random() * listaBanderas.length)])
  }, [listaBanderas])



  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(input.current.value, bandera.name.length, bandera.name)
    if (input.current.value.length > Math.ceil(bandera.name.length * 0.5)){

      if (bandera.name.toUpperCase().includes(input.current.value.toUpperCase()) ) {
        setBandera(listaBanderas[Math.floor(Math.random() * listaBanderas.length)])
        setPuntos(prevState => prevState + 10)
        console.log("correcto")
        input.current.value = ''
      }
      else {
        setPuntos((e) => e - 1)
        console.log("incorrecto")
        console.log(input.current.value)
      }

    }
    else {
      console.log(bandera)
      console.log(input.current.value)
    }
    
  }
  return (
    <>
      <h1>Banderas</h1>
      <h2>¿Sabes de donde es esta bandera?</h2>
      <div className="banderas" ></div>
      <form onSubmit={handleSubmit}>
        <div><img src={bandera?.flag} /></div>
        <input type="text" ref={input} id="input-bandera" name="pais" className="imput-bandera" placeholder= "Que bandera es?" />
        <button type="submit" className="button-primary">Submit</button>
        <div className='puntos-container'>
        <h3>Puntos: {puntos}</h3>
        </div>
        
      </form>
    </>
  )
}

export default App;