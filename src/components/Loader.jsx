import React from 'react';
import logo from '../assets/vinnysushi.jpg';
import '../index.css';


const Loader = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#1a2338] animate-loadstart">
      <div className="loader bg-[#fdfaf3] px-4 py-2 rounded-full flex shadow-xl border border-gray-700 space-x-3">
        <img
          src={logo}
          alt="logo"
          className="rounded-full h-12 sm:h-18 md:h-10 lg:h-20 xl:h-16 object-contain animate-spin"
        />
        <img
          src={logo}
          alt="logo"
          className="rounded-full h-12 sm:h-18 md:h-10 lg:h-20 xl:h-16 object-contain animate-spin"
        />
        <img
          src={logo}
          alt="logo"
          className="rounded-full h-12 sm:h-18 md:h-10 lg:h-20 xl:h-16 object-contain animate-spin"
        />
      </div>
    </div>
  );
}

export default Loader