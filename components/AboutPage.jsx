'use client'
import React, { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'

const AboutPage = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto" id='about' data-aos="fade-up" data-aos-duration='700'>
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14 pt-20">
        <h2 className="text-2xl font-bold md:text-3xl md:leading-tight text-gray-600">
          About Me
        </h2>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-6 md:gap-12">
          <div>
            <h3 className="text-lg font-semibold text-gray-600">
              Who Am I?
            </h3>
            <p className="mt-2 text-gray-600">
              I am a Frontend Developer with 2 years of experience in this industry.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-600">
              What Do I Do?
            </h3>
            <p className="mt-2 text-gray-600">
              My primary responsibilities involve. I am committed to delivering to every project I handle.
            </p>
          </div>





          <div>
            <h3 className="text-lg font-semibold text-gray-600">
              How to Reach Me
            </h3>
            <p className="mt-2 text-gray-600">
              If you are interested in working together or just want to chat, feel free to reach out to me via social media at Agsslmmm_.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
