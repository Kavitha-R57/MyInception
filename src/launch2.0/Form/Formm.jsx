import React from 'react'
import '../css/form.css';


function Formm() {
  return (
    <div className='form1'>
      <div className='form'>
      <h3> Enquire Now</h3>
      
      <form>
      
      <label> Username:
        <input type="text" id='uname' name="username" placeholder='Enter Your Name' /></label> <br/><br/>
      <label> E-mail:
        <input type="text" id='email' name="name" placeholder='Enter Your Mail id' /></label> <br/><br/>
      <label> Phone No:
        <input type="text" id='phnum' name="name"  placeholder='Enter Your Phone Number'/></label> <br/> <br/><br/>
        <select>
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
         </select><br/><br/>
 
        <input className='submitbtn' type="submit" value="Submit" />
        </form> </div>
    </div>
  )
}

export default Formm
