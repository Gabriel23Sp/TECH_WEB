import { useState } from 'react'
import brand from '../../../public/img/brand.png'
import './Nav.css'


const navMenuItems =[
  {
    tittle:'Services',
    url:'#Services',
    cName:'link-animado'
  },
  {
    tittle:'History',
    url:'#History',
    cName:'link-animado'
  },
  {
    tittle:'Ubicación',
    url:'#Ubicacion',
    cName:'link-animado'
  },{
    tittle:'Mision y Visión',
    url:'#Mision',
    cName:'link-animado'
  },{
    tittle:'Clientes',
    url:'#Clientes',
    cName:'link-animado'
  }
]
const Nav = () => {
  const [show,setSow]=useState(true)
  const handleclick=()=>{
    setSow(!show);
  }
  return (
    <div>
          <nav className="nav-main w-4/5 m-auto flex justify-between items-center h-[60px] py-[40px] px-0 font-bold">
      <img src={brand} alt=" logo" className='nav-brand w-[60px]'/>
      <ul className={`nav-menu flex ${show? '':'show'}`}>
        {navMenuItems.map((item,index)=>{
          return(
          (<li key={index}><a className={item.cName} href={item.url}>{item.tittle}</a></li>)
          )})}
      </ul>
      <div className="menu-btn ">
      <i className="fas fa-bars" onClick={handleclick}></i>
    </div>
    </nav>
    </div>
  )
}

export default Nav
