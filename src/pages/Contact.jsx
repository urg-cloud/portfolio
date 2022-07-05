import React, {useState, useEffect} from 'react'
import emailjs from 'emailjs-com'
import { FaPhoneAlt, FaLocationArrow,FaMapMarkerAlt,FaRegEnvelope} from 'react-icons/fa';
import { FaFacebookF, FaInstagram,  FaLinkedin, FaTwitter } from 'react-icons/fa';
import './contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Contact() {
  useEffect(() => {
    AOS.init({
      // duration : 1000
    });
  }, [])

  const [form, setForm] = useState({
    name: '',
    email:'',
    msg:'',
  });

  const InputEvent =(event) => {

    const updatedForm = {...form};
    updatedForm[event.target.name] = event.target.value;

    console.log('Form changed: ', updatedForm);

    // Update state
    setForm(updatedForm);

  };


const formSubmit =(e)=>{
  e.preventDefault();
  emailjs.sendForm(
    'service_a5b67pg',
    'template_znkda4o',
    e.target).then(res=>
      {
          console.log(res);
      }).catch(err=>console.log(err));
 
};

  return (
    <>
   <section id="contact">
  
         <h1 className="section-header">Contact</h1>
  
        <div className="contact-wrapper" >
  
 
    
    <form  data-aos="fade-right" id="contact-form" className="form-horizontal" onSubmit={formSubmit} >
            <div className="form-group">
                <input type="text" className="form-control" id="name" placeholder="NAME"
                 name="name"
                  value={form.name} required
                  onChange={InputEvent} />
              
            </div>

            <div className="form-group"> 
              
                <input type="email" className="form-control" id="email" placeholder="EMAIL"
                 name="email" 
                 value={form.email}
                  required
                  onChange={InputEvent}/>
            </div>

             <textarea className="form-control" rows="10" placeholder="MESSAGE"
              name="msg" required
               value={form.msg}
               onChange={InputEvent}>
                </textarea>
      
            <button className=" send-button" id="submit" type="submit" value="SEND">
              <div className="alt-send-button">
              <FaLocationArrow className='icon-send'></FaLocationArrow>  <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
              </div>
            
            </button>
      
    </form>
    

    
      <div data-aos="fade-right" className="direct-contact-container">

            <ul className="contact-list"> 
              <li className="list-item"> <FaMapMarkerAlt className='icon-contact'></FaMapMarkerAlt><span className="contact-text place">jorpati, kathmandu</span></li>
              
              <li className="list-item"> <FaPhoneAlt className='icon-contact'></FaPhoneAlt><span className="contact-text phone">   <a href="tel:1-212-555-5555" title="Give me a call">9860852000</a></span></li>
           
              <li className="list-item"><FaRegEnvelope className='icon-contact'></FaRegEnvelope><span className="contact-text gmail"><a href="#" title="Send me an email">nishapoudel400@gmail.com</a></span></li>
        
            </ul>

              <hr></hr>
              <ul className="social-media-list">
               
                <div className='social-icons'>
                    <li><a href="https://www.facebook.com/usernishap/"  className="contact-icon">
                      <i > <FaFacebookF className='icons'></FaFacebookF></i></a>
                    </li>
   
                    <li><a href="https://www.instagram.com/nishaaaa_poudel/"className="contact-icon">
                      <i > <FaInstagram className='icons'></FaInstagram></i></a>
                    </li>
                    <li><a href="https://www.linkedin.com/in/nisha-poudel-27360a188/"  className="contact-icon">
                      <i> <FaLinkedin className='icons'></FaLinkedin></i></a>
                    </li>
                    <li><a href="https://twitter.com/nishapo80929425"className="contact-icon">
                      <i > <FaTwitter className='icons'></FaTwitter></i></a>
                    </li>      
                    </div> 
              </ul>
              
          


      </div>
    
  </div>
  <div className='copyright'>
    <p>Copyright © 2022 - Nisha Poudel</p>

  </div>
  
</section>  
  
   
  

    </>
  )
}

export default Contact