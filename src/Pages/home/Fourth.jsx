import React from 'react'
import leftb from "../../assets/images/leftb.svg"
import rightb from "../../assets/images/rightb.svg"
import slider from "../../assets/images/slider.svg"
import "../../App.css"
import chain from "../../assets/images/chainmid.svg"

function Fourth() {
  return (
    <div className='flex flex-col py-20 justify-center gap-5 items-center h-auto   lg:h-[70vh]  xl:py-20 overflow-hidden '>
      <div className="text-center flex-col lg:flex-row gap-6 max-w-[1400px] mx-auto  px-5 lg:text-3xl flex justify-center items-center">
        <a href="https://bitcoin.org/en/" className=""> <img src={leftb} alt="" className="transition-all ease-linear duration-200 hover:scale-105" /></a>
        <a href="https://bitcoincash.org/" className=""> <img src={chain} alt="" className="transition-all ease-linear duration-200 hover:scale-105" /></a>
        <a href="https://walletconnect.com/" className=""> <img src={rightb} alt="" className="transition-all ease-linear duration-200 hover:scale-105" /></a>


      </div>
      {/* <div className=" hidden lg:block pt-20 overflow-x-hidden w-full"> */}

      <div className="slider w-full  mt-20 relative h-20  ">
        <div className='slide-1'>
        <img src={slider} alt="" className=" w-full   lg:block" />
        </div>
        <div className='slide-2 absolute top-0 mx-0 h-full left-[-100%] w-full  '>
        <img src={slider} alt="" className=" w-full  lg:block" />
        </div>
      </div>
      {/* </div> */}

    </div>
  )
}

export default Fourth