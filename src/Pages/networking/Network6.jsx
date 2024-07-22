import React from 'react'
import find from "./findnow.svg"
import midder from "./mider.svg"
import fiverr from "./fiverr.svg"
import upwork from "./upwork.svg"
import we from "./we.svg"
function Network6() {
    return (
        <div className='max-w-[1400px] p-2 my-5 mx-auto mt-20 flex-col items-center gap-10 flex justify-center'>

            <div className="bg-[#03C649]  relative flex flex-col gap-5transition-all ease-linear duration-200 hover:scale-105 lg:rounded-full rounded-lg   text-white max-w-[900px] md:w-[600px] lg:ml-[50px] exo lg:w-[900px] lg:p-10">

                <div className='text-center p-2  pt-20'>   You can also find different collaborative networking spaces with cutting-edge technologies as well as tools and instruments such as Blockchain, neural intelligence networks, quantum computing... You can also connect to share knowledge, skills and interests, thus creating the best professional synergies with the best competitive advantages, greater benefits both in your quality of life and professionally, increasing and improving energy efficiency and environmental sustainability in work flows & processes, this is “WorkFlow” guaranteeing mutual gains as a symbiosis...</div>

                <img src={midder} alt="" className="absolute w-40 left-[80px]   md:left-[40%] top-[-100px]" />


                <button className=" mx-auto  my-2 rounded-full flex gap-2 items-center  px-2 py-1 bg-[#69AF00] text-[#ECDD91]"><img src={find} alt="" className="" />Find now!</button>
            </div>

            <div className=" flex gap-5 flex-col lg:flex-row">
<a href="https://www.fiverr.com" className=""><img src={fiverr} alt="" className="transition-all ease-linear duration-200 hover:scale-105" /></a>
<a href="https://www.upwork.com/" className=""><img src={upwork} alt="" className="transition-all ease-linear duration-200 hover:scale-105" /></a>
<a href="https://www.wework.com/" className=""><img src={we} alt="" className="transition-all ease-linear duration-200 hover:scale-105" /></a>


            </div>

        </div>
    )
}

export default Network6