import React from 'react'
import block from "./block1.svg"
import seed from "./seed.svg"
import weed from "./weed.svg"
import wead from "./wead.svg"
// import tap from "./tap.svg"


function Club10() {
  return (
  


<div className='flex items-center justify-center '>

<div className="max-w-[1400px] flex-col gap-5    ">
<div
                        style={{
                            backgroundImage: `url(${weed})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                        className='flex  m-2 items-center  exo lg:w-[900px]transition-all ease-linear duration-200 hover:scale-105 w-auto  text-center border max-w-[900px] rounded-lg lg:rounded-full justify-center flex-col px-10 py-10 gap-5'
                    ><div className="text-center"> <img src={wead} alt="" className="" /></div>
                        <div className="flex gap-2 h mx-auto text-white text-center font-extrabold">  WeedFlow</div>
                        <p className="text-center exo text-white mx-auto">
                        Improve your endocannabinoid system, learn about<br/> sustainable cultivation and responsible use of <br/> cannabinoids for different industries; biomass,<br/>  biomaterials, bioplastics, cosmetics, energy,<br/>  pharmaceutical, gastronomy,<br/>  
                        medicinal, therapeutics...
                        </p>
                    </div>
    
    
    
    <div className="flex flex-col items-center gap-4 justify-center ">
    <p className="h text-[#69AF00] font-bold exo ">Block Hemp</p>
    <p className="p-2 flex-col gap-2" >
        <img src={block} alt="" className="lg:w-[900px] w-[300px] py-4 max-w-[900px]" />
    
    </p>

</div>
<div className="flex flex-col items-center gap-4 justify-center ">
    <p className="h text-[#69AF00] font-bold exo text-center ">Shops & Seeds Banks</p>
    <p className="p-2 flex-col gap-2" >
        <img src={seed} alt="" className="lg:w-[900px] w-[300px] py-4 max-w-[900px]" />
        
    </p>

</div>


</div>




    </div>
    
  )
}

export default Club10