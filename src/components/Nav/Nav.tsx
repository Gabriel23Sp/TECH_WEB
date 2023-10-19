import brand from '../../../public/img/brand.png'
import './Nav.css'


const navMenuItems =[
  {
    tittle:'Web Development',
    url:'#Web',
    cName:'nav-links'
  },
  {
    tittle:'Blochain',
    url:'#Blochain',
    cName:'nav-links'
  },
  {
    tittle:'Artificil Inteligence',
    url:'#Artificil',
    cName:'nav-links'
  },{
    tittle:'Machine learning',
    url:'#Machine',
    cName:'nav-links'
  },
  {
    tittle:'Quantum computing',
    url:'#Quantum',
    cName:'nav-links'
  },{
    tittle:'Startup',
    url:'#Startup',
    cName:'nav-links'
  },{
    tittle:'More',
    url:'#More',
    cName:'nav-links'
  }
]
const Nav = () => {
  return (
    <nav className="nav-main w-4/5 m-auto flex justify-between items-center h-[60px] py-[40px] px-0">
      <img src={brand} alt=" logo" className='nav-brand w-[60px]'/>
      <ul className='nav-menu flex'>
        {navMenuItems.map((item,index)=>{
          return(
          (<li key={index}><a className={item.cName} href={item.url}>{item.tittle}</a></li>)
          )})}
      </ul>
    </nav>
  )
}

export default Nav
