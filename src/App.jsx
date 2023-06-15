import './App.css'
import './Flaggle.css'
import React, {useState, useEffect } from "react"

const App = () => {
  const [Bandera, setBandera] = useState([{
    bandera: null,
    nombre: null,
  }])
  const [Abandera, setABandera] = useState(0)
  const [puntos, setPuntos] = useState(0)

  useEffect(() => {
    const obtenerAbanderas = () => {
      fetch("https://countriesnow.space/api/v0.1/countries/flag/images")
        .then(res => res.json())
        .then(res => {
          const updatedBandera = res.data.map(e => ({
            bandera: e.flag,
            nombre: e.name.toUpperCase()
          }))
          setBandera(updatedBandera)
        })
    }
    obtenerAbanderas()
  }, [])

  useEffect(() => {
    setABandera(Math.floor(Math.random() * Bandera.length))
    console.log(Abandera)
  }, [Bandera])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (Bandera[Abandera].nombre == document.getElementsByName("pais")[0].value.toUpperCase()) {
      document.getElementsByName("pais")[0].value = ''
      setABandera(Math.floor(Math.random() * Bandera.length))
      setPuntos((e) => e + 10)
      console.log("correcto")
      console.log(document.getElementsByName("pais")[0].value)
    }
    else {
      document.getElementsByName("pais")[0].value = ''
      setPuntos((e) => e - 1)
      console.log("incorrecto")
      console.log(document.getElementsByName("pais")[0].value)
    }
  }
  return (
    <>
      <h1>Banderas</h1>
      <h2>¿Sabes de donde es esta bandera?</h2>
      <div className="banderita" ></div>
      <form onSubmit={handleSubmit}>
        <div><img src={Bandera[Abandera].bandera} /></div>
        <input type="text" name="pais" className="u-full-width" placeholder={Bandera[Abandera].nombre} />
        <button type="submit" className="u-full-width button-primary">Submit</button>
        <h3>Puntos: {puntos}</h3>
      </form>
    </>
  )
}

export default App;