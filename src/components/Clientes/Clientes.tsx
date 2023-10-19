import client1 from '../../../public/img/duo.png'
import client2 from '../../../public/img/fibra.png'
import client3 from '../../../public/img/diamante.png'
import client4 from '../../../public/img/details_1.png'
import client5 from '../../../public/img/details_2.png'
import client6 from '../../../public/img/details_3.png'
const ARRAY_CLIENTES=[
  {
    img:client1,
    text:'Lorem ipsum dolor, sit amet'
  },{
    img:client2,
    text:'Lorem ipsum dolor, sit amet'
  },{
    img:client3,
    text:'Lorem ipsum dolor, sit amet'
  },{
    img:client4,
    text:'Lorem ipsum dolor, sit amet'
  },{
    img:client5,
    text:'Lorem ipsum dolor, sit amet'
  },{
    img:client6,
    text:'Lorem ipsum dolor, sit amet'
  },
]

const Clientes = () => {
  return (
    <div>
      <div className='text-center text-2xl my-4 font-bold'>Clientes</div>
      <div className='grid grid-cols-3 items-center justify-center'>
      {ARRAY_CLIENTES.map((item,index)=>{return(
      <div key={index}
      className='w-[150px]
      flex
      flex-col
      items-center
      justify-center
      m-auto'
      >
        <img src={item.img} alt="alt image" className='w-[800px] h-auto'/>
        <span
        className='mx-1 my-3
        text-center
        text-xl
        text-white'
        >
          {item.text}
        </span>
      </div>)})}
    </div>
    </div>
  )
}

export default Clientes
