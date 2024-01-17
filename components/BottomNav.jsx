'use client'
import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const BottomNav = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div class="md:hidden fixed bg-white/30 backdrop-blur bottom-0 w-full h-16 left-0 shadow-[0px_-4px_6px_-1px_#bae6fd] rounded-t-3xl flex items-center justify-around px-4" data-aos="fade-top" data-aos-duration="500">
            <a class="p-2 hover:text-sky-400" href="/">
                <span class="sr-only">Home</span>
                <svg class="line w-6 h-6" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 18V15"></path>
                    <path d="M10.07 2.81997L3.14002 8.36997C2.36002 8.98997 1.86002 10.3 2.03002 11.28L3.36002 19.24C3.60002 20.66 4.96002 21.81 6.40002 21.81H17.6C19.03 21.81 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.98997 20.86 8.36997L13.93 2.82997C12.86 1.96997 11.13 1.96997 10.07 2.81997Z">
                    </path>
                </svg>
            </a>
            <a class="p-2 hover:text-sky-400" href="#about">
                <span class="sr-only">About</span>
                <svg class="line w-6 h-6" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z">
                    </path>
                    <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22"></path>
                </svg>
            </a>
            <a class="p-2 hover:text-sky-400" href="#skills">
                <span class="sr-only">Skills</span>
                <svg class="line w-6 h-6" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M22 16.7399V4.66994C22 3.46994 21.02 2.57994 19.83 2.67994H19.77C17.67 2.85994 14.48 3.92994 12.7 5.04994L12.53 5.15994C12.24 5.33994 11.76 5.33994 11.47 5.15994L11.22 5.00994C9.44 3.89994 6.26 2.83994 4.16 2.66994C2.97 2.56994 2 3.46994 2 4.65994V16.7399C2 17.6999 2.78 18.5999 3.74 18.7199L4.03 18.7599C6.2 19.0499 9.55 20.1499 11.47 21.1999L11.51 21.2199C11.78 21.3699 12.21 21.3699 12.47 21.2199C14.39 20.1599 17.75 19.0499 19.93 18.7599L20.26 18.7199C21.22 18.5999 22 17.6999 22 16.7399Z">
                    </path>
                    <path d="M12 5.48999V20.49"></path>
                    <path d="M7.75 8.48999H5.5"></path>
                    <path d="M8.5 11.49H5.5"></path>
                </svg>
            </a>
            <a class="p-2 hover:text-sky-400" href="#portofolio">
                <span class="sr-only">Portofolio</span>
                <svg class="line w-6 h-6" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z">
                    </path>
                    <path d="M22 19.77V15.73C22 14.14 21.36 13.5 19.77 13.5H15.73C14.14 13.5 13.5 14.14 13.5 15.73V19.77C13.5 21.36 14.14 22 15.73 22H19.77C21.36 22 22 21.36 22 19.77Z">
                    </path>
                    <path d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z">
                    </path>
                    <path d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z">
                    </path>
                </svg>
            </a>
            <a class="p-2 hover:text-sky-400" href="#contact">
                <span class="sr-only">Contact</span>
                <svg class="line w-6 h-6" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M18.47 16.83L18.86 19.99C18.96 20.82 18.07 21.4 17.36 20.97L13.17 18.48C12.71 18.48 12.26 18.45 11.82 18.39C12.56 17.52 13 16.42 13 15.23C13 12.39 10.54 10.09 7.49997 10.09C6.33997 10.09 5.26997 10.42 4.37997 11C4.34997 10.75 4.33997 10.5 4.33997 10.24C4.33997 5.68999 8.28997 2 13.17 2C18.05 2 22 5.68999 22 10.24C22 12.94 20.61 15.33 18.47 16.83Z">
                    </path>
                    <path d="M13 15.23C13 16.42 12.56 17.5201 11.82 18.3901C10.83 19.5901 9.26 20.36 7.5 20.36L4.89 21.91C4.45 22.18 3.89 21.81 3.95 21.3L4.2 19.3301C2.86 18.4001 2 16.91 2 15.23C2 13.47 2.94 11.9201 4.38 11.0001C5.27 10.4201 6.34 10.0901 7.5 10.0901C10.54 10.0901 13 12.39 13 15.23Z">
                    </path>
                </svg>
            </a>
        </div>
    )
}

export default BottomNav
