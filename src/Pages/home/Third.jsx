import React from 'react'
import bgmilk from "../../assets/images/milky.svg"
import bees from "../../assets/images/bees.svg"

function Third() {
  return (
    <div   style={{ 
         backgroundImage: `url(${bgmilk})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    }} className='flex flex-col py-20 justify-center items-center h-auto  mx-auto lg:py-20  xl:py-20'>

    
<div className=" text-center flex-col gap-6 px-5 lg:text-3xl flex justify-center exo items-center text-white ">
<div className="text-5xl   atomicage p-3 rounded-lg bg-black text-[#ECDD91] ">Financial Freedom</div>
    Any Individual or Profesional can Understand the <br/>ADVANTAGES of Digital Money
· Impartial Money that does not <br/>discriminate, Decentraliced Currencies, Stable without<br/> Volatility, As Well As Safe Reserves of Values.
Access with Crypto,<br/> NFTs, Tokens to Order & Generate All Types of Experiences, <br/>Products & Services According to your Demands Instantly...</div>
     

<img src={bees} alt="" className="lg:w-40  w-20 mt-10 lg:mt-20 " />
    </div>
    
  )
}

export default Third