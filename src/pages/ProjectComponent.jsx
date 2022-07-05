import React from 'react'
import './about.css';
import git  from './images/git.png';
function ProjectComponent(props) {
  return (
    <>
  
                
                <div  data-aos ={props.aos} data-aos-offset = {props.aos_offset}className='col-project'>
                    <img  src= {git} className='github'></img>
                    <h5>{props.title}</h5>
                   <a href= {props.hrefs} target="_git">{props.link}</a>
                </div>
                {/* <div className='col-project'></div>
                <div className='col-project'></div> */}


        
    </>
  )
}

export default ProjectComponent