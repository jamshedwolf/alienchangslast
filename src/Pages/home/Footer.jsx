import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from "../../assets/images/foterimg.svg";
import foterbg from "../../assets/images/foterbg.svg";

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Academy', path: '/academy' },
    { name: 'Club', path: '/club' },
    { name: 'CoNetworking', path: '/co-networking' },
    { name: 'Mint', path: '/mint' }
];

function Footer() {
    const [activeIndex, setActiveIndex] = useState(null);

    function activator(index) {
        setActiveIndex(index);
    }

    return (
        <div
            className='flex  atomicage justify-center py-5 h-[70vh] lg:h-auto text-[#69AF00] items-center p-6 bg-black'
        >
            <div className="max-w-[1400px] flex flex-col items-center justify-between lg:flex-row w-full">
                <div className="flex gap-5 items-center justify-center lg:justify-start">
                    <img src={img} alt="Logo" />
                    <p>AlienFlow.space © DAO Earth Powered $pac€</p>
                </div>
                <div className="flex flex-col gap-3 mt-4 lg:mt-0 lg:flex-row">
                    {navItems.map((item, index) => (
                        <Link to={item.path} key={index}>
                            <p 
                                onClick={() => activator(index)}
                                className={`cursor-pointer hover:text-white px-3 text-center rounded-lg py-1 transition duration-200 ${activeIndex === index ? "bg-[#69AF00] border text-white border-[#69AF00]" : ""}`}
                            >
                                {item.name}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Footer;
