import Card from './Card'

const Services = () => {
  return (
    <div>
      <h1 className='text-center my-3 text-3xl font-bold'>Services</h1>
          <div className=' w-4/5 m-auto new-cards grid grid-cols-4 gap-[5px]'>
      <div><Card/></div>
      <div><Card/></div>
      <div><Card/></div>
      <div><Card/></div>
    </div>
    </div>
  )
}

export default Services
