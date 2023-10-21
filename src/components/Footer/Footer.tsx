import './Footer.css'
import logo from '../../../public/img/brand.png'
import Form from '../Form/Form'
const Footer = () => {
  return (
    <footer className='foot-page w-full bg-[#0a141d]'>
      <div className='group-1'>
        <div className='box'>
          <figure>
          <a href=""> <img src={logo} alt="" className='w-[150px]'/></a>
          </figure>
        </div>
        <div className='box'>
        <h2 className='font-bold'>CONTACTANOS</h2>
            <Form/>
        </div>
        <div className='box max-md:mt-[20em]'>
        <h2>SIGUENOS</h2>
        <div className='social'>
        <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
        </div>
      </div>
      <div className='group-2'>
      <small>
        &copy; 2021 <b>SLee Dw</b> - Todos los Derechos Reservados
      </small>
      </div>
    </footer>
  )
}

export default Footer
