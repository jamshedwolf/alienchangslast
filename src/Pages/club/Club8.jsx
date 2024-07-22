import React from 'react'
import play from "./play.svg";
import bggame from "./bggame.svg";
import g1 from "./g1.svg";
import g2 from "./g2.svg";
import g3 from "./g3.svg";
function Club8() {
    return (
        <div><div className="xl:h-auto xl:p-20 flex items-center justify-center">
            <div className="max-w-[1400px] flex gap-10 items-center flex-col p-4 px-auto">
                <div
                    style={{
                        backgroundImage: `url(${play})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    className='flex items-center exo lg:w-[900px] w-auto lg:py-20 text-center transition-all ease-linear duration-200 hover:scale-105 border max-w-[900px] rounded-lg lg:rounded-full justify-center flex-col px-10 py-10 gap-5'
                >
                    <div className="flex gap-2 h mx-auto text-white text-center font-extrabold">GameFlow</div>
                    <p className="text-center  text-white mx-auto">
                        Healthy habits through games, as well as redemptions<br /> of all types of battle and season passes for your<br /> favorite games and fully customizable official items<br /> from the best teams…
                    </p>
                </div>
                <div className="flex  gap-5 flex-col lg:flex-row ">

                    <div style={{
                        backgroundImage: `url(${bggame})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }} className=" w-[300px] border flex flex-col gap-4 p-5  py-5 items-center justify-center text-center text-white rounded-lg lg:rounded-full max-w-[300px]">
                        <p className="text-2xl font-bold exo">1</p>
                        <p className="text-[20px] font-bold exo">Improve Your Game</p>
                        <p className="text-[14px]">Have fun playing at any time, in daily tournaments or monthly cups challenging worthy opponents.</p>
                    </div>
                    <div style={{
                        backgroundImage: `url(${bggame})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }} className=" w-[300px] border flex flex-col gap-4 p-5  py-5 items-center justify-center text-center text-white rounded-lg lg:rounded-full max-w-[300px]">
                        <p className="text-2xl font-bold exo">2</p>
                        <p className="text-[20px] font-bold exo">COMPETITIVE COMMUNITY</p>
                        <p className="text-[14px]">Participate in recognized international amateur, semi-professional and qualifying competitions</p>
                    </div>
                    <div style={{
                        backgroundImage: `url(${bggame})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }} className=" w-[300px] border flex flex-col gap-4 p-5  py-5 items-center justify-center text-center text-white rounded-lg lg:rounded-full max-w-[300px]">
                        <p className="text-2xl font-bold exo">3</p>
                        <p className="text-[20px] font-bold exo">GAIN</p>
                        <p className="text-[14px]">Win incredible prizes for being among the champions or even the long-awaited access to the professional scene, making yourself known</p>
                    </div>
                    
                </div>

            </div>


        </div></div>
    )
}

export default Club8
