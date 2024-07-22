import React from 'react'
import PrivacyPolicy from './PrivacyPolicy'
import bg from "../../assets/images/bghome.svg"


function Mainp() {
  return (
    <div
    style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',


    }}
 className='w-full z-40  lg:pt-40 pt-20

  bg-fixed '
    
    
   >


        <PrivacyPolicy/>
    </div>
  )
}

export default Mainp