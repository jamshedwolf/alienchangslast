import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bgearth from "../../assets/images/earth.svg";
import mint from "../../assets/images/mint.svg";
import copy from "../../assets/images/copy.svg";
import live from "../../assets/images/live.svg";
import academy from "../../assets/images/academy.svg";
import crd2 from "../../assets/images/crd2.svg";
import crd3 from "../../assets/images/crd3.svg";
import crd4 from "../../assets/images/crd4.svg";
import "../home/card.css"
import { Link } from 'react-router-dom';

const settings = {
  dots: true,
  infinite: true,
  
 
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const slides = [
  {
    imgSrc: copy,
    buttonLabel: "A Crypto token"
  },
  {
    imgSrc: crd2,
    buttonLabel: "Academy"
  },
  {
    imgSrc: crd3,
    buttonLabel: "Clubs"
  },
  {
    imgSrc: crd4,
    buttonLabel: "CoNetworking"
  },
 
];

function Academy3() {
  return (
    <div className="w-full py-10 lg:max-w-[1200px] mx-auto overflow-x-hidden ">

        <div className="atomicage h text-[#03C649] p-4   m-10 text-center">Acc€$$ CrypTokens & Nfts</div>
      <Slider className="mx-auto" {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative mx-6 exo h-[300px] gap-5 overflow-hidden border custom-card  sm:mx-5 bg-[#03C649] rounded-[20px] sm:rounded-[40px]">
            <img src={slide.imgSrc} alt="" className="w-[200px] h-[150px] mx-auto mt-10" />
            <Link to="/mint">   <button className="">
            <div className="flex justify-center items-start w-[198px] py-2.5 rounded-[360px] bg-[#69af00]">
  <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 w-[155px]">
    <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 pr-[5px]">
      <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 h-[25px] relative">
        <svg
          width={23}
          height={22}
          viewBox="0 0 23 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-[22px] h-[22px] relative"
          preserveAspectRatio="none"
        >
          <path
            d="M19.0434 1.22217L22.5 7.33328H18.6385L15.9955 1.22217H19.0434ZM14.1545 1.22217L16.7976 7.33328H6.20243L8.84549 1.22217H14.1545ZM3.9566 1.22217H7.00451L4.36146 7.33328H0.5L3.9566 1.22217ZM0.5 8.5555H4.34618L9.0441 18.169C9.10139 18.2874 8.94097 18.3944 8.85312 18.2951L0.5 8.5555ZM6.16042 8.5555H16.8396L11.6069 20.709C11.5687 20.8006 11.4351 20.8006 11.3969 20.709L6.16042 8.5555ZM13.9559 18.169L18.6538 8.5555H22.5L14.1469 18.2913C14.059 18.3944 13.8986 18.2874 13.9559 18.169Z"
            fill="#ECDD91"
          />
        </svg>
      </div>
    </div>
    <div className="flex flex-col justify-start items-center self-stretch flex-grow relative">
      <p className="flex-grow-0 flex-shrink-0 text-[12px] min-w-fit  font-bold text-center text-[#ecdd91]">
        MINT NOW
      </p>
    </div>
  </div>
</div>;

            </button></Link>
            <button className='absolute top-0 right-0 py-1 tracking-[2px] w-[100px] sm:w-[125px] bg-[#69AF00] text-white rounded-full'>LIVE</button>
            <button className='absolute top-0 left-0 py-2 tracking-[2px] w-[100px] sm:w-[125px] text-[8px] sm:text-[10px] pl-3 sm:pl-5 bg-[#69AF00] text-[#ECDD91] rounded-full'>{slide.buttonLabel}</button>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Academy3;