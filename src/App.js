import React from 'react';
import Formm from './Pages/Home/Form/Formm';
import Marquee from './Pages/Home/Marquee/Marquee';
import Animate from '../src/Pages/Home/Animation/Animate';
import Services from '../src/Pages/Services/Services';
import Serv from '../src/Pages/Services/Serv';
// import Ourprocess from '../src/Pages/Services/Ourprocess';

import Contactus from './Pages/Contactus/Contactus';





function App() {
  return (
    <div>
    <div >
      <Formm/>
      <Animate/> 
      <Marquee/>
      <Services/>  
      <Serv />     
      {/* <Ourprocess/> */}
     
      <Contactus/>
  
      </div>
    
    </div>
    
  );
}

export default App;