import React from 'react';
import topball from '../../assets/images/topball.svg';
import contactlogo from '../../assets/images/contactlogo.svg';
import { Link } from 'react-router-dom';

function Third() {
    const sections = [
        {
            content: 'Our main objective  is to disseminate knowledge to provide a greater understanding of wisdom in different fields and concepts, such as digitalization, efficiency, sustainability and of course, transcendent topics. We promote the sustainable growth and development of the environment and its beings, so that they can achieve a lifestyle in harmony with the cosmos and its nature. Here you will learn to interpret and improve your quality of life, as well as generate greater profits with your finances. We offer you an academy to learn and delve into the most relevant topics, clubs to meet and connect with other beings related to your interests and exchange experiences, fully customizable products and services, as well as CoNetWorKing spaces and tools establishing lasting collaborations to make the best business…',
            imgSrc: topball,
            imgAlt: '',
            imgClass: 'absolute top-[-100px] left-[125px] md:left-[220px] lg:left-[40%] w-40',
            containerClass: 'bg-[#03C649] exo text-center transition-all ease-linear duration-200 hover:scale-105 relative flex flex-col gap-5 rounded-lg text-white max-w-[900px] md:w-[600px] lg:ml-[50px] exo lg:w-[900px] p-5',
            textClass: 'pt-10',
        },
        {
            content: 'AlienFlowSpace DAO = (Decentralized Autonomous Organization) is a space that allows users; access, acquire, redeem, buy, sell and exchange Cryptos, NFTs in an easy and secure way. Some of the benefits and advantages are:',
            imgSrc: '',
            imgAlt: '',
            imgClass: '',
            containerClass: 'bg-[#03C649] exo text-center transition-all ease-linear duration-200 hover:scale-105 relative flex flex-col gap-5 lg:rounded-full rounded-lg text-[#ECDD91] max-w-[700px] md:w-[600px] lg:ml-[50px] exo lg:w-[700px] p-5',
            textClass: '',
        },
    ];

    return (
        <div className='flex items-center flex-col gap-4 justify-center mt-40 py-2 px-2 xl:h-auto xl:py-20'>
            {sections.map((section, index) => (
                <div key={index} className={section.containerClass}>
                    <div className={section.textClass}>{section.content}</div>
                    {section.imgSrc && <img src={section.imgSrc} alt={section.imgAlt} className={section.imgClass} />}
                </div>
            ))}

            <Link to="/contact">
            <button className="py-1 px-2 bg-[#69AF00] text-[#ECDD91] rounded-full flex items-center justify-center gap-1 exo">
                <img src={contactlogo} alt="" className="" /> Contact Now
            </button>
            </Link>
            
        </div>
    );
}

export default Third;
