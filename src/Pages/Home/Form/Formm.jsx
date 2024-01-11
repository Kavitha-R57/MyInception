import React from 'react'

import '../../../Pages/CSS/form.css'


function Formm() {
  return (
    <div className='form1'>
      
      <h3> Enquire Now</h3>
      
      <div className='form'>
      <div>
      <label> Username:  </label> </div><br/> 
        <input type="text" id='uname' name="username" placeholder='Enter Your Name' /> <br/> <br/>

        <div><label> E-mail: </label></div> <br/>
        <input type="text" id='email' name="name" placeholder='Enter Your Mail id' /><br/> <br/>

        <div><label> Phone No: </label></div> <br/>
        <input type="text" id='phnum' name="name"  placeholder='Enter Your Phone Number'/> <br/><br/>

        <div className='select-option'><select>
          <option value="option"> Qualification</option> <br/><br/>
          <option value="be"> BE</option>
          <option value="btech"> B.Tech</option>
          <option value="bsc"> B.Sc</option>
          <option value="msc"> MSC</option>
          <option value="mca"> MCA</option>
          <option value="bcs"> BCA</option>
          <option value="bcom"> B.Com</option>
          <option value="bba"> BBA</option>
          <option value="ba">BA </option>
          <option value=""> </option>
          <option value=""> </option>
          <option value=""> </option>
         </select><br/><br/></div>
 
         <div>
          <button className='submitbtn'> Submit </button>
          {/* <input className='submitbtn' type="submit" value="Submit" /> */}
         </div>
        </div>
    </div>
  )
}

export default Formm
