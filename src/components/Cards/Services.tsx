/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Card from './Card'
import { EmblaOptionsType } from 'embla-carousel-react';
import img1 from '../../../public/img/prueba_1.webp'
import img2 from '../../../public/img/prueba_2.webp'
import img3 from '../../../public/img/prueba_3.webp'
import img4 from '../../../public/img/prueba_4.webp'
import Carrousel from '../Carousel/Carousel';
import block from '../../../public/img/casquivano.jpg'
import { useState } from 'react';
import Modal from '../modal/Modal';
import Form from '../Form/Form';

const OPTIONS_CARDS: EmblaOptionsType = {
  loop: true,
  slidesToScroll: 1,
  startIndex: 0,
};

const SLIDE_COUNT= 4;



const SLIDES: number[] = Array.from(Array(SLIDE_COUNT).keys());

const Services = () => {
  const viewModal = () => setActiveModal((_prev) => (true));
  const closeModal = () => setActiveModal((_prev) => (false));
  const getChildrens =(array :any[])=>(array.map((item)=>{
    const {img,
      text,
      tittle,
      onClick} =item;
    return(
      <div className=''>
        <div><Card img={`${img}`} onClick={onClick} text={text} tittle={tittle}/></div>
    </div>
    )
  }))

  const ARRAYS_CHILDRENS =[
    {
      img:`${img1}`,
      tittle:'Fabricación de Matrices y Moldes :',
      text:'La empresa se encarga de construir físicamente los moldes y matrices utilizando materiales y técnicas especializadas.',
      onClick:viewModal
    },
    {
      img:`${img2}`,
      tittle:'Desarrollo de Matrices de Forja o Estampado :',
      text:'Especializarse en la creación de matrices para procesos de forja o estampado de metales.',
      onClick:viewModal
    },
    {
      img:`${img3}`,
      tittle:'Diseño y Desarrollo de Moldes : ',
      text:'Esto implica la creación y diseño de moldes personalizados según las especificaciones y necesidades del cliente.',
      onClick:viewModal
    },
    {
      img:`${img4}`,
      tittle:'Prototipado Rápido :',
      text:'Ofrecer servicios de creación rápida de prototipos para verificar el diseño antes de la producción en masa.',
      onClick:viewModal
    }
  ]

  const [childrens] = useState<JSX.Element[]>(getChildrens(ARRAYS_CHILDRENS));
  const [activeModal, setActiveModal] = useState<boolean>(false);

  return (
    <div className='my-[20px] w-4/5 m-auto'>
      <h1 className='text-center my-4 text-5xl font-bold' id='servicios'>Servicios</h1>
      <Carrousel  
          classNameSlide="embla__slide__trhee"
          slides={ SLIDES }
          options={ OPTIONS_CARDS }
          haveButtons={ true }
          haveDots={ false }
          interval={ 0 }
          childrens={ childrens }
        />

<Modal
        activeModal={ activeModal }
        setActiveModal={ closeModal }
        background="#000"
      >
        <div className='w-[1000px] h-[300px] grid grid-cols-2
         mr-[40px]
         max-md:grid-1
         max-md:mr-[330px]'>
          <div className="ml-[180px]">
          <img src={block} alt="cuadrado" className="w-[290px]
          max-md:hidden"/>
          </div>
        <div className="">
        <h2 className='font-bold text-white mb-4 text-xl'>CONTACTANOS</h2>
        <Form/>
        </div>
        </div>
      </Modal>
    </div>

  )
}

export default Services
