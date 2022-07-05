import React, { useState } from "react";
import "./nav.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { Link } from "react-router-dom";

function Navmenu() {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
         <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>Nisha </span>
            <span>Poudel</span>
           
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              {/* <Link to="/">Home</Link> */}
              <a href="#">Home</a>
              
            </li>
            <li>
              {/* <Link to="about">about</Link> */}
              <a href="#about">About</a>
            </li>
            <li>
              {/* <Link to="project">Project</Link> */}
              <a href="#project">Projects</a>
            </li>
            <li>
              {/* <Link to="skills">Skills</Link> */}
              <a href="#skills">Skills</a>
            </li>
            <li>
              {/* <Link to="contact">contact</Link> */}
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.facebook.com/usernishap/"
                target="_nisha">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/nishaaaa_poudel/"
                target="_nish">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
         
            <li><a href="https://www.linkedin.com/in/nisha-poudel-27360a188/"  >
                      <i> <FaLinkedin className='icon'></FaLinkedin></i></a>
                    </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navmenu