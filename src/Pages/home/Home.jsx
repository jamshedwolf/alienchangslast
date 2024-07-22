import React from 'react'
import bg from "../../assets/images/bghome.svg"
import tick from "../../assets/images/tick.svg"
import copy from "../../assets/images/copy.svg"
import homearo from "../../assets/images/homearo.svg"

// import "../App.css"
import Nav from '../../components/Nav'
import { IoIosArrowForward } from "react-icons/io";
import Second from './Second'



function Home() {
    return (
        <div
        //  style={{
        //     backgroundImage: `url(${bg})`,
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'center',


        // }}
         className=' pt-[100px] lg:pt-16'>
            {/* <Nav /> */}

            {/* hero------------- */}

            <div className="flex justify-center mx-auto lg:h-screen xl:h-auto xl:py-20 exo  items-center text-center flex-col gap-5 max-w-[1400px]">
                <div className="text-2xl font-semibold text-white ">Explore The <span className="text-[#69AF00]">DAO EcoSystem</span><br />
                    <span className="text-[#B9954F]">Innovative Solutions</span></div>
                <div className="text-white text-2xl">Unlock Energy Efficiency & Environmental Sustainability</div>
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="flex gap-3 w-[300px]  py-1 text-[#03C649] items-center justify-start px-3 bg-white rounded-full"><img src={tick} alt="" className="" />Decentralized Finance (DeFi)   </div>
                    <div className="flex gap-3 w-[300px]  py-1 text-[#03C649] items-center justify-start px-3 bg-white rounded-full"><img src={tick} alt="" className="" />Decentralized Science (DeSci)  </div>
                    <div className="flex gap-3 w-[300px]  py-1 text-[#03C649] items-center justify-start px-3 bg-white rounded-full"><img src={tick} alt="" className="" />Gaming Finance (GameFi)  </div>
                    <div className="flex gap-3 w-[300px]  py-1 text-[#03C649] items-center justify-start px-3 bg-white rounded-full"><img src={tick} alt="" className="" />Renewable Finance (ReFi)   </div>

                </div>
                <button className="flex w-[300px] rounded-full pl-4 py-1 items-center justify-between hover:text-white  hover:border-white hover:bg-[#69AF00] bg-[#33373D] border group gap-4 text-[#B9954F] border-[#B9954F] transition-all ease-linear duration-200 hover:scale-105  px-1"> GreenPapers & Tokenomics <span className="rounded-full bg-[#B9954F] px-2 py-2 border group-hover:bg-white group-hover:text-[#69AF00] group-hover:border-white  border-[#B9954F] text-[#33373D] font-bold ">< IoIosArrowForward/> </span>  </button>


                <div className=""><img src={copy} alt="" className="transition-all ease-linear duration-200 hover:scale-105" /></div> 
                <div className=""><img src={homearo} alt="" className="transition-all ease-linear duration-200 hover:scale-105" /></div> 





            </div>







        </div>
    )
}

export default Home