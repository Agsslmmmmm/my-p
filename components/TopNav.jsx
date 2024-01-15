"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link as ScrollLink, animateScroll as scrollLink } from 'react-scroll';

const TopNav = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <nav className="blur-shadow fixed top-0 z-50 w-full rounded-b-3xl p-0 bg-transparent backdrop-blur-2xl shadow-md items-center justify-center shadow-purple-500" data-aos="fade-down" data-aos-duration="500">
            <div className="h-16 flex justify-center items-center text-center px-4 container mx-auto">
                <a href='/' className="text-lg font-bold animate-bounce">
                    <span className="text-gray-600">Agus <span className='text-purple-600'>Salim</span></span>
                </a>
               
            </div>
        </nav>
    );
}

export default TopNav;
