"use client"
import React from 'react'
import { motion } from 'framer-motion';

const AboutUS = () => {
      return (
            <div id='aboutUS' className='mt-40 text-center'>
                  <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                        <div>
                              <p className='uppercase text-sm tracking-widest text-gray-600'>
                                    LET&#39;S BUILD SOMETHING TOGETHER
                              </p>
                              <h1 className='py-4 text-gray-700'>
                                    Hi, We Are <span className='text-[#5651e5]'>SiccaDev </span>
                              </h1>
                              <h1 className='py-2 text-gray-700'>A Full-Stack Web & Mobile App Development Team</h1>
                              <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
                                    We Are focused on building responsive web & mobile applications
                                    integrating back-end technologies.
                              </p>
                        </div>
                  </div>
            </div>
      );
};

export default AboutUS;
