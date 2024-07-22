import React from 'react'
import First from './First'
import bgabout from "../../assets/images/bgabout.svg"
import Second from './Second'
import Third from './Third'
import Fourth from './Fourth'
import Last from './Last'
import Timeline from './Timeline'

function AboutMain() {
  return (
    <div 
     style={{
        backgroundImage: `url(${bgabout})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',


    }}
    
    className=' bg-fixed pt-[100px]  overflow-x-hidden   lg:pt-16'>


<First/>

<Timeline/>
<Second/>
<Third/>
<Fourth/>
<Last/>

        

    </div>
  )
}

export default AboutMain