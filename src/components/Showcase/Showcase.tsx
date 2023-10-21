import { useState } from 'react'
import './Showcase.css'
const Showcase = () => {
  const [show,setShow]=useState(true);
  const handleclick=()=>{
    setShow(!show)
  }
  return (
    <header className="showcase w-4/5 m-auto h-[550px] pb-[50px] mb-[40px]">
<div className="content">
  <div className='upper-message z-10 m-3'>
  <div className='justify-end pb-[50px] mb-[20px] bg-black opacity-80 w-[500px] h-auto z-0 
  max-md:w-[370px]
'>
  <div className='p-2'>
    <h2 className='m-2'>Big News Today</h2>
        <p className='m-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi temporibus tempora accusantium? Assumenda, a aperiam consequatur rem sed porro doloribus?
        </p>
    </div>
  </div>

  </div>
</div>
    </header>
  )
}

export default Showcase
