import React from 'react'
import './about.css';
import pp  from './images/pp.png';

function About() {
  return (
    <div className='about' id='about'>
    
      <div className='about-container'  >
            <h4 className='about-title'>About Me</h4>

            <div className='about-dot'>
                    <span className="dot green"></span>
                    <span className="dot blue"></span>
                    <span className="dot pink"></span>
            </div>

            <div className='about-content'>

            <div className=' col left-col'>
                <p className='intro'>
                Hi, I am Nisha from Nepal and would like to introduce myself as Front End Developer.  
                <p className='sub'>Get a website that grows your business.</p>
                A passionate Front End developer having an experience of building web application 
                with Javascript, Reactjs, Html, css and some other libraries and framework.
                </p>

                {/* <p>
                Hi, I am Nisha from Nepal and would like to introduce myself as Front End Developer.  
                Get a website that grows your business.
                A passionate Front End developer having an experience of building web application 
                with Javascript, Reactjs, Html, css and some other libraries and framework.
                </p> */}
            </div>

            
              <div className=' col right-col'>
            <img  src= {pp} className='img'></img>

              </div>
            </div>
           
     </div>

    </div>
  )
}

export default About