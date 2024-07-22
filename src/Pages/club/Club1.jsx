import React from 'react'
import { Link } from 'react-router-dom'

function Club1() {
  return (

    <div className="">
    <div className=' flex  pt-20  max-w-[1400px] mx-auto flex-col gap-5 items-center justify-center xl:h-auto xl:p-40 lg:h-screen'>
<p className="h  atomicage text-[#69AF00]">CLUBS</p>

<div className="text-3xl text-center text-[#69AF00] exo font-bold  ">
Enjoy the Advantages: Benefit from exclusive, fully<br/> customizable and sustainable orders <br/>
Airdrops, Events, Jewelry, Textiles, <br/>
Tournaments, trips</div>
   <Link to="/contact"> <button className=" bg-green-500 mx-auto exo rounded-full px-3 py-1 font-bold text-white transition-all ease-linear duration-200 hover:scale-105 ">Contact Now</button></Link>
    </div>
    
    </div>
  )
}

export default Club1