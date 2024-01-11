import React from 'react';
import '../../Pages/Contactus/contact.css';
import { ImFacebook2 } from "react-icons/im";
import { RxInstagramLogo } from "react-icons/rx";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { LuClock8 } from "react-icons/lu";
import { MdMyLocation } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";


const Contactus = () => {

    return (
    <div className='contactpg'>
         
            <h1 className='contactus'>Get In Touch</h1>             
                    {/* <p>Do you have a specific inquiry or request? Our convenient contact form allows you to send us a message, and we will respond promptly</p>        */}
           <div className='contact'>    
                    <div className='contact1'>      
                        <p><h1 className='comname'><IoHome />MyInception Tech </h1><br/>No # 4/ 18 Shiny Tech park,<br/>Poonamallee Road <br/>Ekkattuthangal<br/> Chennai - 600032. <br/>   
                        <div className='googlemap'> <MdMyLocation />
                                {/* <iframe className='gmap' src= "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31097.82701892824!2d80.2189834!3d13.0211237!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528a74eb9a72fb%3A0x866956395a402318!2sMyInception%20Tech!5e0!3m2!1sen!2sin!4v1704798384850!5m2!1sen!2sin">
                                </iframe>  */}
                                <a target='blank' href='https://www.google.com/maps/place/MyInception+Tech/@13.0196133,80.1984147,17z/data=!3m1!4b1!4m6!3m5!1s0x3a528a74eb9a72fb:0x866956395a402318!8m2!3d13.0196081!4d80.2009896!16s%2Fg%2F11pv9c9m_d?entry=ttu'> 
                                View on Map</a><br/>
                        </div></p>  
                    
                    </div>

                    <div className='contact2'>
                        <p><MdOutlineMail />support@myinceptiontech.co.in <br/><MdOutlinePhoneInTalk /> +91 9884792981<br/> <MdOutlinePhoneInTalk /> +91 9176777890</p>   
                    </div>  
                
                    <div  className='contact3'>                
                         <p>  <h4> Response Times:</h4> <LuClock8 /> Mon to Fri : 9 am - 6 pm <br/> Sat : 10.00 am - 6.30 pm<br/> <span style={{ color: 'red' }}>Sunday : Closed</span> </p>
                    </div>

            </div>
            


            
                <div className='follows'>            
                  <h1 className='headingfollow'> Follows: </h1>                            
                    <ul className='list-icon'>
                        <li className='icons fb'><a href='https://www.facebook.com/profile.phpid=100090945695991&mibextid=ZbWKwL' target="_blank">  <ImFacebook2 /> </a> </li>
                        <li className='icons linkedin'><a href= 'https://www.linkedin.com/company/myinception-tech/' tooltip="linkedin" target="_blank"><FaLinkedinIn />  </a> </li>
                        <li className='icons instagram'><a href='https://instagram.com/myinception_tech?igshid=NGVhN2U2NjQ0Yg== ' tooltip="instagram" target="_blank">  <RxInstagramLogo /> </a></li>
                        <li className='icons phone'> <a href='tel:+919884792981' target="_blank" tooltip="Phone"> <FaPhone /> </a></li>
                    </ul> 
                </div>
                   
           
    </div>   
      );
    }
    
export default Contactus;
