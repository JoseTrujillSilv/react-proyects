import '../App.css'

function SidebarBox({classDisplay,activeSidebar}) {

  return (
    <>
     <div className={classDisplay} id="box-sidebar">
        <div>
            <h1 id="h1">Esto es un sidebars</h1>
        </div>
        <div>
            <p style={{color:'white',padding:'10px'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi at nemo harum voluptatibus iusto cum itaque facilis beatae quis est eos ullam officiis quos atque, ut dolorem quasi dolores molestiae!</p>
        </div>
        <div style={{textAlign:'center',padding:'20px 0px'}}>
            <button onClick={activeSidebar} className='btn-closed'>Cerrar</button>
        </div>
    </div>
    </>
  )
}

export default SidebarBox
