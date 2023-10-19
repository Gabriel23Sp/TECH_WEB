import './Footer.css'
const Footer = () => {
  return (
    <footer className='foot-page w-full bg-[#0a141d]'>
      <div className='group-1'>
        <div className='box'>
          <figure>
          <a href=""> <img src="" alt="" /></a>
          </figure>
        </div>
        <div className='box'>
            <h2>SOBRE NOSOTROS</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia vitae tempore vel accusantium optio ad aliquid neque voluptatum sequi quibusdam ipsum, exercitationem consectetur explicabo. Recusandae odio quam sint autem expedita!</p>
        </div>
        <div className='box'>
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