import React from 'react';
import bit from "./bit.svg";
import eth2 from "./eth2.svg";
import TEH from "./TEH.svg";
import bnb from "./bnb.svg";
import usdc from "./usdc.svg";
import xrp from "./xrp.svg";
import doge from "./ali.svg";

import TON from "./TON.svg";

const data = [
  { id: 1, img: bit, symbol: "BTC", name: "BITCOIN", price: "€61,976.58", changes: "-3.58%", marketCap: "€1.22T", volume: "€36.54B", supply: "19.71M BTC" },
  { id: 2, img: eth2, symbol: "ETH", name: "ETHEREUM", price: "€61,976.58", changes: "-3.58%", marketCap: "€1.22T", volume: "€36.54B", supply: "19.71M BTC" },
  { id: 3, img: TEH, symbol: "USDT", name: "TETHER", price: "€61,976.58", changes: "-3.58%", marketCap: "€1.22T", volume: "€36.54B", supply: "19.71M BTC" },
  { id: 4, img: usdc, symbol: "USDC", name: "USDC", price: "€61,976.58", changes: "-3.58%", marketCap: "€1.22T", volume: "€36.54B", supply: "19.71M BTC" },
  { id: 5, img: doge, symbol: "DOGE", name: "DOGE", price: "€61,976.58", changes: "-3.58%", marketCap: "€1.22T", volume: "€36.54B", supply: "19.71M BTC" },
  { id: 6, img: xrp, symbol: "XRP", name: "XRP", price: "€61,976.58", changes: "-3.58%", marketCap: "€1.22T", volume: "€36.54B", supply: "19.71M BTC" },
  { id: 7, img: TON, symbol: "TON", name: "TON", price: "€61,976.58", changes: "3.58%", marketCap: "€1.22T", volume: "€36.54B", supply: "19.71M BTC" },
];

function Network5() {
  return (
    <div className='max-w-[1400px] exo p-10 overflow-x-auto  mx-auto'>
      <table className="w-[1400px] mx-auto bg-white rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-1 border-b border-r">#</th>
            <th className="py-2 px-4 border-b border-r">Name</th>
            <th className="py-2 px-4 border-b border-r">Price</th>
            <th className="py-2 px-4 border-b border-r">Changes 24 hours</th>
            <th className="py-2 px-4 border-b border-r">Market CAP</th>
            <th className="py-2 px-4 border-b border-r">Volume</th>
            <th className="py-2 px-4 border-b">Supply</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} className={index % 2 === 0 ? 'bg-[#F9F9F9]' : ''}>
              <td className="py-2 text-center px-1 border-b">{item.id}</td>
              <td className="py-2 text-center px-4 flex flex-col gap-2 border-b">
                <div className="flex items-center gap-2 justify-center">
                  <img src={item.img} alt={item.symbol} className="" />
                  <div>{`(${item.symbol})`}</div>
                </div>
                <div className="font-bold">{item.name}</div>
              </td>
              <td className="py-2 text-center px-4 border-b">{item.price}</td>
              <td className={`py-2 text-center px-4 border-b ${item.changes.startsWith('-') ? 'text-red-600' : 'text-green-600'}`}>{item.changes}</td>
              <td className="py-2 text-center px-4 border-b">{item.marketCap}</td>
              <td className="py-2 text-center px-4 border-b">{item.volume}</td>
              <td className="py-2 text-center px-4 border-b">{item.supply}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Network5;
