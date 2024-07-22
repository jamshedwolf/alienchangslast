import React from 'react';
import al from "../../assets/images/al.svg";
import two from "../../assets/images/two.svg";
import three from "../../assets/images/three.svg";
import openupp from "../../assets/images/openupp.svg";
import globl from "../../assets/images/globl.svg";
import leftlogo from "../../assets/images/leftlogo.svg";
import ed from "../../assets/images/ed.svg";
import gogl from "../../assets/images/gogl.svg";
import mo from "../../assets/images/mo.svg";
import udemy from "../../assets/images/udemy.svg";
import mask from "../../assets/images/mask.svg";
import realeng from "../../assets/images/realeng.svg";
import hot from "../../assets/images/hot.svg";

function Academy4() {
  return (
    <div className='h-auto p-2 py-10'>
      <div className="max-w-[1400px] gap-10 mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col lg:flex-row gap-5 justify-between items-center">
          <a href="https://www.alchemy.com/" target="_blank" rel="noopener noreferrer">
            <img src={al} alt="" className="transition-all ease-linear duration-200 hover:scale-105" />
          </a>
          <a href="https://www.aulafacil.com/" target="_blank" rel="noopener noreferrer">
            <img src={two} alt="" className="transition-all ease-linear duration-200 hover:scale-105" />
          </a>
          <a href="https://explore.org/livecams" target="_blank" rel="noopener noreferrer">
            <img src={three} alt="" className="transition-all ease-linear duration-200 hover:scale-105" />
          </a>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 justify-between items-center">
          <a href="https://www.oeglobal.org/" target="_blank" rel="noopener noreferrer">
            <img src={globl} alt="" className="transition-all ease-linear duration-200 hover:scale-105" />
          </a>
          <a href="https://www.openuped.eu/" target="_blank" rel="noopener noreferrer">
            <img src={openupp} alt="" className="transition-all ease-linear duration-200 hover:scale-105" />
          </a>
          <a href="https://www.unssc.org/" target="_blank" rel="noopener noreferrer">
            <img src={leftlogo} alt="" className="transition-all ease-linear duration-200 hover:scale-105" />
          </a>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 justify-between items-center">
          <a href="https://www.edx.org/" target="_blank" rel="noopener noreferrer">
            <img src={ed} alt="" className="transition-all ease-linear duration-200 hover:scale-105" />
          </a>
          <a href="https://grow.google/intl/en_pk/?utm_source=redirect&utm_medium=redirect&utm_term=gwg&utm_content=apac&utm_campaign=redirect" target="_blank" rel="noopener noreferrer">
            <img src={gogl} alt="" className="transition-all ease-linear duration-200 hover:scale-105" />
          </a>
          <a href="https://www.mooc.org/" target="_blank" rel="noopener noreferrer">
            <img src={mo} alt="" className="transition-all ease-linear duration-200 hover:scale-105" />
          </a>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 justify-evenly items-center">
          <a href="https://hotmart.com/en" target="_blank" rel="noopener noreferrer">
            <img src={hot} alt="" className="transition-all ease-linear duration-200 hover:scale-105" />
          </a>
          <a href="https://www.udemy.com/?utm_source=adwords&utm_medium=udemyads&utm_campaign=Branded-Topic_la.EN_cc.ROW&campaigntype=Search&portfolio=BrandTopic&language=EN&product=Course&test=&audience=Keyword&topic=&priority=&utm_content=deal4584&utm_term=_._ag_78904295716_._ad_535757779592_._kw_udemy%20courses_._de_c_._dm__._pl__._ti_kwd-295955963002_._li_9061363_._pd__._&matchtype=b&gad_source=1&gclid=CjwKCAjwtNi0BhA1EiwAWZaANHjXZFmYyxudQpYk5xJgDtlzyDE1Ozhbz-VTozE6U2oMbEkln1pDxRoCOJ0QAvD_BwE" target="_blank" rel="noopener noreferrer">
            <img src={udemy} alt="" className="transition-all ease-linear duration-200 hover:scale-105" />
          </a>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 justify-evenly items-center">
          <a href="https://learn.unity.com/" target="_blank" rel="noopener noreferrer">
            <img src={mask} alt="" className="transition-all ease-linear duration-200 hover:scale-105" />
          </a>
          <a href="https://www.unrealengine.com/en-US" target="_blank" rel="noopener noreferrer">
            <img src={realeng} alt="" className="rounded-full transition-all ease-linear duration-200 hover:scale-105" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Academy4;
