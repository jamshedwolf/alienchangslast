import React from 'react';
import fear from "./fear.svg";
import ecoin from "./ecoin.svg";
import tf from "./tf.svg";
import c from "./c.svg";
import t from "./t.svg";
import tr from "./tr.svg";
import ai from "./ai.svg";

const tableData = [
    { imgSrc: ecoin, name: "ECOIN", ticker: "CLC/EUR", price: "€0.00065", change: "40.20%" },
    { imgSrc: c, name: "Convex Finance", ticker: "CLC/EUR", price: "€0.00065", change: "40.20%" },
    { imgSrc: t, name: "Turbo", ticker: "TURBO/EUR", price: "€0.00065", change: "40.20%" },
    { imgSrc: tr, name: "MAGA", ticker: "TRUMP/EUR", price: "€0.00065", change: "40.20%" },
    { imgSrc: ai, name: "Fetch.ai", ticker: "FET/EUR", price: "€0.00065", change: "40.20%" },
];

function Mid() {
    return (
        <div>
            <div className="max-w-[1400px]  mx-auto">
                <div className="flex gap-5 overflow-auto items-center justify-center flex-col lg:flex-row">
                    <img src={fear} alt="" className="lg:w-[500px] lg:h-[500px]" />
                    <div className="">
                        <table className=" bg-white rounded-lg">
                            <tbody>
                                {tableData.map((data, index) => (
                                    <tr key={index} className='flex py-2 '>
                                        <td className="py-2 mx-2 flex gap-4 w-[200px] rounded-lg ">
                                            <img src={data.imgSrc} alt={data.name} className="w-10" />
                                            <div className='flex flex-col gap-1'>
                                                <p className="text-semibold">{data.name}</p>
                                                <p className="text-black text-[10px] opacity-[.5]">{data.ticker}</p>
                                            </div>
                                        </td>
                                        <td className="py-2 flex flex-col w-[200px] px-4">
                                            <p className="flex items-center justify-end">{data.price}</p>
                                            <p className="text-green-500 flex items-center justify-end gap-2">{data.change} <span className="text-black">(24h)</span></p>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mid;
