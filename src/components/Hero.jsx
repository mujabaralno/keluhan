import React from 'react'
import Contact from './Contact'

const Hero = () => {
  return (
    <section className='max-container'>
        <h1 className='mt-5 text-5xl  font-Poppins font-extrabold leading-[1.15] text-[#0072ff] sm:text-6xl text-center font-Poppins'>
        Laporkan Keluhan Anda <br className='max-md:hidden' />
        <span className='bg-gradient-to-r from-[#f5f5f5] via-[#0072ff] to-[#0072ff] bg-clip-text text-transparent font-Poppins'>Kami siap membantu</span>
      </h1>
      <h2 className='mt-5 text-lg text-gray-600 sm:text-xl text-center max-w-2xlfont-Poppins'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, error?
      </h2>
      <Contact />
    </section>
  )
}

export default Hero