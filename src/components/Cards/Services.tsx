import Card from './Card'
import img1 from '../../../public/img/service1.webp'
import img2 from '../../../public/img/service2.webp'
import img3 from '../../../public/img/service3.webp'
import img4 from '../../../public/img/service4.webp'
const Services = () => {
  return (
    <div>
      <h1 className='text-center my-3 text-3xl font-bold' id='servicios'>Services</h1>
          <div className=' w-4/5 m-auto new-cards grid grid-cols-4 gap-[5px]
          max-md:grid-cols-2
          max-sm:grid-cols-1
          max-sm:w-3/5'>
      <div><Card img={`${img1}`}/></div>
      <div><Card img={`${img2}`}/></div>
      <div><Card img={`${img3}`}/></div>
      <div><Card img={`${img4}`}/></div>
    </div>
    </div>
  )
}

export default Services
