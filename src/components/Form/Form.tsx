import  emailjs from "@emailjs/browser";
import './Form.css'
import { useState } from "react";

interface FormData {
  name: string;
  apellido: string;
  email: string;
  asunto: string;
  message: string;
}
const Form = () => {
  const[show,setShow]=useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    apellido: '',
    email: '',
    asunto: '',
    message: ''
  });
  const handleSubmit=(e:any)=>{
    e.preventDefault();

 emailjs.sendForm('service_dlde0ja', 'template_h2m1dlz', e.target, 'qFmt5K5p5LJ2gQosD')
      .then((response) => console.log('Correo enviado:', response))
      .catch((error) => console.log('Error al enviar el correo:', error)); 
 
      setFormData({
        name: '',
        apellido: '',
        email: '',
        asunto: '',
        message: ''
      });
      setShow(!show);
  }
  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className='text-white block w-[400px]'>
        <form className="form-mail " onSubmit={handleSubmit}>
        <div className="text-area w-50 m-auto">
        <div className="container-form flex items-center">
        <ul>
          <li className="">
            <label> Nombre</label>
            <input type="text" name='name'  value={formData.name}
            onChange={handleChange} required/>
          </li>
          <li>
          <label> Apellido</label>
            <input type="text" name='apellido' value={formData.apellido}
            onChange={handleChange} required/>
          </li>
        </ul>

        <ul>
          <li>
          <label> Email</label>
              <input type="text" name='email' value={formData.email}
            onChange={handleChange} required/>
          </li>
          <li>
              <label> Asunto</label>
              <input type="text" name='asunto' value={formData.asunto}
            onChange={handleChange} required/>
          </li>
        </ul>
        
        </div>
          <div className=" ">
          <label>Mensaje </label>
           <textarea name="message"   value={formData.message}
            onChange={handleChange}></textarea>
          </div>
        </div>
          <button className="font-bold text-2xl mt-3 mx-2
          hover:text-blue-400 transition-all ease-in" type='submit'>Enviar</button>

          
        </form>

        <div className={`w-full text-center transition-all ease-in ${show? 'opacity-100':'opacity-0'}`}>
        <span > Tu correo se ha enviado</span>
        </div>

    </div>
  )
}

export default Form
