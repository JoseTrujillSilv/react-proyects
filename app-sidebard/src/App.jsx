import { useState } from 'react'
import './App.css'
import SidebarBox from './components/SidebarBox.jsx'

function App() {

  const [classDisplay,setClassDisplay] = useState('box-sidebar d-none');

  const activeSidebar = ()=>{
    classDisplay === 'box-sidebar d-none' ? setClassDisplay('box-sidebar d-block') : setClassDisplay('box-sidebar d-none');
  }

  return (
    <>
      <div>
        <SidebarBox classDisplay={classDisplay} activeSidebar={activeSidebar}/>
      </div>
      <div style={{display: 'flex',justifyContent: 'end',height: '20vh',alignItems: 'end',padding: '0px 300px'}}>
          <button className='btn-nav' onClick={activeSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
          </button>
      </div>
    </>
  )
}

export default App
