import hitory from '../../../public/img/tech-hystory.jpg'
const History = () => {
  return (
    <div className='relative mb-20 h-full
    max-md:mb-10'>
      <h1 className='text-center font-bold text-5xl my-5'>History</h1>
      <div className='flex w-3/5 mx-auto relative 
      max-md:w-full
      max-md:block'>
      <img src={hitory} alt="history-tech" className='w-[600px] relative z-10
      max-md:w-full
      '/>
      <div className='bg-white w-[600px] h-[400px] absolute mx-[45%] my-[5%] z-1
      max-md:relative
      max-md:m-0
      max-md:w-full
      max-md:h-full
      '>
      <div className='text-center text-black  m-[100px]
      max-md:m-0
      max-md:py-12'>
      <h2 className='m-2 font-bold text-3xl
      max-md:m-0
      '>History</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ut reiciendis, maiores facilis exercitationem quam libero. Mollitia ipsam odio eveniet ipsa dolorum expedita blanditiis? Aperiam vero iste tenetur officiis sunt dolorem cumque. Alias quo quisquam voluptatum quam sit. Enim, repellendus. Dicta neque sapiente tempora dolorum sit amet omnis consectetur eaque!</p>
      </div>
      </div>
    </div>
    </div>
  )
}

export default History
