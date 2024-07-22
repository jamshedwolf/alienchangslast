import React from 'react';
import bg from "./ebg.svg";

function Club5() {
  return (
    <div className="xl:h-auto xl:p-20 flex items-center justify-center">
      <div className="max-w-[1400px] flex items-center flex-col p-4 px-auto">
        <div
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className='flex items-center lg:w-[900px] exo w-auto transition-all ease-linear duration-200 hover:scale-105 lg:py-20 text-center border max-w-[900px] rounded-lg lg:rounded-full justify-center flex-col px-10 py-10 gap-5'
        >
          <div className="flex gap-2 h mx-auto text-white text-center font-extrabold">Eco flow</div>
          <p className="text-center  text-white mx-auto">
            Enjoy fully customizable and sustainable experiences such as; <br />
            gastronomy, travel and order crystals, gems, jewelry and ecological textiles such as caps,<br />
            hats, visors, t-shirts, shirts, polos, jackets, sweaters, socks, bags,<br />
            cases, backpacks
          </p>
        </div>
      </div>
    </div>
  );
}

export default Club5;
