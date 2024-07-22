import React, { useState } from 'react';
import accordinbg from "../../assets/images/acordinbg.svg";
import t from "../../assets/images/t.svg";
import tel from "../../assets/images/tel.svg";
import yt from "../../assets/images/yt.svg";
import f from "../../assets/images/f.svg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


function Accordin() {
    const [openIndex, setOpenIndex] = useState(null);

    function toggleAccordion(index) {
        setOpenIndex(openIndex === index ? null : index);
    }

    const accordionData = [
        { title: "What are the NFTs?", content: "Urna vitae erat et lacus, consectetur ac nulla vestibulum lobortis $ Nulla dapibus urna volutpat venenatis, risus faucibus." },
        { title: "How do i get NFTs?", content: "Urna vitae erat et lacus, consectetur ac nulla vestibulum lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus." },
        { title: "How we can buy and invest NFT ?", content: "Urna vitae erat et lacus, consectetur ac nulla vestibulum lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus." },
        { title: "Where we can buy and sell NFts ?", content: "Urna vitae erat et lacus, consectetur ac nulla vestibulum lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus." },
        { title: "Where we can buy and sell NFts ?", content: "Urna vitae erat et lacus, consectetur ac nulla vestibulum lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus." },
        { title: "Where we can buy and sell NFts ?", content: "Urna vitae erat et lacus, consectetur ac nulla vestibulum lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus." },
        // Add more items here as needed
    ];

    return (
        <div
            // style={{
            //     backgroundImage: `url(${accordinbg})`,
            //     backgroundSize: 'cover',
            //     backgroundPosition: 'center',
            // }}
            className=" lg:h-screen h-[130vh] exo xl:h-auto lg:pt-10  flex-col gap-4 text-[white] flex items-center justify-center"
        ><p className="h p-3 rounded-lg bg-black text-[#ECDD91] atomicage text-center">faqs</p>
            <div className="flex flex-col gap-4 max-w-[1400px] mx-auto xl:h-auto xl:py-20">
                {accordionData.map((item, index) => (
                    <div key={index} className="bg-[#03C649] transition-all ease-linear duration-200 hover:scale-105 h-auto rounded-lg w-[300px] lg:w-[800px]">
                        <p
                            onClick={() => toggleAccordion(index)}
                            className={`text-[#ECDD91] ${openIndex === index ? 'border-black/20 border-b-2' : 'border-0'} font-semibold text-[12px] lg:text-[20px] mx-5 text-start p-3 relative cursor-pointer`}
                        >
                            {item.title}
                            {openIndex === index ? (
                                <IoIosArrowUp className='absolute text-white transition-all ease-linear duration-150 top-4 right-4' size={25} />
                            ) : (
                                <IoIosArrowDown className='absolute text-white transition-all ease-linear duration-150 top-4 right-4' size={25} />
                            )}
                        </p>
                        {openIndex === index && (
                            <div className="bg-[#03C649] text-start p-8 text-[10px] lg:text-[13px] transition-all ease-linear duration-300 text-white">
                                {item.content}
                            </div>
                        )}
                    </div>

                ))}
            </div>
            <p className="h p-3 rounded-lg bg-black text-[#ECDD91] atomicage ">Questions?</p>
            <p className=" p text-center text-white lg:text-[#69AF00] exo">Whether you're curious about features,  a free trial, or even press releases, we're here to answer all your questions.</p>


            <div className="flex pb-10 px-3">
                <input type="email" placeholder='Enter your Email' className=" px-5 h-[35px] w-[200px] outline-none  lg:w-[400px]  border-[#69AF00] border bg-[#c3c4c696]" />
                <button className="h-[35px] px-5 rounded-r-lg border-l-0  bg-[#69AF00] border-[#69AF00] border">subscribe</button>
            </div>
            <div className="flex items-center mb-4 justify-center gap-5">
<img src={t} alt="" className="transition-all ease-linear duration-200 hover:scale-105" />
<img src={tel} alt="" className="transition-all ease-linear duration-200 hover:scale-105" />
<img src={yt} alt="" className="transition-all ease-linear duration-200 hover:scale-105" />
<img src={f} alt="" className="transition-all ease-linear duration-200 hover:scale-105" />


            </div>
        </div>
    );
}

export default Accordin;
