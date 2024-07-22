import React from 'react';

function Fourth() {
    const sections = [
        {
            title: 'Association',
            content: 'We have an active, committed and dedicated community of farmers, artists, scientists, creators, developers, entrepreneurs, investment companies, researchers, businesses, users who work together, creating new functionalities, that contribute, add, multiply the initiatives and Energy Efficiency & Environmental Sustainability proposals that make this Planet a Better World.',
        },
        {
            title: 'Decentralization',
            content: 'It means that it is not controlled by a single entity, person or being. This makes it more resistant to censorship and manipulation.',
        },
        {
            title: 'Decentralization',
            content: 'Allows users to exchange their cryptos & NFTs for other assets, meaning they have more options and flexibility to manage their assets.',
        },
        {
            title: 'Liquidity',
            content: 'Offers great liquidity for users who want to buy or sell their cryptocurrencies and NFTs. This means that users can quickly and easily convert their cryptocurrencies and NFTs into cash.',
        },
        {
            title: 'Security',
            content: 'Thanks to the use of blockchain technology, quantum computing and artificial intelligence, which means that all transactions are secure and protected against fraud and hacking.',
        },
        {
            title: 'Transparency',
            content: 'This completely transparent, meaning that users can see and verify all transactions and operations that occur on blockchain networks.',
        },
    ];

    return (<div className=" flex  p-2 items-center flex-col gap-4 justify-center  py-2 px-2 xl:h-auto xl:py-20">
        <div className='flex items-center flex-col gap-4 justify-center mt-20 py-2 px-2'>
            {sections.map((section, index) => (
                <div key={index} className="flex transition-all ease-linear duration-200 hover:scale-105 items-center flex-col gap-4 justify-center">
                    <div className="flex gap-2 flex-col text-white md:flex-row max-w-[900px] md:w-[600px] lg:ml-[50px] exo lg:w-[900px]">
                        <p className="bg-[#03C649] flex-[.2] flex items-center justify-center p-2 rounded-lg">{section.title}</p>
                        <p className="bg-[#03C649] flex-[.8] p-2 text-center rounded-lg">{section.content}</p>
                    </div>
                </div>
            ))}
        </div>
<div className="max-w-[900px] bg-[#03C649] transition-all text-center ease-linear duration-200 hover:scale-105 md:w-[600px] lg:ml-[50px] text-white  rounded-lg p-10  lg:rounded-full exo lg:w-[900px]">* Acquire Cryptos, NFTs, Tokens to Associate and participate in Advantajes, Benefits, Profits… in the DAO…
+ We also collaborate with Big Brands & International Platforms from Affiliate programs, Referral Marketing, on demand Suppliers…
+ Join a Growing Ecosystem of Affiliations, Applications, Associations and Decentralized Platforms that support each other by collaborating in networks with algorithms and consensus protocols for smart contracts that promote, in addition to promoting Energy Efficiency & Environmental Sustainability on the Planet.
· We serve a wide range of clients; including artists, creators, developers, entrepreneurs, companies, farmers, investors, researchers, scientists and users…</div>

        </div>
    );
}

export default Fourth;
