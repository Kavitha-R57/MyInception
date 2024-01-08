import React from 'react';
import Formm from './Pages/Home/Form/Formm';
import Marquee from './Pages/Home/Marquee/Marquee';
import Animate from '../src/Pages/Home/Animation/Animate';
import Services from '../src/Pages/Services/Services';
import Serv from '../src/Pages/Services/Serv';
import Ourprocess from '../src/Pages/Services/Ourprocess';
import Contact from '../src/Pages/Contactus/Contact';



function App() {
  return (
    <div>
    <div >
      <Formm/>
      <Animate/> 
      <Marquee/>
      <Services/>  
      <Serv />
      <Ourprocess/>
      <Contact/>
  
      </div>
    
    </div>
    
  );
}

export default App;