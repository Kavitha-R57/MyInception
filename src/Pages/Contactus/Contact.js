import React from 'react';
import '../../Pages/Contactus/contact.css';
import { ImFacebook2 } from "react-icons/im";
import { RxInstagramLogo } from "react-icons/rx";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { align } from '@progress/kendo-drawing';
// import { FaGooglePlusG } from "react-icons/fa";
// import { SlSocialTwitter } from "react-icons/sl";
// import { AiOutlineYoutube } from "react-icons/ai";
// import '../contactus/contact.css'

const Contact = () => {

  // const center = {
  //   lat: 12.8996,
  //   lng: 80.2209, 
  // };
  // const libraries = ['places'];
  // const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey: '  ',
  //   // libraries: ['places'],
  //   libraries: libraries,
  // });
  // if (loadError) {
  //   return <div>Error loading maps</div>;
  // }
  // if (!isLoaded) {
  //   return <div>Loading maps</div>;
  // }
  // const mapContainerStyle = {
  //   width: '80%',
  //   height: '70vh',
  // };
  

    

  // const [email, setEmail] = useState('');
  // const [isValidEmail, setIsValidEmail] = useState(true);
  // const [phoneNumber, setphoneNumber] = useState('');
  // const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);

  // const handleEmailChange = (event) => {
  //   const newEmail = event.target.value;
  //   setEmail(newEmail);
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   setIsValidEmail(emailRegex.test(newEmail))};

  //   const handlePhoneNumberChange = (e) => {
  //     const newPhone = e.target.value;
  //     setphoneNumber(newPhone);
  //     const phonRegex = /^\d{10}$/;
  //     setIsValidPhoneNumber(phonRegex.test(newPhone))};
  


  return (
    <div className='contactpg'>    
      <div className='contact'> 
      <h1 className='contactus'>Contact Us</h1>       
         <h2> Let's Have A Coffee </h2>
            <div className='user'>   
                {/* <div className='row1'>
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
                </div> */}
                 {/* <textarea class="form-control" name="message" id="message" placeholder="Please enter your message" maxLength={500} rows={1}></textarea>
                 <br/><br/>
                <br/> <br/>
            <button>Submit</button>
             */}
             

             {/* <div>  */}
                {/* <GoogleMap mapContainerStyle = {mapContainerStyle} zoom={10} center={center}>
                    <Marker position ={center}/>          
                </GoogleMap> */}



             
              {/* </div> */}

            
              <div >
                <div className='googlemap'>
        <iframe className='gmap' src= "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31097.82701892824!2d80.2189834!3d13.0211237!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528a74eb9a72fb%3A0x866956395a402318!2sMyInception%20Tech!5e0!3m2!1sen!2sin!4v1704798384850!5m2!1sen!2sin">

        </iframe>
        </div>




             </div></div> 

                
        <h4> Response Times:</h4>
          <p>Do you have a specific inquiry or request? Our convenient contact form allows you to send us a message, and we will respond promptly</p>

      </div>

      <div className='addreess'>
          <h3> Head Office</h3>
          <h4>MyInception Tech</h4>  
          <p>
             No # 4/ 18 Shiny Tech park,<br/>Poonamallee Road, Ekkat  tuthangal<br/> Chennai - 600032. <br/>
             <MdOutlineMail />support@myinceptiontech.co.in <br/>
             <MdOutlinePhoneInTalk /> +91 9884792981<br/> <MdOutlinePhoneInTalk /> +91 9176777890
          </p>
             
      </div>
      <div>            
              <h3> Follows: </h3>    
                      
              <ul className='list-icon'>
                <li className='icons fb'><a href='https://www.facebook.com/profile.phpid=100090945695991&mibextid=ZbWKwL'>  <ImFacebook2 /> </a> </li>
                <li className='icons linkedin'><a href= 'MyInception Tech] [https://www.linkedin.com/company/myinception-tech/'><FaLinkedinIn />  </a> </li>
                <li className='icons instagram'><a href='https://instagram.com/myinception_tech?igshid=NGVhN2U2NjQ0Yg== '>  <RxInstagramLogo /> </a></li>
                {/* <li><a href='https://Google.com/'>  <FaGooglePlusG /> </a></li> 
                <li><a href='https://twitter.com/'>  <SlSocialTwitter /> </a> </li>
                <li><a href='https://Youtube.com/'> <AiOutlineYoutube /></a> </li> */}
              </ul>  </div>
         

    </div>
    
  );
}

export default Contact;





