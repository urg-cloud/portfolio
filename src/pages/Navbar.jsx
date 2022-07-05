import React from 'react'
import './navbar.css'
import { FaFacebookF, FaInstagram,  FaLinkedin, FaTwitter } from 'react-icons/fa';
import {useState} from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

import { FaHome, FaUser, FaFileAlt ,FaEnvelope,FaGripHorizontal} from "react-icons/fa";

function Navbar() {
      const [isHovering, setIsHovering] = useState(false);
      const [showMediaIcons, setShowMediaIcons] = useState(false);

      const handleMouseOver = () => {
        setIsHovering(true);
      };
    
      const handleMouseOut = () => {
        setIsHovering(false);
      };
  return (
    <>
         <header id="header"  className="headers">

                    <nav id="navbar"  className="nav-menu">
                    
                       
                    <div className="logo">
                              <h2>
                              Nisha Poudel
                              </h2>
                    </div>


                    <div className='menu-link'>
                    <ul>
                              <li>
                              {/* <Link to="/">Home</Link> */}
                              <a>Home</a>
                              </li>
                              <li>
                              <Link to="/about">about</Link>
                              </li>
                              <li>
                              <Link to="/service">services</Link>
                              </li>
                              <li>
                              <Link to="/contact">contact</Link>
                              </li>
                         </ul>

                    </div>

                    <div className="social-media">
                                <ul className="social-media-desktop">
                   <li><a href="https://www.facebook.com/usernishap/"  className="contact-icon">
                      <i > <FaFacebookF className='icon'></FaFacebookF></i></a>
                    </li>
   
                    <li><a href="https://www.instagram.com/nishaaaa_poudel/"className="contact-icon">
                      <i > <FaInstagram className='icon'></FaInstagram></i></a>
                    </li>
                    <li><a href="https://www.linkedin.com/in/nisha-poudel-27360a188/"  className="contact-icon">
                      <i> <FaLinkedin className='icon'></FaLinkedin></i></a>
                    </li>
                    <li><a href="https://twitter.com/nishapo80929425"className="contact-icon">
                      <i > <FaTwitter className='icon'></FaTwitter></i></a>
                    </li>    
                         </ul>
          </div>

                  {/* hamburget menu start  */}
                             <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                        <GiHamburgerMenu />
                        </a>
                        </div> 
        
{/*                     
                           <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='menu' id='first-menu'>

                               <div className="icon-wrapper active"><FaHome className='icon'></FaHome> 
                             
                                    
                                </div>
                                {isHovering && <p className='title'>Home</p>}
                              
                         </div>
                                
                            
                              
                         

                         <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='menu'>
                               <div className="icon-wrapper"><FaUser className='icon'></FaUser>  </div>
                               {isHovering && <p className='title'>About</p>}
                              
                         </div>

                        

                         <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='menu'>
                               <div className="icon-wrapper"><FaFileAlt className='icon'></FaFileAlt>  </div>
                               {isHovering && <p className='title'>Resume</p>}
                           
                         </div>

                         <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='menu'>
                               <div className="icon-wrapper"><FaGripHorizontal className='icon'></FaGripHorizontal>  </div>
                               {isHovering && <p className='title'>Skills</p>}
                              
                         </div>

                         <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}  className='menu'>
                               <div className="icon-wrapper"><FaGripHorizontal className='icon'></FaGripHorizontal>  </div>
                               {isHovering && <p className='title'>Service</p>}
                             
                         </div>

                         <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='menu'>
                               <div className="icon-wrapper"><FaEnvelope className='icon'></FaEnvelope>  </div>
                               {isHovering && <p className='title'>Contact</p>}
                           
                         </div> */}

{/*                        
                        <li><a href="#about"  className=" dot nav-link"><FaUser className='icon'></FaUser> </a> <div>About</div></li>
                        <li><a href="#resume"  className=" dot nav-link "><FaRegFileAlt></FaRegFileAlt></a> <div>Resume</div></li>
                        <li><a href="#portfolio"  className=" dot nav-link "> <FaRegFileAlt></FaRegFileAlt></a> <div>Skills</div></li>
                        <li><a href="#services"  className=" dot nav-link "><FaGripHorizontal></FaGripHorizontal> </a> <div>Services</div></li>
                        <li><a href="#contact"  className=" dot nav-link "><FaEnvelope></FaEnvelope> </a> <div>Contact</div></li> */}
                    
                    </nav>

</header>
    </>
  )
}

export default Navbar