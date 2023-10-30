import hitory from '../../../public/img/tech-hystory.webp'
const History = () => {
  return (
    <div className='relative mb-20 h-full
    max-md:mb-10' id='historia'>
      <h1 className='text-center font-bold text-5xl my-4'>Diferencia Industrial Tech</h1>
      <div className='flex w-3/5 mx-auto relative 
      max-md:w-full
      max-md:block 
      max-xl:block'>
      <img src={hitory} alt="history-tech" className='w-[600px] relative z-10
      max-md:w-full
      '/>
      <div className='bg-white w-[600px] h-[400px] absolute mx-[50%] my-[5%] z-1
      max-[1700px]:mx-[55%]
      max-xl:relative
      max-xl:m-0
      max-xl:w-[520px]
      max-md:w-full
      max-md:h-full
      '>
      <div className='text-center text-black  m-[100px]
      max-xl:m-[10px]
      max-xl:pt-[30px]
      max-md:m-0
      max-md:py-12'>
      <h2 className='m-2 font-bold text-3xl
      max-md:m-0
      '>Innovación y Compromiso</h2>
      <p>Lo que nos distingue es nuestra dedicación a la innovación constante. Estamos constantemente explorando nuevas tecnologías y técnicas para asegurarnos de que nuestros clientes obtengan moldes de última generación que cumplan con los estándares más exigentes.</p>
      </div>
      </div>
    </div>
    </div>
  )
}

export default History
