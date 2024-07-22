import React from 'react';
import acad from "../../assets/images/acad.svg";
import { Link } from 'react-router-dom';

function Academy1() {
    return (
        <div className='lg:h-screen p-2 xl:h-auto xl:p-20 flex items-center justify-center'>
            <div className="mx-auto pt-20 relative max-w-[1400px] flex flex-col gap-20 items-center">
                <div>
                    <p className="atomicage md:text-7xl font-bold text-3xl text-[#69AF00] lg:mb-40 mt-10 text-center">Academy</p>
                  
                        <p className="text-[#ECDD91] text-xl md:text-4xl exo mt-10 text-center">Access Now to Learn and Earn!</p>
                   
                </div>
                <Link to="/contact">
                <button className="bg-[#69AF00] text-[15px] md:text-2xl flex px-3 py-2 gap-2 rounded-full lg:text-3xl text-[#ECDD91] items-center transition-all ease-linear duration-200 hover:scale-105 exo">
                    <img src={acad} alt="Academy Icon" className="" /> Start your Transformation Now!
                </button>
                </Link>
                <div className="px-5 rounded-[80px] lg:rounded-full p-10 text-[15px] md:text-[25px] text-center text-white bg-[#03C649] lg:px-14 w-auto md:w-[600px] transition-all ease-linear duration-200 hover:scale-105 lg:w-[900px] xl:w-[1200px] exo max-w-[1200px]">
                    Acquire Mindfulness Capacities, to Discover Knowledge & Skills; that will help you Evolve and Propel You to the Optimal Experience in Fullness of Flow; How to improve the Benefits in Your Quality of Life with Sustainable Gains, obtaining Full Mental Well-being, Growth & Development, on a Personal & Professional level, Exploring both ancestral techniques and cutting-edge technologies... Connect on a deeper level With yourself, Your World & this Planet,
                </div>
            </div>
        </div>
    );
}

export default Academy1;
