import React from 'react'
import Club1 from './Club1'
import Club2 from './Club2'
// import bgclub from "../../assets/images/bgclub.svg"
import bg from "./bg.svg"
import Club3 from './Club3'
import Club4 from './Club4'
import Club5 from './Club5'
import Club6 from './Club6'
import Club7 from './Club7'
import Club8 from './Club8'
import Club9 from './Club9'
import Club10 from './Club10'
import Club11 from './Club11'
import Mid from './Mid'
function Clubmain() {
  return (
    <div 
    
    style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',}}

    className='bg-fixed '>

<Club1/>
<Club2/>
<Mid/>
<Club3/>
<Club4/>
<Club5/>
<Club6/>
<Club7/>
<Club8/>
<Club9/>
<Club10/>
<Club11/>






    </div>
  )
}

export default Clubmain