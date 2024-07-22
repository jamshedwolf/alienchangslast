import React from 'react'
import bg from "./ebg.svg";
import girl from "./girl.svg";
import girl2 from "./girl2.svg";
import prod from "./prod.svg";
import prod2 from "./prod2.svg";
import copy from "../../assets/images/copy.svg";
import mint from "../../assets/images/mint.svg";
import crd2 from "../../assets/images/crd2.svg";
import crd3 from "../../assets/images/crd3.svg";
import crd4 from "../../assets/images/crd4.svg";
import diamond from "../../assets/images/diamond.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../home/card.css";



   
function Club6() {

    const sliderItems = [
        { imgSrc: girl },
        { imgSrc: prod },
        { imgSrc: prod2 },
        { imgSrc: girl2 },
        { imgSrc: prod },
       
    ];

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
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
    <div className=''>
<div className="flex flex-col exo py-5 w-full xl:h-auto xl:py-40 overflow-x-hidden justify-center items-center gap-5 mx-auto lg:h-[80vh]">

<div className="lg:max-w-[1200px] w-full">
    <Slider className="mx-auto" {...settings}>
        {sliderItems.map((item, index) => (
            <div key={index} className="h-[300px] gap-5 relative overflow-hidden custom-card mx-[30px] lg:mx-5 border bg-[#03C649] rounded-[40px]">
                <img src={item.imgSrc} alt="" className="w-[200px] h-[150px] mx-auto mt-10" />

                <button className=" rounded-full flex items-center gap-2 exo py-2 tracking-[2px] w-[125px] text-[10px] pl-5 bg-[#69AF00] font-bold text-[#ECDD91]"><img src={diamond} alt="" className="" />   Connect</button>
            </div>
        ))}
    </Slider>
</div>
</div>




    </div>
  )
}

export default Club6