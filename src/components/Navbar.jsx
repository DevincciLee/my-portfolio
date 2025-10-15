import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/vinnysushi.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'About' },
    { id: 3, text: 'Experiences' }
  ];

  return (
    <div className='navbar bg-[#1A2338] flex justify-between items-center h-24 max-w-[100%] mx-[4vw] text-white px-2 py-0'>
      {/* Logo */}
      <h1 className='flex items-center px-4 rounded-xl'>
        <a href='https://github.com/DevincciLee' aria-label="Home" className='flex items-center gap-0'>
          <img
            src={logo}
            alt="logo"
            className='rounded-full h-10 sm:h-8 md:h-8 lg:h-10 xl:h-15 object-contain'
          />
          <span className='text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl text-white ml-2'>
            vinnySushi
          </span>
        </a>
      </h1>

      {/* Desktop Navbar */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
        <Link to={`/vinnySushiPortfolio/${item.text.toLowerCase()}`}>
          <li
            key={item.id}
            className='p-4 hover:bg-white rounded-xl m-2 cursor-pointer duration-300 hover:text-[#1A2338]'
          >
            {item.text}
          </li>
          </Link>
        ))}
      </ul>

      {/* Close Open */}
      <div onClick={handleNav} className='block md:hidden pr-6'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-700 bg-[#1A2338] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='flex items-center text-white'>
        <a href='https://github.com/DevincciLee' aria-label="Home" className='flex items-center gap-0'>
          <img
            src={logo}
            alt="logo"
            className='rounded-full m-2 h-10 sm:h-10 md:h-12 lg:h-20 xl:h-24 object-contain'
          />
          <span className='text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl text-white'>
            vinnySushi
          </span>
        </a>
        </h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <Link to={`/vinnySushiPortfolio/${item.text.toLowerCase()}`}>
          <li
            key={item.id}
            className='p-4 border-b duration-300 cursor-pointer border-gray-700'
          >
            {item.text}
          </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;