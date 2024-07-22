import React from 'react'
import Home from './Home'
import Second from './Second'
import Third from './Third'
import Fourth from './Fourth'

import CustomSlider from './CustomSlider'
import Accordin from './Accordin'
import Footer from './Footer'
import bg from "../../assets/images/bghome.svg"


function Main() {
  return (
    <div 
      style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',


        }}
     className='w-full bg-fixed '>
      <Home />
      <Second />
      <Third />
      <Fourth />
      <CustomSlider />
      <Accordin />
      {/* <Footer/> */}

    </div>
  )
}

export default Main