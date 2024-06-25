import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [segundos, setSegundos] = useState(0)
  const [minutos, setMinutos] = useState(0)
  const [horas, setHoras] = useState(0)
  const [milisegundos, setMilisegundos] = useState(0)
  const [start, setStart] = useState(false)
  const [colorStart,setColorStart] = useState('black');

  useEffect(() => {
    if (start) {
     var intervalo = setInterval(setMilisegundos(milisegundos + 1), 100); // Cambia 1 por un valor mayor en milisegundos
    }else{
      clearInterval(intervalo);
    }
  });

  const startFunction = ()=>{
    setColorStart('green');
    setStart(true);
  }

  const stop = ()=>{
    setColorStart('red');
    setStart(false);
  }

  if (milisegundos === 9999) {
    setMilisegundos(0);
    setSegundos(segundos + 1);
  }

  if(segundos === 60){
    setSegundos(0);
    setMinutos(minutos + 1);
  }

  if (minutos === 60) {
    setMinutos(0);
    setHoras(horas + 1);
  }

  const reset = ()=>{
    setColorStart('black');
    setStart(false);
    setMilisegundos(0);
    setSegundos(0);
    setMinutos(0);
    setHoras(0);
  }


  return (
    <>
      <div className='container'>
        <div>
          <h1>Cronómetro con React</h1>
        </div>
        <div>
          <p style={{color:colorStart}} className='time'><span id='h'>{horas}h:</span><span id='min'>{minutos}min:</span><span id='s'>{segundos}s</span><span id='ms' style={{display:'none'}}>{milisegundos}</span></p>
        </div>
        <div>
          <button onClick={startFunction}>Start</button> <button onClick={stop}>Stop</button> <button onClick={reset}>Reset</button>
        </div>
      </div>
    </>
  )
}

export default App
