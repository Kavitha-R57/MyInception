import React from 'react';
import Formm from './launch2.0/Form/Formm';
import Marquee from './launch2.0/Marquee/Marquee';
import Animate from './launch2.0/Animation/Animate';
import Services from '../src/launch2.0/services/Services'
import Serv from '../src/launch2.0/services/Serv'
import Ourprocess from './launch2.0/services/Ourprocess';

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
  
      </div>
    
    </div>
    
  );
}

export default App;