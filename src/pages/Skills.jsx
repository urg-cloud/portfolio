
import React ,{useEffect} from 'react'
import './skills.css';
import html5  from './images/html5.png';
import css  from './images/css.png';
import js1  from './images/js1.png';
import bt  from './images/bt.png';
import reacts from './images/reacts.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
 
function Skills() {
  useEffect(() => {
    AOS.init({
      // duration : 1000
    });
  }, [])
  return (
    <>
        <div  id = "skills" className='skills'>
                <div className='skills-title'>
                    <h2>Skills</h2>
                </div>
        <div className='skills-row'>

                   
                  
                    <div  data-aos="zoom-in" className='skills-col'> <img src={html5} className="image"></img></div>
                    <div data-aos="zoom-in" className='skills-col'> <img src={css} className="image"></img></div>
                    <div data-aos="zoom-in"  className='skills-col'>  <img src={js1} className="image"></img></div>
                    <div data-aos="zoom-in"  className='skills-col'>  <img src={bt} className="image"></img></div>
                    <div data-aos="zoom-in" className='skills-col'>  <img src={reacts} className="image"></img></div>

       
      </div>

    </div>
    </>
  )
}

export default Skills
