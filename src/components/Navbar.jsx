import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/devsushilogo-nobg.png';
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
    <div className='bg-[#f8f3f3] flex justify-between items-center h-24 max-w-[100%] mx-auto px-4 text-[#ef8e64] border-b border-gray-200'>
      {/* Logo */}
      <h1 className='flex items-center text-white'>
        <a href='https://github.com/DevincciLee' aria-label="Home" className='flex items-center gap-0'>
          <img
            src={logo}
            alt="logo"
            className='h-16 sm:h-20 md:h-14 lg:h-20 xl:h-24 object-contain'
          />
          <span className='text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl font-bold text-[#ef8e64] mx-0'>
            vinnySushi
          </span>
        </a>
      </h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
        <Link to={`/vinnySushiPortfolio/${item.text.toLowerCase()}`}>
          <li
            key={item.id}
            className='p-4 hover:bg-[#ef8e64] rounded-3xl m-2 cursor-pointer duration-300 hover:text-[#fdfaf3] font-bold'
          >
            {item.text}
          </li>
          </Link>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-300 bg-[#f8f3f3] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='flex items-center text-white'>
        <a href='https://github.com/DevincciLee' aria-label="Home" className='flex items-center gap-0'>
          <img
            src={logo}
            alt="logo"
            className='h-16 sm:h-20 md:h-14 lg:h-20 xl:h-24 object-contain'
          />
          <span className='text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl font-bold text-[#ef8e64] mx-0'>
            vinnySushi
          </span>
        </a>
        </h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <Link to={`/vinnySushiPortfolio/${item.text.toLowerCase()}`}>
          <li
            key={item.id}
            className='p-4 border-b duration-300 cursor-pointer border-gray-200 font-bold'
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