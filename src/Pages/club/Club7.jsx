import React from 'react'
import music from "./musicbg.svg";
import musicb from "./musicb.svg";


function Club7() {
    return (
        <div>



            <div className="xl:h-auto xl:p-20 flex items-center justify-center">
                <div className="max-w-[1400px] flex gap-10 items-center flex-col p-4 px-auto">
                    <div
                        style={{
                            backgroundImage: `url(${music})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                        className='flex items-center exo lg:w-[900px] w-auto lg:py-20 text-center border transition-all ease-linear duration-200 hover:scale-105 max-w-[900px] rounded-lg lg:rounded-full justify-center flex-col px-10 py-10 gap-5'
                    >
                        <div className="flex gap-2 h mx-auto text-white text-center font-extrabold">FlowMusic</div>
                        <p className="text-center  text-white mx-auto">
                            We tokenize artists, works and worlds to grow and improve<br /> your musical artistic content, <br />as well as guarantee access to concerts, tickets, events,<br /> articles, official merchandising...
                        </p>
                    </div>


                    <div className="">
                        <img src={musicb} alt="" className="lg:w-[300px]  w-[100px] py-4 max-w-[400px]" />


                    </div>
                </div>


            </div>
        </div>
    )
}

export default Club7