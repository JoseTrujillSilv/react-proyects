import { useState } from 'react'
import './App.css'

function App() {
  const [textGenerate, setTextGenerate] = useState('');
  const [valueInput,setValueInput] = useState(0);
  var texto='';
  const palabras = [
    "amor",
    "alegría",
    "tristeza",
    "rabia",
    "miedo",
    "sorpresa",
    "asombro",
    "admiración",
    "gratitud",
    "esperanza",
    "felicidad",
    "paz",
    "tranquilidad",
    "serenidad",
    "bienestar",
    "salud",
    "fortaleza",
    "valentía",
    "coraje",
    "determinación",
    "perseverancia",
    "paciencia",
    "tolerancia",
    "respeto",
    "amabilidad",
    "compasión",
    "generosidad",
    "humildad",
    "simplicidad",
    "honestidad",
    "integridad",
    "responsabilidad",
    "compromiso",
    "disciplina",
    "creatividad",
    "innovación",
    "imaginación",
    "intuición",
    "inteligencia",
    "sabiduría",
    "conocimiento",
    "aprendizaje",
    "crecimiento",
    "evolución",
    "transformación",
    "cambio",
    "oportunidad",
    "desafío",
    "riesgo",
    "incertidumbre",
    "duda",
    "confianza",
    "fe",
    "optimismo",
    "positividad",
    "motivación",
    "inspiración",
    "liderazgo",
    "trabajo en equipo",
    "cooperación",
    "comunicación",
    "negociación",
    "resolución de conflictos",
    "planificación",
    "organización",
    "gestión",
    "eficiencia",
    "productividad",
    "éxito",
    "logro",
    "reconocimiento",
    "recompensa",
    "celebración",
    "gratitud",
    "belleza",
    "naturaleza",
    "arte",
    "música",
    "literatura",
    "poesía",
    "filosofía",
    "espiritualidad",
    "religión",
    "dios",
    "universo",
    "vida",
    "muerte",
    "renacimiento",
    "karma",
    "destino",
    "libre albedrío",
    "realidad",
    "ilusión",
    "percepción",
    "conciencia",
    "mente",
    "cuerpo",
    "alma",
    "espíritu",
    "amor",
    "odio",
    "guerra",
    "paz",
    "libertad",
    "justicia",
    "igualdad",
    "fraternidad",
    "humanidad",
    "mundo",
    "planeta",
    "galaxia",
    "universo",
    "infinito",
    "misterio",
    "magia",
    "milagro",
    "felicidad",
    "tristeza",
    "alegría",
    "rabia",
    "miedo",
    "sorpresa",
    "asombro",
    "admiración",
    "gratitud",
    "esperanza"
  ];
  

  const generate = ()=>{
      console.log(valueInput);
      console.log(setValueInput())
      for (let index = 0; index < valueInput; index++) {
        let numRandom = Math.floor(Math.random() * (40 -1) + 1);
        texto += palabras[numRandom]+' ';
      }
      setTextGenerate(texto);
  }

  const changeValue = (e)=>{
    setValueInput(e.target.value)
  }
  

  return (
    <>
      <div className='container'>
        <div>
          <h1>LOREM IPSUM ALEATORIO EN REACT</h1>
        </div>
        <div>
          <div>
            <input type="number" name="numText" id="numText" onChange={changeValue} value={valueInput}/><button onClick={generate}>Generar</button>
          </div>
        </div>
        <div>
          <p className='box'>{textGenerate}</p>
        </div>
      </div>
    </>
  )
}

export default App
