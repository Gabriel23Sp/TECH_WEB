import { useEffect, useState } from 'react';
import Map from './Map'
import './Map.css'

const Ubicacion: React.FC = () => {
  const [MapWidth,SetMapWidth]=useState(1200)
  const handleRize=()=>{
    const width =window.innerWidth
    if (width < 700) {
      SetMapWidth(300);
    } else if (width < 1200) {
      SetMapWidth(600);
    } else {
      SetMapWidth(1200);
    }
  }
  useEffect(()=>{
    handleRize();
    window.addEventListener('resize',handleRize);
    return()=>{
      window.removeEventListener('resize',handleRize)
    }
  },[])
  return (
    <div className='map-container' id='ubicacion'>
      <h1 className='text-center my-9 font-bold text-5xl'> Donde encontrarnos</h1>
      <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.770561951058!2d-77.07112102398447!3d-11.990371640855264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105ce5a73d129a7%3A0xfd7cc8fe665bcb79!2sAv.%20Jose%20Santos%20Chocano%20822%2C%20Los%20Olivos%2015301!5e0!3m2!1ses-419!2spe!4v1697734802224!5m2!1ses-419!2spe" width={MapWidth} height={450} style={{border:'0', margin:'10px auto'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Map>
    </div>

  )
}

export default Ubicacion
