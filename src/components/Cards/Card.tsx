import service from '../../../public/img/services.jpg'
import './StyleCard.css'

const Card = () => {
  return (
    <div className='block-card bg-white text-black m-2 rounded-md'>
      <div className='content h-[420px]'>
      <div className='img-card mb-2 '><img src={service} alt="" className='w-[400px] rounded-t-md'/></div>
      <div className='text-card px-2 mb-2'>
        <header><h1 className='text-xl font-bold'>Service</h1></header>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia id quia quidem delectus est veritatis cumque, quas nulla maxime sequi.</span>
      </div>
      <div className='button-card m-2 border-blue-500 border-[1px] rounded-md w-[80px] hover:bg-blue-500 hover:text-white transition-all text-blue-500 cursor-pointer'>
        <button className='mx-[20px] my-[10px]'>hello</button>
      </div>
      </div>
    </div>
  )
}

export default Card
