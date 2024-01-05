import React, { useState } from 'react'
import '../contactus/contact.css'
import { ImFacebook2 } from "react-icons/im";
// import { SlSocialTwitter } from "react-icons/sl";
import { RxInstagramLogo } from "react-icons/rx";
// import { AiOutlineYoutube } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
// import { FaGooglePlusG } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";


function Contact() {

  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [phoneNumber, setphoneNumber] = useState('');
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);


  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(newEmail))};



    const handlePhoneNumberChange = (e) => {
      const newPhone = e.target.value;
      setphoneNumber(newPhone);
      const phonRegex = /^\d{10}$/;
      setIsValidPhoneNumber(phonRegex.test(newPhone))};
  


  return (
    <div className='contactpg'>      
      
      <div className='contact'>        
         <h1> Let's Have A Coffee </h1>
            <div className='user'>   
                <div className='row1'>
                  <input type="text" name="username" class="uname" placeholder="Name *" /> 
                  <input type="tel" value={phoneNumber} onChange={handlePhoneNumberChange} class="cphone" placeholder="Phone Number *"/>
                  {
                    !isValidPhoneNumber && <p style={{color: 'red'}}>Please enter a valid Phone Number.</p>
                  }                
                </div><br/>

                <div className='row2'>          
                  <input type="text" id='email' class="email" name="email" value={email} onChange={handleEmailChange} placeholder="Email Id *"/>
                  {
                    !isValidEmail && <p style={{color: 'red'}}>Please enter a valid email address.</p>
                  }
                  <input type="text" name="company" class="companyname" placeholder="Company Name *"/> 


                </div>
            </div> <br/> <br/>

            

            {/*
            <label> Services * </label>
             <div className='services_check'>  
              <div className='services1'>
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
                      <input type="checkbox"  class="check"/>Online Reputation Management  
                    </label>   
              </div>     
               <div className='services2'>      
                    <label class="checkbox-inline">
                      <input type="checkbox" class="check"/>Digital Brand Development
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
            </div>   &nbsp; */}
            


                 <textarea class="form-control" name="message" id="message" placeholder="Please enter your message" maxLength={500} rows={1}></textarea>
                 <br/><br/>
                 <h4> Response Times:</h4>
            <p>Do you have a specific inquiry or request? Our convenient contact form allows you to send us a message, and we will respond promptly</p>

      </div>

      <div className='map'>
          <h3> Head Office</h3>
          <p>
             No # 4/ 18 Shiny Tech park,<br/>Poonamallee Road, Ekkattuthangal<br/> Chennai - 600032. <br/>
             <MdOutlineMail />support@myinceptiontech.co.in <br/>
             <MdOutlinePhoneInTalk /> +91 9884792981<br/> <MdOutlinePhoneInTalk /> +91 9176777890
          </p>
                           
              <h3> Follows: </h3>              
              <ul className='list-icon'>
                <li><a href='https://www.facebook.com/profile.phpid=100090945695991&mibextid=ZbWKwL'>  <ImFacebook2 /> </a> </li>
                <li><a href= 'MyInception Tech] [https://www.linkedin.com/company/myinception-tech/'><FaLinkedinIn />  </a> </li>
                <li><a href='https://instagram.com/myinception_tech?igshid=NGVhN2U2NjQ0Yg== '>  <RxInstagramLogo /> </a></li>
                {/* <li><a href='https://Google.com/'>  <FaGooglePlusG /> </a></li> 
                <li><a href='https://twitter.com/'>  <SlSocialTwitter /> </a> </li>
                <li><a href='https://Youtube.com/'> <AiOutlineYoutube /></a> </li> */}
              </ul>    
      </div>


    </div>
  );
}

export default Contact;




  
