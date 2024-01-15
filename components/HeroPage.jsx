'use client'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const HeroPage = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8 pt-14">
      <div className="grid container md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center" data-aos="zoom-in-down" data-aos-duration="900">
        <div className='container items-center'>
          <h1 className="block text-xl font-bold text-gray-600 sm:text-4xl lg:text-6xl lg:leading-tight ">Hi👋, I'am <span className='text-purple-600'>Mohammad Agus Salim</span></h1>
          <p className="mt-3 text-lg text-gray-600 " >
            Welcome to my personal blog, a place where stories and knowledge meet! In our hero section, you will immediately feel the energetic vibrations of the interesting topics we discuss. With captivating titles and high-quality images or videos, we invite you to reflect and explore the unique world we present.
          </p>




        </div>

        <div className="relative pt-4 ms-4">
          <img className="w-full rounded-md" src="/profile.png" alt="Image Description" />


        </div>
      </div>
    </div>
  )
}

export default HeroPage
