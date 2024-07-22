import React from 'react'
import lst from "./lstclub.svg"
import lastlogo from "./lastlogo.svg"


function Club11() {
    return (
        <div className=' flex items-center justify-center p-2'>
            <div className="max-w-[1400px] mx-auto">


                <div
                    style={{
                        backgroundImage: `url(${lst})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    className='flex  m-2 exo items-center transition-all ease-linear duration-200 hover:scale-105 lg:w-[900px]  w-auto  text-center border max-w-[900px] rounded-lg lg:rounded-full justify-center flex-col px-10 py-10 gap-5'
                >
                    <div className="text-center"> </div>
                    <div className="flex gap-2 h mx-auto  text-white text-center font-extrabold">  XFlow 🔞</div>
                    <p className="text-center exo text-white mx-auto">
                        NSFW dedicated to the tokenization of<br /> fully personalized content, experiences,<br />  products and services, especially unique…

                    </p>

                </div>
<div className="">
    <img src={lastlogo} alt="" className="lg:w-[900px] w-[300px] py-4 max-w-[900px]" />

</div>

            </div>


        </div>
    )
}

export default Club11