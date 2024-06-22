import { useState } from 'react'
import './App.css'

function App() {
  const [color,changeColores] = useState('red');
  
  var colores = ["black",
  "white",
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "orange",
  "pink",
  "gray",
  "brown",
  "turquoise",
  "fuchsia",
  "lime",
  "tan",
  "navy",
  "silver",
  "maroon",
  "gold",
  "lightgreen"];
    
  const cambiaColor = ()=>{
    let numRandow = parseInt(Math.floor(Math.random() * (20-1) + 1))
    console.log(numRandow)
    changeColores(colores[numRandow]);
  }

  return (
    <>
      <div style={{backgroundColor:color}} className='container'>
        <div>
          <p>Background color {color}</p>
        </div>
        <div>
          <button onClick={cambiaColor} className='btn'>Cambia Color</button>
        </div>
      </div>
    </>
  )
}

export default App
