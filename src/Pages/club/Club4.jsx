import React from 'react'
import cash from "./cash.png"
import w1 from "./wa.svg"
import w2 from "./w2.svg"
import w3 from "./w3.svg"
import w4 from "./w4.svg"
import w5 from "./w5.svg"
import w6 from "./w6.svg"
import partners from "./partners.svg"
import partners2 from "./partners2.svg"
import m from "./m.svg"

function Club4() {
  return (
    <div  >
        <div className="max-w-[1400px]  mx-auto  flex items-center justify-center p-5">
<img src={cash} alt="" className="lg:w-[900px] exo w-[300px] max-w-[900px]" />
</div>

<div className="">
<p className="h exo text-[#69AF00] font-bold text-center py-5 ">Card Wallets</p>
<p className="flex    justify-center flex-row items-center gap-5"><img src={w1} alt="" className="transition-all ease-linear duration-200 hover:scale-105 lg:w-[100px] w-[30px] py-4 max-w-[100px]" />
<img src={w2} alt="" className="lg:w-[100px] w-[30px] py-4 max-w-[100px] transition-all ease-linear duration-200 hover:scale-105" />
<img src={w3} alt="" className="lg:w-[100px] w-[30px] py-4 max-w-[100px] transition-all ease-linear duration-200 hover:scale-105" />
<img src={w4} alt="" className="lg:w-[100px] w-[30px] py-4 max-w-[100px] transition-all ease-linear duration-200 hover:scale-105" />
<img src={w5} alt="" className="lg:w-[100px] w-[30px] py-4 max-w-[100px] transition-all ease-linear duration-200 hover:scale-105" />
<img src={w6} alt="" className="lg:w-[100px] w-[30px] py-4 max-w-[100px] transition-all ease-linear duration-200 hover:scale-105" />

</p>




</div>
<div className="exoexo ">
<p className="h text-[#69AF00] font-bold text-center py-5 ">Secure Wallets</p>
<p className="flex flex-col  justify-center      items-center gap-5 ">
<img src={partners} alt="" className="lg:w-[900px] w-[200px] py-4 max-w-[900px] " />
<img src={m} alt="" className="lg:w-[900px] w-[200px] py-4 max-w-[900px] " />
<img src={partners2} alt="" className="lg:w-[900px] w-[200px] py-4 max-w-[900px] " />


</p>




</div>

    </div>
  )
}

export default Club4