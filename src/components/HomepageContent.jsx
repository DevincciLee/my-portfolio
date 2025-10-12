import React from 'react'
import {ReactTyped} from 'react-typed'
import Headshot from '../assets/headshot.jpeg';

const HomepageContent = () => {
  return (
    
    /* Image */
    <section className='animate-loadstart w-full bg-gradient-to-b from-[#00000000] to-[#e36844] min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 p-6 md:p-12 text-[#111827]'>
      <div className="image-content flex justify-center items-center w-full md:w-1/2">
        <img
          src={Headshot}
          alt="VinnySushi headshot"
          className='w-3/4 sm:w-2/3 md:w-full max-w-sm md:max-w-lg h-[50vh] object-cover rounded-full border-2 border-white shadow-xl'
        />
      </div>

      {/* Texts */}
      <div className="text-content flex flex-col items-center md:items-start justify-center text-justify md:text-left w-full md:w-1/2">
        <h1 className='text-3xl sm:text-4xl text-[#fff7f4] md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight max-w-4xl'>VinnySushi</h1>
        <h2 className='text-[#fff7f4] mt-1 mb-5 text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold leading-snug max-w-3xl'><ReactTyped className='text-[#ff5f2f]' strings={["Backend", "Systems", "Web"]} typeSpeed={40} backSpeed={30} loop/> Developer</h2>
        <h4 className='text-[#fff7f4] font-semibold text-justify text-lg sm:text-l md:text:xl lg:text-2xl xl:3xl'>With a keen eye for detail, a relentless drive for improvement, and a commitment to excellence, I craft seamless, scalable solutions across the full development stack. Whether I’m designing intuitive interfaces or optimizing backend performance, I bring focus, dedication, and a collaborative spirit to every project.
        I’m always learning, always improving, and always striving to deliver high-quality, impactful work.</h4>
        <div className="mt-6 md:mt-4 w-full md:w-auto flex justify-center md:justify-start">
        <a href="https://www.facebook.com/devinccilee"><button
          type="button"
          aria-label="Contact Me"
          className="bg-[#ff5f2f] text-[#f8f8f8] my-5 mr-4 text-2xl px-15 py-5 rounded-lg font-semibold shadow-md hover:brightness-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8cd8dc] transition"
        >
          Contact Me
        </button></a>
        <a href="https://www.facebook.com/devinccilee"><button
          type="button"
          aria-label="Resume"
          className="bg-[#ff5f2f] text-[#f8f8f8] my-5 text-2xl px-15 py-5 rounded-lg font-semibold shadow-md hover:brightness-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8cd8dc] transition"
        >
          Resume
        </button></a>
        </div>
      </div>
    </section>
  )
}

export default HomepageContent