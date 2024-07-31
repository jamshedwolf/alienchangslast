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
        { title: "What is AlienFlowSpace DAO?", content: "AlienFlowSpace DAO is a decentralized autonomous organization that combines elements of DeFi, DeSci, GameFi, ReFi, RWA, offering a unique platform where users can access diverse experiences, products, and services, fully personalized and sustainable." },
        { title: "What is the AlienFlowSpace CrypToken?", content: "The AlienFlowSpace CrypToken is our digital currency that allows users to access liquidity pools and redeem experiences, products, and services within our spaces, including Academy, Clubs, and CoNetWorKing." },
        { title: "How can I obtain the CrypToken?", content: "Users can obtain the CrypToken through exchanges on cryptocurrency platforms, participating in activities within the DAO, or by providing liquidity." },
        { title: "What are liquidity pools?", content: "Liquidity pools are pools that allow users to provide liquidity to the platform and fund initiatives in exchange for rewards. These pools are essential for the functioning of our ecosystem." },
        { title: "What types of experiences and products can I redeem?", content: "Users can redeem the CrypToken & NFTs for various experiences, products, and services in our spaces, which include access to exclusive, fully personalized and sustainable courses, events, experiences, training, products..." },
        { title: "How do NFT collections work?", content: "The NFT collections on AlienFlowSpace offer users exclusive access to exclusive, fully personalized and sustainable activities, courses, events, experiences, training, within our spaces. Each NFT may have unique benefits, advantages, and privileges associated with it." },
        { title: "What is DeFi, DeSci, GameFi, ReFi, RWA?", content: "DeFi: Decentralized finance that allows transactions without intermediaries. DeSci: Decentralized science that promotes collaboration and research funding. GameFi: Games that integrate financial elements, allowing players to win money. ReFi: Regenerative finance that seeks to create a positive impact on the environment. RWA: Tokenization of real-world assets." },
        { title: "How is the security of my funds ensured?", content: "Security is a priority at AlienFlowSpace DAO. We use advanced security protocols and regular audits to protect our users' funds. Our recommendation is self-custody, although it is always the user's final responsibility to ensure they use secure wallets and keep their security keys and seed phrases safe when connecting to our DAPP and sign smart contract transactions." },
        { title: "Where can I get more information?", content: "For more updated information about AlienFlowSpace DAO, please visit our official website or our official social media and channels. If you want more details on a specific topic or need additional help, do not hesitate to contact and ask to answer all your questions!" }
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
