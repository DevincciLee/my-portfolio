import React from 'react'
import {ReactTyped} from 'react-typed'
import Headshot from '../assets/headshot.jpeg';

const HomepageContent = () => {
  return (
    <section className='full-section animate-loadstart w-full bg-[#1A2338] min-h-[85vh] flex flex-col md:flex-row items-center justify-center gap-8 p-6 md:p-12 text-[#111827] overflow-hidden'>
      {/* Image */}
      <div className="image-content flex justify-center items-center w-full md:w-1/2">
        <img
          src={Headshot}
          alt="VinnySushi headshot"
          className='transition-transform duration-300 hover:scale-105 w-[80vw] md:h-[60vh] sm:w-2/3 md:w-full max-w-sm md:max-w-lg sm:h-[60vh] object-cover rounded-xl border border-gray-900 shadow-xl'
        />
      </div>

      {/* Texts */}
      <div className="text-content flex flex-col items-center md:items-start justify-center text-justify md:text-left w-full md:w-1/2">
        <h1 className='name text-3xl sm:text-4xl text-white md:text-5xl lg:text-6xl xl:text-8xl font-semibold leading-tight max-w-4xl'>VinnySushi</h1>
        <h2 className='text-[#fff7f4] mt-1 mb-5 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl leading-snug max-w-3xl'><ReactTyped className='role text-[#2F4C3E]' strings={["Backend", "Systems", "Web"]} typeSpeed={40} backSpeed={30} loop/> Developer</h2>
        <h4 className='my-role text-[#fff7f4] text-center md:text-justify xl:w-[80%] lg:text-justify text-md sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl'>Building scalable websites &   systems with focus, collaboration, and continuous improvement—delivering intuitive interfaces and optimized backend performance.</h4>
        <div className="mt-6 md:mt-4 xl:mt-8 w-full md:w-auto flex justify-center md:justify-start">
        <a href="https://www.facebook.com/devinccilee" className='w-full sm:w-auto'><button
          type="button"
          aria-label="Contact Me"
          className="transition-transform hover:scale-105 duration-300 w-full sm:w-auto bg-[#2E3A4A] text-[#f8f8f8] text-sm sm:text-xl xl:text-3xl xl:px-10 xl:py-6 px-6 py-3.5 sm:px-8 sm:py-4 rounded-lg shadow-md hover:brightness-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8cd8dc] transition"
        >
          Contact Me
        </button></a>
        <a href="https://www.facebook.com/devinccilee" className='w-full sm:w-auto ml-5'><button
          type="button"
          aria-label="Resume"
          className="transition-transform hover:scale-105 duration-300 w-full sm:w-auto bg-[#2E3A4A] xl:text-3xl xl:px-10 xl:py-6 text-[#f8f8f8] text-sm sm:text-xl px-6 py-3.5 sm:px-8 sm:py-4 rounded-lg shadow-md hover:brightness-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8cd8dc] transition"
        >
          Resume
        </button></a>
        </div>
      </div>
    </section>
  )
}

export default HomepageContent