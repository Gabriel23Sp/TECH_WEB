
import './App.css'
import Services from './components/Cards/Services'
import Clientes from './components/Clientes/Clientes'
import Footer from './components/Footer/Footer'
import History from './components/History/History'
import Nav from './components/Nav/Nav'
import Showcase from './components/Showcase/Showcase'
import { Somos } from './components/Somos/Somos'
import Ubicacion from './components/map/Ubicacion'


function App() {

  return (
    <>
<Nav/>
    <hr className='w-4/5 mx-auto my-2' />
  <Showcase/>
  <Services/>
  <History/> 
  <Clientes/>
  <Somos/>
  <Ubicacion/>
  <Footer/>
    </>
  )
}

export default App
