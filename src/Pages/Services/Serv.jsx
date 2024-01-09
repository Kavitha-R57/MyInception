import React, { useState } from 'react'
import CallCenter from '../Services/CallCenter';
import '../../Pages/Services/serv.css'
import { RiUserSettingsFill } from "react-icons/ri";
import { GiGlobe } from "react-icons/gi";
import { FaPersonBooth } from "react-icons/fa6";
import { FaPersonChalkboard } from "react-icons/fa6";
import { MdComputer } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
// import ServRouter from '../Services/ServRouter';
// // import { BrowserRouter as Link, Switch} from 'react-router-dom';
// import {Link}  from 'react-router-dom';
// import {Switch}  from 'react-router-dom';
import myObj from '../Services/CallCenter'




const Serv = () => {
    const [modal, setModal] = useState(false);
    const toggleModal = () =>{
        setModal(!modal)
    };
    // if(modal){

    // }

   
    const newObj =[
        {
            icon:<FaPersonBooth />,
            heading:"Placement Support",
            content:'MyInception Tech is committed to your success beyond training. Our placement support services are designed to bridge the gap between your training journey and your dream job. We understand that the transition from training to the workplace can be a critical phase, and we are here to ensure a smooth and successful transition ...',
        },
        {
            icon:<FaPersonChalkboard />,
            heading:"Training Programs",
            content:"MyInception Tech's meticulously crafted training programs are tailored to empower individuals like you with the knowledge and skills essential to thrive in the ever-evolving technology landscape.Whether you're aspiring to become a proficient IT professional or aiming to enhance your existing expertise, our training programs serve as your pathway to excellence, guiding you toward mastery ...",
        },
        {
            icon:<RiUserSettingsFill />,
            heading:"Staffing Solutions",
            content: "MyInception Tech recruitment services are dedicated to bridging the gap between talented professionals and rewarding career opportunities. When you choose to partner with us for your recruitment needs, you unlock a range of benefits that are designed to enhance your organization's success ....",

        },
           {
           
            icon:<FaComputer />,
            heading:"Call Center/BPO Services",
            content:'MyInception Tech excels in providing exceptional Call Center/BPO services tailored to diverse industry needs. Our dedicated teams handle customer interactions with finesse and expertise, ensuring high-quality service, customer satisfaction, and business efficiency ....',

        },  
        {
            icon:<MdComputer />,
            heading:"Software Development",
            content:'MyInception Tech leads the way in innovative Software Development, offering tailored solutions in Machine Learning, Mobile Applications, and Web Development ....',
        },
     
        {
           
            icon:<GiGlobe />,
            heading:"Data Annotation",
            content:"MyInception Tech specializes in providing precise data annotations vital for machine learning algorithms. Our expert teams ensure accuracy and reliability, whether it's annotating images, videos, or other forms of data. Elevate your AI models' learning capabilities with our top-notch annotations ....",
        } 
    ]
  return (  

    <div className='container'> {
        newObj.map((item,index) =>(
        <div key= {index} className='contain' >
             <p className='icon'>{item.icon} </p>
             <h4 className='heading'>{item.heading}</h4>
             <p className='services_description'>{item.content}</p>    <br/>  


                              
                <button onClick={toggleModal} className='btn-modal'> Read More   </button>
                
                {modal && (
                    <div className='modal'>
                        <div onClick={toggleModal} className='overlay'> 
                        <div className='modal-contant'>
                    {
                        myObj.map((item, index)=>
                        <div key={index}> 
                        <h1>{item.heading}</h1>
                        <p>{item.description}</p>
                        </div>
                        
                        )
                    }
                   

       
                        


                            
                        </div> </div>
                    </div>
                )}
               

               <div>
                <div className='modal-content'>
                <button onClick={toggleModal} className='close-modal'> close   </button></div></div>

              
                {/* <div class="card-bottom" ><a href="">Read More 
                        <i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
                </div>  */}
                   {/* <a href='' className='readmore'>Read More</a>         */}
                {/* <Link to={`/${item.heading}`} className='readmore' > Read More </Link>
                <Link to='Training'> Read More</Link> */}
                
        </div>))} 
     
     
    </div>
  )
}

export default Serv;