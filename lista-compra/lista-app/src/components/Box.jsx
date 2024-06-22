import { useState } from 'react'
import '../App.css'

function Box({id,text}) {
  const [count, setCount] = useState(0)

  return (
    <>
        <tr>
            <td>{id}</td>
            <td>{text}</td>
        </tr>
    </>
  )
}

export default Box