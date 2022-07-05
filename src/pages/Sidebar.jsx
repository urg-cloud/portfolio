import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { FaHome, FaUser, FaFileAlt ,FaEnvelope,FaGripHorizontal} from "react-icons/fa";

const Sidebar =({children})  =>{

    const menuItem= [
        {
                path: "/",
                name:"Home",
                icon:<FaHome></FaHome>
        },

        {
            path: "/about",
            name:"About",
            icon:<FaUser></FaUser>
        
        },
        {
            path: "/service",
            name:"Service",
            icon:<FaFileAlt></FaFileAlt>
         },
         {
            path: "/skills",
            name:"Skills",
            icon:<FaFileAlt></FaFileAlt>
         },

         {
            path: "/contact",
            name:"Contact",
            icon:<FaEnvelope></FaEnvelope>
         },

    ]
  return (
    <div className='container'>
        <div className='sidebar'>
            {
                menuItem.map((item ,index) =>(
                    <Link to = {item.path} key={index} className="link" activeclassName="active" >  
                    <div className='icon'> {item.icon}</div>
                    <div className='link_text'> {item.name}</div>
                    </Link>
                ))
            }
        
        </div>
        <main>{children}</main>


    </div>
  )
}

export default Sidebar