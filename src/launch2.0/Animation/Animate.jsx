import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import '../css/animate.css'




export default function Animate() {
    const[countterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit= {() => setCounterOn(false)}>   
    <div className='animatestyle'>
        <div className='scroll1'>
      <h1 className='first'>
        {countterOn && <CountUp start={0} end={100} duration={2} delay={0}/>}
      </h1>
      <h1 className='second'>
        {countterOn && <CountUp start={0} end={100} duration={2} delay={0}/>}
      </h1>
      <h1 className='third'>
        {countterOn && <CountUp start={0} end={100} duration={2} delay={0}/>}
      </h1>
      <h1 className='fourth'>
        {countterOn && <CountUp start={0} end={100} duration={2} delay={0}/>}
      </h1>

      </div>
    </div>
    </ScrollTrigger>
  )
}
