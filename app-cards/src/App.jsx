import { useState } from 'react'
import './App.css';
import CardComponent from './components/CardComponent';
import Button from 'react-bootstrap/Button';

function App() {
  const [cardObject,setCardObject] = useState([]);

  const add = ()=>{
      setCardObject([...cardObject,{}]);
      console.log(cardObject);
  }

  return (
    <>
    <div>
      <div style={{padding:'20px',display:'flex',justifyContent:'center'}}>
        <Button onClick={add} variant='primary'>Crear Card</Button>
      </div>
    </div>
    <div style={{display:'flex',justifyContent:'center',width:'100vw'}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 2fr',gap:'20px',padding:'0px 40%'}}>
        {cardObject.map(() => (
                <CardComponent/>
              ))}
        </div>
    </div>
    </>
  )
}

export default App
