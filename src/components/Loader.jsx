import React from 'react';
import logo from '../assets/devsushilogo-nobg.png';
import '../index.css';


const Loader = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#ef8e64] animate-loadstart">
      <div className="loader bg-[#fdfaf3] p-1 rounded-full flex space-x-3">
        <img
          src={logo}
          alt="logo"
          className="h-14 sm:h-20 md:h-14 lg:h-20 xl:h-20 object-contain animate-spin"
        />
        <img
          src={logo}
          alt="logo"
          className="h-14 sm:h-20 md:h-14 lg:h-20 xl:h-20 object-contain animate-spin"
        />
        <img
          src={logo}
          alt="logo"
          className="h-14 sm:h-20 md:h-14 lg:h-20 xl:h-20 object-contain animate-spin"
        />
      </div>
    </div>
  );
}

export default Loader