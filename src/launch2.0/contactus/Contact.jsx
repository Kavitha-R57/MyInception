import React, { useState } from 'react'
import '../contactus/contact.css'
import { ImFacebook2 } from "react-icons/im";
import { SlSocialTwitter } from "react-icons/sl";
import { RxInstagramLogo } from "react-icons/rx";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";


function Contact() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true)



  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(newEmail))
  }


  return (
    <div className='contactpg'>
      
      
      <div className='contact'>        
         <h4> Let's Have A Coffee </h4>
            <div className='user'>    
                <input type="text" name="username" class="" placeholder="Name *"/>
                <input type="tel" name="user_contact" class="cphone" placeholder="Phone Number *"/>            
                <input type="text" id='email' name="email" value={email} onChange={handleEmailChange} class="" placeholder="Email Id *"/>
                {
                  !isValidEmail && <p style={{color: 'red'}}>Please enter a valid email address.</p>
                }
                <input type="text" name="company" class="company" placeholder="Company Name *"/>  
            </div>

              <div> 
                <label> Services * </label>
              </div>

              <div className='services_check'>
                    <label class="checkbox-inline">
                      <input type="checkbox" class="check"/>Website Designing &amp; Development
                    </label>
                    <label class="checkbox-inline"> 
                       <input type="checkbox" name="services[]" class="check"/>Mobile Apps Designing  &amp; Development 
                    </label>
                    <label class="checkbox-inline">
                        <input type="checkbox" name="services[]" class="check"/>E-Commerce Designing  &amp;  Development
                    </label>
                    <label class="checkbox-inline">
                       <input type="checkbox" name="services[]" class="check"/>Online Reputation Management  
                     </label>                
                     <label class="checkbox-inline">
                        <input type="checkbox" name="services[]" class="check"/>Digital Brand Development
                     </label>
                     <label class="checkbox-inline">
                          <input type="checkbox" name="services[]" class="check"/>Startup Consulting  &amp; Nurturing
                     </label>
                     <label class="checkbox-inline">
                          <input type="checkbox" name="services[]" class="check"/>Software Development
                     </label>                      
                      <label class="checkbox-inline">
                          <input type="checkbox" name="services[]" class="check"/>Identity Designing
                      </label>
                  </div> 
      </div>

      <div className='map'>
          <h4> Head Office</h4>
          <p>
             No # 4/ 18 Shiny Tech park,<br/>Poonamallee Road, Ekkattuthangal<br/> Chennai - 600032
         
          <h5> Follows: </h5>
          <ul className='list-icon'>
            <li><a href='https://www.facebook.com/'>  <ImFacebook2 /> </a> </li>
            <li><a href='https://twitter.com/'>  <SlSocialTwitter /> </a> </li>
            <li><a href='https://Youtube.com/'> <AiOutlineYoutube /></a> </li>
            <li><a href= 'https://Linkedin.com/'><FaLinkedinIn />  </a> </li>
            <li><a href='https://instagram.com/'>  <RxInstagramLogo /> </a></li>
            <li><a href='https://Google.com/'>  <FaGooglePlusG /> </a></li>
          </ul> </p>

          
         
         
         
          
          
      </div>


    </div>
  );
}

export default Contact;




  
