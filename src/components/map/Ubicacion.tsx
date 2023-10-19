import Map from './Map'

const Ubicacion = () => {
  return (
    <div className='w-3/5 m-auto'>
      <h1 className='text-center my-3 font-bold text-2xl'> Donde encontrarnos</h1>
      <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.770561951058!2d-77.07112102398447!3d-11.990371640855264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105ce5a73d129a7%3A0xfd7cc8fe665bcb79!2sAv.%20Jose%20Santos%20Chocano%20822%2C%20Los%20Olivos%2015301!5e0!3m2!1ses-419!2spe!4v1697734802224!5m2!1ses-419!2spe" width={1200} height={450} style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Map>
    </div>

  )
}

export default Ubicacion
