import React from 'react'
import bg from "./lovebg.svg"
import bage from "./bage.svg"
import star from "./star.svg"
import round from "./round.svg"
import last from "./last.svg"


function Network7() {
    return (
        <div style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',


        }} className='lg:h-[70vh] items-center  justify-start flex gap-10   ' >





            <div className="flex exo p-10 text-center max-w-[1400px] mx-auto  gap-10 flex-col md:flex-row  ">
                <div className="flex justify-start  flex-col gap-3 flex-[.3] items-center">
                    <p className="h atomicage text-[#03C649]">Why love nature</p>
                    <p className="text-white">   Build the best experience to create Greater & Better Values ​​for our associations and clients, using markets and business lines to inspire and implement environmentally friendly solutions. We strive to go above and beyond for our associate clientele no matter the challenge. Our goal is to offer the best work every day through our spaces</p>



                </div>

                <div className="grid  exo  place-items-center justify-start flex-[.3] grid-cols-1 md:grid-cols-2 gap-3 items-center">
                    
                        <div className="flex flex-col w-[100px]">
                            <img src={bage} alt="" className="transition-all ease-linear duration-200 hover:scale-105" />
                            <p className="text-white">9 Aeons Experience</p>
                        </div>

                        <div className="flex flex-col w-[100px]">
                            <img src={star} alt="" className="transition-all ease-linear duration-200 hover:scale-105" />
                            <p className="text-white">10 Star<br/> Rating</p>
                        </div>

                        <div className="flex flex-col w-[100px]">
                            <img src={round} alt="" className="transition-all ease-linear duration-200 hover:scale-105" />
                            <p className="text-white">Quick Turnaround</p>
                        </div>
                        <div className="flex flex-col w-[100px]">
                            <img src={last} alt="" className="transition-all ease-linear duration-200 hover:scale-105" />
                            <p className="text-white">Dedicated Support</p>
                        </div>

                   



                </div>
            </div>

        </div>
    )
}

export default Network7