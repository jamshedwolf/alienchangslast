import React from 'react';
import networksvg from "../../assets/images/networksvg.svg";

const sections = [
  {
    title: "",
    content: "We make participating in our DAO Ecosystem accessible, clear and direct, even for those who are taking their first steps on this exciting journey. If you have any questions or need more information, we are here to help. Welcome to the Evolution of Finance!"
  },
  {
    title: "AMM (Automated Market Maker)",
    content: "Buy and sell cryptocurrencies in an automated and easy way! Facilitate exchange without the need for intermediaries with automated smart contracts using neural intelligence networks for buying cheap and selling high."
  },
  {
    title: "DeFi (Decentralized Finance)",
    content: "Explore a new financial approach. Access financial services without depending on traditional institutions, with your own private keys and without exposing sensitive data."
  },
  {
    title: "Dual Investment",
    content: "Maximize your profits by participating in different investment opportunities at the same time."
  },
  {
    title: "Farming",
    content: "Sow and reap your rewards. Our permaculture farming system allows you to earn more cryptocurrencies by actively participating in the network."
  },
  {
    title: "Mining",
    content: "Mine cryptocurrencies easily. With our Mining system, you can contribute to the network and be rewarded for it."
  },
  {
    title: "ReFi (Decentralized & Regenerative Finance)",
    content: "Earn by staying active! Our Staking system allows you to earn rewards by keeping your cryptocurrencies with our CoNetWorKing."
  }
];

function Network3() {
  return (
    <div className='flex items-center px-2 py-4 justify-center flex-col gap-10'>
      <div className="text-center">
        <img src={networksvg} alt="Network Illustration" className="" />
      </div>

      <div className="flex items-center justify-center flex-col gap-10">
        {sections.map((section, index) => (
          <div key={index} className="bg-[#03C649] transition-all ease-linear duration-200 hover:scale-105 flex flex-col gap-5 lg:rounded-full rounded-lg   text-white max-w-[900px] md:w-[600px] lg:ml-[50px] exo lg:w-[900px] lg:p-10">
            {section.title && (
              <div className="text-center p-2 text-[#ECDD91] h">
                {section.title}
              </div>
            )}
            <div className='text-center p-2'>{section.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Network3;
