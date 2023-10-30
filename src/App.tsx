
import './App.css'
import Services from './components/Cards/Services'
import Clientes from './components/Clientes/Clientes'
import Footer from './components/Footer/Footer'
import History from './components/History/History'
import Nav from './components/Nav/Nav'
import Showcase from './components/Showcase/Showcase'
import Slider from './components/Slider/Slider'
import { Somos } from './components/Somos/Somos'
import fron1 from '../public/img/prueba_7.jpg'
import fron2 from '../public/img/prueba_8.jpg'
import fron3 from '../public/img/prueba_9.jpg'
import fron4 from '../public/img/prueba_10.jpg'
import fron5 from '../public/img/prueba_11.jpg'

const Nuestro_Trabajo=[
  `${fron1}`,
  `${fron2}`,
  `${fron3}`,
]
const Maquinaria=[
  `${fron4}`,
  `${fron5}`,
]

function App() {


  return (
    <>
 <Nav/>
    <hr className='w-4/5 mx-auto my-5' />
  <Showcase/>
  <History/> 
  <Services/>
  <Slider arrayimg={Nuestro_Trabajo} reverse={false} tittle='Nuestro Trabajo'>
<div className='text-left'>
<span>🔧 ¡Optimiza tu Producción con Nuestros Moldes de Alto Rendimiento! 🔧</span>
    <br />
    <br />
    <span>Estimados clientes,</span>
    <br />    
    <br />
    <span>En Industrial TECH, estamos comprometidos con la excelencia en la fabricación de moldes. Nuestra experiencia y dedicación nos permiten ofrecer resultados de desempeño sobresalientes que superarán tus expectativas.</span>
</div>
  </Slider>
  <Slider arrayimg={Maquinaria} reverse={true} tittle='Beneficios de Trabajar con nosotros'>
<div className='text-left'>
<span>Al elegirnos, obtienes:</span>
    <br />
    <br />
    <span>✅ Moldes de Precisión: Cada molde es diseñado y fabricado con la más alta precisión para garantizar una producción eficiente y sin contratiempos.<br/>
✅ Durabilidad Comprobada: Nuestros moldes están construidos para resistir el paso del tiempo y mantener su rendimiento óptimo en cada ciclo de producción.<br/>
✅ Soluciones a Medida: Adaptamos nuestros diseños a tus necesidades específicas, asegurando una integración perfecta en tu proceso de fabricación.</span>
    <br />    
    <br />
    <span>¡Contáctanos hoy mismo y descubre cómo podemos potenciar tu producción!</span>
</div>
  </Slider>
  <Clientes/>
  <Somos/>
  <Footer/>


    </>
  )
}

export default App
