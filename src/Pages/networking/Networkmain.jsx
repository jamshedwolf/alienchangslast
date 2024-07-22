import React from 'react'
import Network1 from './Network1'
import Network2 from './Network2'
import Network3 from './Network3'

import netbg from "../../assets/images/netbg.svg";
import Network4 from './Network4';
import Network5 from './Network5';
import Network6 from './Network6';
import Network7 from './Network7';



function Networkmain() {
  return (
    <div style={{
        backgroundImage: `url(${netbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',


    }}
    
    className=' bg-fixed'>
<Network1/>
<Network2/>

<Network3/>
<Network4/>
<Network5/>
<Network6/>
<Network7/>


    </div>
  )
}

export default Networkmain