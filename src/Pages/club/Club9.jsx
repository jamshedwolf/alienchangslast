import React from 'react'
import svgs from "./svgs.svg"
import svgs2 from "./svgs2.svg"
import sports from "./sports.svg"

function Club9() {
  return (
    <div className='flex items-center justify-center '>

<div className="max-w-[1400px]   "><div className="flex flex-col items-center gap-4 justify-center ">
    <p className="h text-[#69AF00] font-bold exo ">GameFi</p>
    <p className="p-2 flex-col gap-2" >
        <img src={svgs} alt="" className="lg:w-[900px] w-[300px] py-4 max-w-[900px]" />
        <img src={svgs2} alt="" className="lg:w-[900px] w-[300px] py-4 max-w-[900px]" />
    </p>

</div>
<div className="flex flex-col items-center gap-4 justify-center ">
    <p className="h text-[#69AF00] font-bold exo ">E-Sports</p>
    <p className="p-2 flex-col gap-2" >
        <img src={sports} alt="" className="lg:w-[900px] w-[300px] py-4 max-w-[900px]" />
        
    </p>

</div>


</div>




    </div>
  )
}

export default Club9