import React, {useEffect} from 'react'
import './about.css';
import git  from './images/git.png';
import ProjectComponent from './ProjectComponent';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Project() {
  // useEffect( () =>{
  //   AOS.init()

  // }, [])
  useEffect(() => {
    AOS.init({
      // duration : 1000
    });
  }, []);
  return (
    <div  id ="project" className='project'>
        
         <div  className='project-title'>  <h4>Project</h4> </div> 
        <div className='project-container'> 
                    <div className='project-row'>
                      <ProjectComponent aos="fade-up" aos_offset ="100" title="Student Attendence system" hrefs="https://github.com/nishapoudel/Face-Attendance" link =" https://github.com/nishapoudel/Face-Attendance"></ProjectComponent>
                      <ProjectComponent aos="fade-up" aos_offset ="100" title=" ios Calculator" hrefs =" https://github.com/nishapoudel/calculator" link =" https://github.com/nishapoudel/calculator"></ProjectComponent>
                       <ProjectComponent aos="fade-up" aos_offset ="100" title="Dice" hrefs= "https://github.com/nishapoudel/React_Dice" link =" https://github.com/nishapoudel/React_Dice"></ProjectComponent>
                
                            {/* <div className='col-project'>
                                <img  src= {git} className='github'></img>
                                <h5>Student Attendence system</h5>
                               <a>https://github.com/nishapoudel/Face-Attendance</a>
                            </div>
                            <div className='col-project'></div>
                            <div className='col-project'></div> */}


                    </div>
        </div>
    </div>
  )
}

export default Project