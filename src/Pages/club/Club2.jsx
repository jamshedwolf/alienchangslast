import React from 'react'

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
import "../home/card.css";
import { Link } from 'react-router-dom';





function Club2() {



    const sliderItems = [
        {
          imgSrc: copy,
          labelTopLeft: 'A Crypto token',
          labelTopRight: 'LIVE',
        },
        {
          imgSrc: crd2,
          labelTopLeft: 'Academy',
          labelTopRight: 'LIVE',
        },
        {
          imgSrc: crd3,
          labelTopLeft: 'Clubs',
          labelTopRight: 'LIVE',
        },
        {
          imgSrc: crd4,
          labelTopLeft: 'CoNetworking',
          labelTopRight: 'LIVE',
        },
       
        
      ];
      
     
        const settings = {
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 0,
          autoplay: true, // Enable autoplay
          autoplaySpeed: 2000,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        };
  return (
    <div>





    <div className="flex flex-col w-[100%] exo xl:h-auto xl:p-40  overflow-x-hidden justify-center items-center gap-5 mx-auto lg:h-[80vh]">
      <p className="atomicage  h p-5 font-bold text-[#69AF00] text-center">Acc€$$ CrypTokens & Nfts</p>
      <div className="lg:max-w-[1200px] w-full">
        <Slider className="mx-auto" {...settings}>
          {sliderItems.map((item, index) => (
            <div key={index} className="h-[300px] gap-5 relative overflow-hidden custom-card mx-[30px] lg:mx-5 border bg-[#03C649] rounded-[40px]">
              <img src={item.imgSrc} alt="" className="w-[200px] h-[150px] mx-auto mt-10" />
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
      <p className="flex-grow-0 flex-shrink-0 text-[12px] min-w-fit font-bold text-center text-[#ecdd91]">
        MINT NOW
      </p>
    </div>
  </div>
</div>;

              </button></Link> 
              <button className="absolute top-0 right-0 rounded-full py-1 tracking-[2px] w-[125px] bg-[#69AF00] text-white">{item.labelTopRight}</button>
              <button className="absolute top-0 left-0 rounded-full py-2 tracking-[2px] w-[125px] text-[10px] pl-5 bg-[#69AF00] text-[#ECDD91]">{item.labelTopLeft}</button>
            </div>
          ))}
        </Slider>
      </div>
    </div>




    </div>
  )
}

export default Club2