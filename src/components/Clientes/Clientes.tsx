import client1 from '../../../public/img/cliente1.png'
import client2 from '../../../public/img/cliente2.png'
import client3 from '../../../public/img/cliente3.png'
import client4 from '../../../public/img/cliente4.png'
import client5 from '../../../public/img/cliente5.png'
import client6 from '../../../public/img/cliente6.png'
const ARRAY_CLIENTES=[
  {
    img:client1,
    text:'Lorem ipsum dolor'
  },{
    img:client2,
    text:'Lorem ipsum dolor'
  },{
    img:client3,
    text:'Lorem ipsum dolor'
  },{
    img:client4,
    text:'Lorem ipsum dolor'
  },{
    img:client5,
    text:'Lorem ipsum dolor'
  },{
    img:client6,
    text:'Lorem ipsum dolor'
  },
]

const Clientes = () => {
  return (
    <div className='grid grid-cols-2 mr-[20em] items-center text-center 
    max-xl:block 
    max-xl:m-auto
    max-md:mr-0' id='clientes'>
      <div className=' text-6xl my-4 font-bold leading-[2em] max-md:text-3xl'>Nos enorgullecemos <br/> Trabajando con</div>
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
