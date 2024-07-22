import React from 'react'
import bgacademy from "../../assets/images/acadbg.svg"
import Academy1 from './Academy1'
import Academy2 from './Academy2'
import Academy3 from './Academy3'
import Academy4 from './Academy4'


function Mainacademy() {
  return (
    <div 
    style={{
      backgroundImage: `url(${bgacademy})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',


  }} className='bg-fixed'
    >  
<Academy1/>
<Academy2/>
<Academy3/>
<Academy4/>

    </div>
  )
}

export default Mainacademy