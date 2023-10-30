
import './App.css'
import Services from './components/Cards/Services'
import Clientes from './components/Clientes/Clientes'
import Footer from './components/Footer/Footer'
import History from './components/History/History'
import Nav from './components/Nav/Nav'
import Showcase from './components/Showcase/Showcase'
import { Somos } from './components/Somos/Somos'

function App() {


  return (
    <>
 <Nav/>
    <hr className='w-4/5 mx-auto my-5' />
  <Showcase/>
  <History/> 
  <Services/>
  <Clientes/>
  <Somos/>
  <Footer/> 


    </>
  )
}

export default App
