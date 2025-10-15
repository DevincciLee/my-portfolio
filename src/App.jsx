import React from 'react'
import Navbar from './components/Navbar'
import HomepageContent from './components/HomepageContent'

const App = () => {
  return (
    <div className='bg-[#1A2338] h-screen w-full mx-0 px-0 text-[#ef8e64]'>
      <Navbar />
      <HomepageContent />
    </div>
  )
}

export default App