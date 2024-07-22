import React from 'react'
import logo1 from "./logoc1.svg"
import logo2 from "./logoc2.svg"
import logo3 from "./logoc3.svg"

function Club3() {
  return (
    <div className='flex items-center exo mt-10 justify-center'>
<div className="max-w-[1400px] px-5">
<div className="flex  gap-5 flex-row  ">
    <img src={logo1} alt="" className="lg:w-[200px] w-[80px] py-4 max-w-[900px] transition-all ease-linear duration-200 hover:scale-105" />
<img src={logo2} alt="" className="lg:w-[200px] w-[80px] py-4 max-w-[900px] transition-all ease-linear duration-200 hover:scale-105" />
<img src={logo3} alt="" className="lg:w-[200px] w-[80px] py-4 max-w-[900px] transition-all ease-linear duration-200 hover:scale-105" />
</div>

</div>


    </div>
  )
}

export default Club3