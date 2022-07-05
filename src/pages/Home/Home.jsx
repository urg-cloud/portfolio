import React from 'react'
import Navbar from '../Navbar'
import Typewriter from "typewriter-effect";
import './home.css'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import About from '../About';
import Project from '../Project';
import Contact from '../Contact';
import Skills from '../Skills';


function Home() {
  return (
   <>
    <div className='home'>
      <div className='home-content'>
      
      <div className='left'>
    
        <h2>Nisha Poudel</h2>
        <h4>
        <Typewriter
            options={{
              strings: ["I'm a  Front End Developer", "I'm a UI/UX Designer"],
              autoStart: true,
              loop: true,
  }}
 
    />
    </h4>
        {/* <h4>
  
        <Typewriter className="types"
  
          onInit={(typewriter)=> {

          typewriter
          
          .typeString("I'm a  Front End Developer")
            
          .pauseFor(1000)
      
          .deleteAll()
          .typeString(" I'm a UI/UX Designer")
          .start();
          }}
          />
          </h4> */}
         

         <div className="btn">
          <a className="resume" href="../pages/Resume/resumeNisha.pdf" download = "resumeNisha.pdf">
             Download Resume
           </a>
          </div>
         

          <div className='social-icons'>
           <a href='https://www.facebook.com/usernishap/'> <FaFacebookF className='icon'></FaFacebookF></a>
           <a href='https://www.instagram.com/nishaaaa_poudel/'><FaInstagram className='icon'></FaInstagram></a> 
           <a href='https://www.linkedin.com/in/nisha-poudel-27360a188/'><FaLinkedin className='icon'></FaLinkedin></a> 
            <a href='https://twitter.com/nishapo80929425'><FaTwitter className='icon'></FaTwitter></a>
          </div>
      </div>

      <div className='right'></div>

    </div>
 
    </div>
<About></About>

<Project></Project>
<Skills></Skills>
<Contact></Contact>
    </>
    
  )

}

export default Home