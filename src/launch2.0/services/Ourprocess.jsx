import React from 'react'
import '../services/serv.css'
import { TfiCup } from "react-icons/tfi";
import { PiNotepadLight } from "react-icons/pi";
import { IoPeople } from "react-icons/io5";
import { TbSettingsStar } from "react-icons/tb";
import { FaPersonMilitaryPointing } from "react-icons/fa6";
import { FaFileSignature } from "react-icons/fa6";

const Ourprocess = () => {

  const newObjec  = [
      {
        icon:<FaPersonMilitaryPointing />,
        heading:"Requirement Analysis",
      },
      {    
        icon:<FaFileSignature />,
        heading: "Project Allocation"
      },
    {
        icon:<IoPeople />,
        heading:"Team Match-up",
      
    },
    {
      icon:<TfiCup />,
      heading:"Long-term relationship",
    },
    {    
      icon:<PiNotepadLight />,
      heading: "Effect Analysis",
    },
  {
      icon:<TbSettingsStar />,
      heading:"Project implementation",
    
  }]


  return (
    <div className='process'>
    
    <h1 className='our_procesh1'>Our Process</h1>
    <div className='progress'>{
        newObjec.map((item,index) =>(
        <div key= {index} className='progresss' >
                <p className='icon2'>{item.icon} </p>
                <h4 className='headingg'>{item.heading}</h4>
                         
        </div>))
       }   
     
  
    </div>

     
    </div>
  )
}

export default Ourprocess;
