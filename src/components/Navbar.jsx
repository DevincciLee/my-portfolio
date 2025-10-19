import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
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
    { id: 1, text: 'Info' },
    { id: 2, text: 'Experiences' }
  ];

  return (
    <div className='animate-loadstart navbar flex justify-evenly items-center h-24 w-full max-w-[100%] text-white py-0'>
      {/* Logo */}
      <h1 className='flex items-center rounded-xl'>
        <a href='https://github.com/DevincciLee' aria-label="Home" className='flex items-center gap-0'>
          <span className='text-xs sm:text-base md:text-sm lg:text-md xl:text-lg text-white'>
            Cyrus Mendoza
          </span>
          <span className='text-xs sm:text-base md:text-sm lg:text-md xl:text-lg text-white pl-2'>
            {";"}
          </span>
        </a>
      </h1>

      {/* Desktop Navbar */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
        <Link to={`/my-portfolio/${item.text.toLowerCase()}`}>
          <li
            key={item.id}
            className='p-4 duration-300 transition-transform hover:scale-115 hover:underline hover:bg-white rounded-xl cursor-pointer duration-300 hover:text-[#1A2338]'
          >
            {item.text}
          </li>
          </Link>
        ))}
      </ul>

      {/* Desktop Logo Redirections */}
      <div className="gap-5 hidden md:flex">
        <a href="https://github.com/DevincciLee">
          <FaGithub size={40}></FaGithub>
        </a>
        <a href="https://www.linkedin.com/in/cyrus-lyndon-mendoza-45369733a/">
          <FaLinkedin size={40}>
          </FaLinkedin>
        </a>
      </div>

      {/* Close Open */}
      <div onClick={handleNav} className='block md:hidden pr-6'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-screen border-r border-r-gray-700 bg-[#1A2338] ease-in-out duration-200'
            : 'h-screen ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='flex items-center text-white mb-8 mt-8'>
        <a href='https://github.com/DevincciLee' aria-label="Home" className='flex items-center gap-0'>
          <span className='text-xs sm:text-base md:text-sm lg:text-md xl:text-lg text-white pl-4'>
            Cyrus Mendoza
          </span>
          <span className='text-xs sm:text-base md:text-sm lg:text-md xl:text-lg text-white pl-2'>
            {";"}
          </span>
        </a>
        </h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <Link to={`/my-portfolio/${item.text.toLowerCase()}`}>
          <li
            key={item.id}
            className='text-xs sm:text-base md:text-sm lg:text-md xl:text-lg text-white p-4 border-b duration-300 cursor-pointer border-gray-700'
          >
            {item.text}
          </li>
          </Link>
        ))}
        {/* Mobile Logo Redirections */}
        <div className="pt-4 gap-5 flex flex-col md:hidden">
            <a href="https://github.com/DevincciLee" className='bg-[#1A2338] border-b border-gray-700 flex flex-row items-center text-xs sm:text-base md:text-sm lg:text-md xl:text-lg'>
              <FaGithub size={30} className='mb-4 ml-4'></FaGithub>
            </a>
          <a href="https://www.linkedin.com/in/cyrus-lyndon-mendoza-45369733a/" className='bg-[#1A2338] border-b border-gray-700'>
            <FaLinkedin size={30} className='mb-4 ml-4'></FaLinkedin>
          </a>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;