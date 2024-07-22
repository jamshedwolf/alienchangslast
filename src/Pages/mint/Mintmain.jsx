import React from 'react'
import bgmint from './bgmint.svg'
import Mint1 from './Mint1'
import Mint2 from './Mint2'
import Mintlast from './Mintlast'
import Roadmap from './Roadmap'

function Mintmain() {
  return (
    <div
    style={{
        backgroundImage: `url(${bgmint})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',


    }} className='bg-fixed '
    
    >
<Mint1/>
<Mint2/>
<Roadmap/>



    </div>
  )
}

export default Mintmain