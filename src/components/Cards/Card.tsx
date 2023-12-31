import { FC, useState } from "react";
import { CardProps } from '../../Interfaces/Card.props';
import './StyleCard.css';


const Card:FC<CardProps> = ({img, onClick,text,tittle}) => {
  const [messageButton] = useState<string>('Solicitar Informacion');
  
  return (
    <div className='block-card bg-white text-black rounded-md'>
      <div className='content h-[450px]'>
      <div className='img-card mb-2 '><img src={`${img}`} alt="" className='w-[400px] rounded-t-md'/></div>
      <div className='text-card px-2 mb-2'>
        <header><h1 className='text-xl font-bold'>{tittle}</h1></header>
        <span>{text}</span>
      </div>
      <div className='button-card m-2 border-blue-500 border-[1px] rounded-md w-[200px] hover:bg-blue-500 hover:text-white transition-all duration-500 text-blue-500 cursor-pointer'>
        <button className='mx-[20px] my-[10px]'             
        onClick={ onClick }>{ messageButton }</button>
      </div>
      </div>
    </div>
  )
}

export default Card
