'use client'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const page = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div class="h-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-white" >
            <div class="grid lg:grid-cols-2 lg:gap-y-16 gap-10 mt-20" data-aos='fade-up' data-aos-duration="700">
                <a class="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/article1">
                    {/* Article 1 */}
                    <div class="sm:flex">
                        <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                            <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 start-0 object-cover rounded-xl" src="https://2.bp.blogspot.com/-FX8CN2hDAAY/XGEttabS2vI/AAAAAAAALis/548mLO2oJ58lsWjLa76RpOWMat0o3g4xACLcBGAs/s1600/pengertian-sistem-informasi.jpg" alt="Image Description" />
                        </div>

                        <div class="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                            <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                            Sistem Informasi
                            </h3>
                            <p class="mt-3 text-gray-600 dark:text-gray-400">
                            Tempat Blog Sistem Informasi.
                            </p>
                            <p class="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                                Read more
                                <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </p>
                        </div>
                    </div>
                </a>

                <a class="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                    <div class="sm:flex">
                        <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                            <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80" alt="Image Description" />
                        </div>

                        <div class="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                            <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                                Onsite
                            </h3>
                            <p class="mt-3 text-gray-600 dark:text-gray-400">
                                Optimize your in-person experience with best-in-class capabilities like badge printing and lead retrieval
                            </p>
                            <p class="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                                Read more
                                <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </p>
                        </div>
                    </div>
                </a>

                <a class="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                    <div class="sm:flex">
                        <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                            <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="Image Description" />
                        </div>

                        <div class="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                            <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                                The complete guide to OKRs
                            </h3>
                            <p class="mt-3 text-gray-600 dark:text-gray-400">
                                How to make objectives and key results work for your company
                            </p>
                            <p class="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                                Read more
                                <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </p>
                        </div>
                    </div>
                </a>

                <a class="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                    <div class="sm:flex">
                        <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                            <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description" />
                        </div>

                        <div class="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                            <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                                People program models
                            </h3>
                            <p class="mt-3 text-gray-600 dark:text-gray-400">
                                Six approaches to bringing your People strategy to life
                            </p>
                            <p class="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                                Read more
                                <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default page
