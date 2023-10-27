import { useEffect, useState } from 'react';
import fron1 from '../../../public/img/banners-medida.jpg'
import fron2 from '../../../public/img/banners-medida2.jpg'
import fron3 from '../../../public/img/banners-medida3.jpg'


const Slider = () => {
  const img:string[] =[
    `${fron1}`,`${fron2}`,`${fron3}`
  ]
  const [selectedIndex, setSelectedIndex]=useState(0);
  const [selectedImage, setSelectedImage]=useState<string>(img[0]);
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
    setSelectedImage(img[nextIndex]);
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
    selectNewImage(selectedIndex,img)
  }
  return (
    <div>
      <img className={`w-full h-auto opacity-0 transition-opacity duration-700 ${loaded?'opacity-100' : '' } `} onLoad={()=>setLoaded(true)} src={selectedImage} alt="img" />
    </div>
  )
}

export default Slider
