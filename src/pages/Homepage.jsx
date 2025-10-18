import React from 'react';
import Navbar from '../components/Navbar';
import { ReactTyped } from 'react-typed';

const Homepage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a0f2c] via-[#1c1b3a] to-black text-white">
            <Navbar />
            <main className="flex flex-col items-center px-4 py-10 gap-16">
                {/* Overview Section */}
                <section className="w-full max-w-6xl">
                    <header className="mb-4">
                        <h2 className="text-xl md:text-2xl font-semibold tracking-wide text-amber-300">#overview</h2>
                    </header>
                    <div className="glass rounded-2xl p-6 md:p-10 flex flex-col gap-6 items-center text-center shadow-lg backdrop-blur-md bg-white/10">
                        <h2 className="text-lg md:text-3xl font-bold text-white">
                            From ZEROs to ONEs, Designs to Code, and Codes to Systems.
                        </h2>
                        <h2 className="text-md md:text-2xl font-medium text-white">
                            Hi! I'm a{' '}
                            <ReactTyped
                                strings={['Full Stack Web', 'Java', 'Python', 'MERN Stack']}
                                typeSpeed={50}
                                backSpeed={30}
                                loop
                            />{' '}
                            Developer!
                        </h2>
                        <p className="text-sm md:text-lg text-gray-300 max-w-3xl text-justify">
                            I build clean, scalable backend systems and connect them smoothly to the front end. I enjoy solving tough problems and making tech feel simple and intuitive.
                        </p>
                        <button className="mt-4 px-6 py-3 bg-amber-300 text-black font-semibold rounded-full hover:bg-amber-400 transition duration-300">
                            Hire Me!
                        </button>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="w-full max-w-6xl">
                    <header className="mb-4">
                        <h2 className="text-xl md:text-2xl font-semibold tracking-wide text-amber-300">#about</h2>
                    </header>
                    <div className="glass rounded-2xl p-6 md:p-10 h-[400px] md:h-[600px] flex justify-center items-center text-center shadow-lg backdrop-blur-md bg-white/10">
                        <p className="text-gray-300 text-base md:text-lg">overview</p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Homepage;
// import React from 'react';
// import Navbar from '../components/Navbar';
// import { ReactTyped } from 'react-typed';

// const Homepage = () => {
//   return (
//     <div className="min-h-screen bg-black text-white">
//       <Navbar />
//       <div className="animate-loadstart flex flex-col gap-10 justify-around items-center px-4 py-8">
//         {/* Overview Section */}
//         <section className="w-full max-w-6xl">
//           <h2 className="text-base md:text-xl font-semibold mb-2">#overview</h2>
//           <div className="glass rounded-xl w-full h-auto md:h-[40vh] flex flex-col gap-6 justify-around items-center text-center p-6">
//             <h2 id="font-border" className="text-lg sm:text-xl md:text-3xl">
//               From ZEROs to ONEs, Designs to Code, and Codes to Systems.
//             </h2>
//             <h2 id="font-border" className="text-md sm:text-lg md:text-2xl">
//               Hi! I'm a{' '}
//               <ReactTyped
//                 strings={['Full Stack Web', 'Java', 'Python', 'MERN Stack']}
//                 typeSpeed={50}
//                 backSpeed={30}
//                 loop
//               />{' '}
//               Developer!
//             </h2>
//             <h2 id="font-border" className="text-sm sm:text-base md:text-xl">
//               I build clean, scalable backend systems and connect them smoothly to the front end. I enjoy solving tough problems and making tech feel simple and intuitive.
//             </h2>
//             <button className="h-12 w-40 sm:w-48 md:w-56 bg-amber-200 text-black font-semibold rounded-md hover:bg-amber-300 transition">
//               Hire Me!
//             </button>
//           </div>
//         </section>

//         {/* About Section */}
//         <section id="view" className="w-full max-w-6xl">
//           <h2 className="text-base md:text-xl font-semibold mb-2">#about</h2>
//           <div className="glass rounded-xl w-full h-[400px] md:h-[600px] flex justify-center items-center p-4 text-center">
//             overview
//           </div>
//         </section>

//         {/* Second Overview Section */}
//         <section id="view" className="w-full max-w-6xl mb-8">
//           <h2 className="text-base md:text-xl font-semibold mb-2">#overview</h2>
//           <div className="glass rounded-xl w-full h-[500px] md:h-[800px] flex justify-center items-center p-4 text-center">
//             overview
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Homepage;


// /*import React from 'react'
// import Navbar from '../components/Navbar'
// import { ReactTyped } from 'react-typed';


// const Homepage = () => {
//   return (
//     <div className='h-full'>
//         <Navbar />
//     <div className='animate-loadstart text-white flex flex-col gap-10 justify-around items-center h-full'>
//         <div className="mt-8">
//             <h2>#overview</h2>
//             <div className="glass rounded-xl mt-4 md:w-[68vw] w-[80vw] h-[60vh] md:h-[40vh] flex flex-col gap-10 justify-around md:text-center items-center text-justify">
//                 <h2 id='font-border' className='pl-4 sm:pl-4 pt-4 text-lg md:text-3xl'>From ZEROs to ONEs, Designs to Code, and Codes to Systems.</h2>
//                 <h2 id='font-border' className='pl-4 sm:pl-4 pt-4 text-md md:text-2xl'>Hi! I'm a <ReactTyped strings={['Full Stack Web', 'Java', 'Python', 'MERN Stack']} typeSpeed={50} backSpeed={30} loop /> Developer!</h2>
//                 <h2 id='font-border' className='pl-4 sm:pl-4 pt-4 pb-6 text-sm md:text-xl'>I build clean, scalable backend systems and connect them smoothly to the front end. I enjoy solving tough problems and making tech feel simple and intuitive.</h2>
//                 <button className='h-[20vh] w-[30vw]  bg-amber-200 '>
//                     Hire Me!
//                 </button>
//             </div>
//         </div>
//         <div id="view" className="mt-4">
//             <h2>#about</h2>
//             <div className="glass rounded-xl mt-4 w-[68vw] h-[600px] flex justify-center items-center">
//             overview
//             </div>
//         </div>
//         <div id="view" className="mt-4 mb-8">
//             <h2>#overview</h2>
//             <div className="glass rounded-xl mt-4 w-[68vw] h-[800px] flex justify-center items-center">
//             overview
//             </div>
//         </div>
//     </div>
//     </div>
//   )
// }

// export default Homepage*/