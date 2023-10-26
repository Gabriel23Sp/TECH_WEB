import { FC, useState } from "react";
import { CardProps } from '../../Interfaces/Card.props';
import './StyleCard.css';
import block from '../../../public/img/casquivano.jpg'
import Modal from "../modal/Modal";
import Form from "../Form/Form";

const Card:FC<CardProps> = ({img}) => {
  const [activeModal, setActiveModal] = useState<boolean>(false);
  const [messageButton] = useState<string>('Solicitar Informacion');

  const active = () => setActiveModal(true);

  return (
    <div className='block-card bg-white text-black m-2 rounded-md'>
      <div className='content h-[420px]'>
      <div className='img-card mb-2 '><img src={`${img}`} alt="" className='w-[400px] rounded-t-md'/></div>
      <div className='text-card px-2 mb-2'>
        <header><h1 className='text-xl font-bold'>Service</h1></header>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia id quia quidem delectus est veritatis cumque, quas nulla maxime sequi.</span>
      </div>
      <div className='button-card m-2 border-blue-500 border-[1px] rounded-md w-[200px] hover:bg-blue-500 hover:text-white transition-all duration-500 text-blue-500 cursor-pointer'>
        <button className='mx-[20px] my-[10px]'             
        onClick={ active }>{ messageButton }</button>
      </div>
      </div>
      <Modal
        activeModal={ activeModal }
        setActiveModal={ setActiveModal }
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

export default Card
