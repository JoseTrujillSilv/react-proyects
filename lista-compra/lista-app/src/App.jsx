import { useState, useRef } from 'react'
import './App.css'
import Box from './components/Box';

function App() {
  const valueText = useRef(null);
  const [lista, setLista] = useState([]);

  const add = () => {
    const newText = valueText.current.value;
    if (newText) {
      setLista([...lista, { text: newText }]);
      valueText.current.value = "";
    }
  }

  const vaciar = ()=>{
    setLista([]);
  }

  return (
    <>
      <div className='container'>
        <div>
          <h1>LISTA DE COMPRAS</h1>
        </div>
        <div>
          <input type="text" name="text" id="text" ref={valueText} placeholder='text' /><button onClick={add}>Añadir</button>
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <th>ID</th>
                <th>Texto</th>
              </tr>
              {lista.map((object, index) => (
                <Box key={index} id={index} text={object.text} />
              ))}
            </tbody>
          </table>
          <div className='box-vaciar'>
            <button onClick={vaciar}>Vaciar</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
