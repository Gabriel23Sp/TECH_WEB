import hitory from '../../../public/img/tech-hystory.jpg'
const History = () => {
  return (
    <div className='relative mb-20 h-[460px]'>
      <h1 className='text-center font-bold text-2xl my-5'>History</h1>
      <div className='flex w-3/5 mx-auto relative'>
      <img src={hitory} alt="history-tech" className='w-[600px] relative z-10'/>
      <div className='bg-white w-[600px] h-[400px] absolute mx-[45%] my-[5%] z-1'>
      <div className='text-center text-black bg-red-950 m-[100px]'>
      <h2 className='m-2 font-bold'>History</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ut reiciendis, maiores facilis exercitationem quam libero. Mollitia ipsam odio eveniet ipsa dolorum expedita blanditiis? Aperiam vero iste tenetur officiis sunt dolorem cumque. Alias quo quisquam voluptatum quam sit. Enim, repellendus. Dicta neque sapiente tempora dolorum sit amet omnis consectetur eaque!</p>
      <a href="#" className='m-2'>Learn More <i className="fas fa-angle-double-right"></i></a>
      </div>
      </div>
    </div>
    </div>
  )
}

export default History
