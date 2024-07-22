import React from 'react';
import diamond from '../../assets/images/diamond.svg';
import network from '../../assets/images/network.svg';
import book from '../../assets/images/book.svg';
import { Link } from 'react-router-dom';

function Second() {
    const points = [
        {
            number: '1st',
            text: 'We are committed to providing personalized solutions that address current challenges and needs.',
        },
        {
            number: '2nd',
            text: 'Greater security by being able to trust the management of data and transactions thanks to the use of cryptography, blockchain, and quantum computing.',
        },
        {
            number: '3rd',
            text: 'Improvement in decision making thanks to advanced data analysis and the application of artificial intelligence, raising awareness about gestal consciousness, generating synergies between ancestral techniques and cutting-edge technologies, interconnecting sectors such as medicine, nutrition, psychology, health with permaculture.',
        },
        {
            number: '4th',
            text: 'Optimization of WorkFlow (processes and work flows) promoting energy efficiency and environmental sustainability, in addition to adding value and reducing costs.',
        },
    ];

    const sections = [
        {
            title: 'OUR MISSION',
            content: 'Create the best experiences and synergies that generate greater value for the planet and its beings, implementing environmentally friendly solutions.',
        },
        {
            title: 'OUR VALUES',
            content: 'We strive to go above and beyond to improve no matter the challenge. Our goal is to deliver our best work every day through our actions and solutions.',
        },
    ];

    const buttons = [
        { text: 'Academy', img: book, link: "/academy" },
        { text: 'Club', img: diamond, link: "/club" },
        { text: 'Networking', img: network, link: "/co-networking" },
    ];

    return (
        <div className='py-10 exo flex-col gap-5 px-2 flex justify-center xl:h-auto xl:py-20 items-center'>
            <div className="max-w-[1400px] flex flex-col gap-10 items-center justify-center">
                <div className="flex-col gap-5 flex-[0.9] flex justify-center items-center">
                    {points.map((point, index) => (
                        <div key={index} className="flex gap-3 items-center flex-col md:flex-row text-white">
                            <span className="w-14 h-14 bg-[#03C649] flex justify-center items-center rounded-full">{point.number}</span>
                            <p className="bg-[#03C649] text-center transition-all ease-linear duration-200 hover:scale-105 flex py-4 pl-3 items-center rounded-lg max-w-[900px] md:w-[600px] lg:w-[900px]">
                                {point.text}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="flex gap-5 lg:ml-14 flex-col md:flex-row lg:w-[900px] items-center justify-center">
                    {sections.map((section, index) => (
                        <div key={index} className="bg-[#03C649] transition-all ease-linear duration-200 hover:scale-105 flex-1/2 rounded-lg flex lg:h-[200px] flex-col items-center justify-center gap-4 text-[#ECDD91] px-5 py-5">
                            <h1 className='text-3xl atomicage'>{section.title}</h1>
                            <p>{section.content}</p>
                        </div>
                    ))}
                </div>
                <div className="bg-[#03C649] text-center flex transition-all ease-linear duration-200 hover:scale-105 flex-col gap-5 rounded-lg text-white max-w-[900px] md:w-[600px] lg:ml-[50px] exo lg:w-[900px] p-5">
                    <div>
                        Our main objective is to disseminate knowledge to provide a greater understanding of wisdom in different fields and concepts, such as digitalization, efficiency, sustainability, and of course, transcendent topics. We promote the sustainable growth and development of the environment and its beings so that they can achieve a lifestyle in harmony with the cosmos and its nature. Here you will learn to interpret and improve your quality of life, as well as generate greater profits with your finances. We offer you an academy to learn and delve into the most relevant topics, clubs to meet and connect with other beings related to your interests and exchange experiences, fully customizable products and services, as well as CoNetWorKing spaces and tools establishing lasting collaborations to make the best business…
                    </div>
                    <div className="flex justify-between flex-wrap space-y-3 lg:space-x-0 items-center exo">
                        {buttons.map((button, index) => (
                            <Link key={index} to={button.link}>
                                <button className="py-1 px-2 bg-[#69AF00] text-[#ECDD91] rounded-full flex items-center justify-center gap-1">
                                    <img src={button.img} alt={`${button.text} logo`} className="" /> {button.text}
                                </button>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(Second);
