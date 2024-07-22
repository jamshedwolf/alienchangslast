import React from 'react'
import bg from "../../assets/images/contact.svg"
import First from '../about/First'
import Contact from './Contact1'
import Contact2 from './Contact2'
import Contact3 from './Contact3'
import Date from './Date'

function Maincontact() {
  return (
    <div   style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',


    }} 
     className='  bg-fixed'   > 

<Contact/>
<Contact2/>
<Contact3/>
<Date/>


    </div>
  )
}

export default Maincontact