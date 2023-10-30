/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import client1 from '../../../public/img/cliente1.png'
import client2 from '../../../public/img/cliente2.png'
import client3 from '../../../public/img/cliente3.png'
import client4 from '../../../public/img/cliente4.png'
import client5 from '../../../public/img/cliente5.png'
import client6 from '../../../public/img/cliente6.png'
import Carrousel from '../Carousel/Carousel';
import { EmblaOptionsType } from 'embla-carousel-react'


const OPTIONS_CARDS: EmblaOptionsType = {
  loop: false,
  slidesToScroll: 1,
  startIndex: 0,
};

const SLIDE_COUNT= 6;




const SLIDES: number[] = Array.from(Array(SLIDE_COUNT).keys());


const Clientes = () => {

  const getChildrens =(array :any[])=>(array.map((item)=>{
    const {img,
      text} =item;
    return(
      <div
        className='w-[150px] 
        flex
        flex-col
        items-center
        justify-center
        max-md:ml-[40px]'
        >
          <img src={img} alt="alt image" className='w-[500px] h-auto'/>
          <span
          className='mx-1 my-3
          text-center
          text-xl
          text-white'
          >
            {text}
          </span>
        </div>
    )
  }))
  
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

  const [childrens] = useState<JSX.Element[]>(getChildrens(ARRAY_CLIENTES));

  return (
    <div className='text-center'>
      <div className='my-4'>
      <h2 className='text-5xl font-bold my-4'>Clientes</h2>
      <span className='text-2xl'>Nos enorgullecemos trabajando con</span>
      </div>
      <div className='flex items-center justify-center text-center 
    max-xl:block 
    max-xl:m-auto
    max-md:mr-0' id='clientes'>
      <div className='w-1/2 max-lg:w-4/5 ml-9'>
      <Carrousel  
          classNameSlide="embla__slide__trhee"
          slides={ SLIDES }
          options={ OPTIONS_CARDS }
          haveButtons={ true }
          haveDots={ false }
          interval={ 0 }
          childrens={ childrens }
        />
    </div>
    </div>
    </div>
  )
}

export default Clientes
