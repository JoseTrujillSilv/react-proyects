import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [colorCounter,setColorCounter] = useState('black');

  const plus = ()=>{
    setCount(count + 1);
    compCounter();
  }

  const zero = ()=>{
    setCount(count - count);
    compCounter();
  }

  const rest = ()=>{
      setCount(count - 1);
      compCounter();
  }

  const compCounter = ()=>{
      if (count===0) {
        setColorCounter('black');
      }else if(count>0){
        setColorCounter('green');
      }else{
        setColorCounter('red');
      }
  }

  return (
    <>
     <div className='container'>
        <div>
          <h1>CONTADOR EN REACT</h1>
        </div>
        <div>
          <p style={{color:colorCounter}}>{count}</p>
        </div>
        <div>
          <button onClick={plus}>+</button><button onClick={zero}>zero</button><button onClick={rest}>-</button>
        </div>
     </div>
    </>
  )
}

export default App
