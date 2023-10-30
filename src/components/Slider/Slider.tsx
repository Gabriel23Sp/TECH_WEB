import { FC, useEffect, useState } from 'react';

import { SliderProps } from '../../Interfaces/Slider.props';


const Slider:FC<SliderProps> = ({
  tittle,
  reverse,
  children,
  arrayimg
}) => {

  const [selectedIndex, setSelectedIndex]=useState(0);
  const [selectedImage, setSelectedImage]=useState<string>(arrayimg[0]);
  const [loaded,setLoaded]=useState(false);
  const selectNewImage=(index:number, images:string[],next =true)=>{
    setLoaded(false);
  const voids =index;
  if(voids){
    console.log('esta funcion no hace nada ...');
  }
  setTimeout(()=>{
    const condition =  next? selectedIndex <images.length-1 :selectedIndex>0
    const nextIndex = next? (condition? selectedIndex + 1 : 0) :condition? selectedIndex -1 :images.length-1
    setSelectedImage(arrayimg[nextIndex]);
    setSelectedIndex(nextIndex);
  },700)
  };

  useEffect(()=>{
    const interval =setInterval(()=>{
      next()
    },3000)
    return ()=>clearInterval(interval)
  })

  const next =()=>{
    selectNewImage(selectedIndex,arrayimg)
  }
  return (
    <div className='text-center my-[50px]'>
      <h2 className='font-bold text-4xl my-4'>{tittle}</h2>
      <div className={`w-4/5 m-auto flex items-center justify-center ${reverse? ' ':'flex-row-reverse'} max-md:flex-col-reverse`}>
      <span className='text-2xl w-[800px] text-left m-[90px] 
      max-md:m-[50px] 
      max-md:w-[300px]
      max-md:text-lg
'>{children}</span>
      <img className={`w-[350px] h-auto opacity-0 transition-opacity duration-700 ${loaded?'opacity-100' : '' } `} onLoad={()=>setLoaded(true)} src={selectedImage} alt="img" />
    </div>
    </div>
  )
}

export default Slider
