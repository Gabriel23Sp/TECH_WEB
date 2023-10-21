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
    <div className='grid grid-cols-2 mr-[20em] items-center text-center 
    max-md:block 
    max-md:mr-0'>
      <div className=' text-6xl my-4 font-bold leading-[2em]'>Nos enorgullecemos <br/> Trabajando con</div>
      <div className='grid grid-cols-3 items-center justify-center
      max-md:text-2xl
      max-md:grid-cols-2
      max-sm:grid-cols-1'>
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
