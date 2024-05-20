"use client"
import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiTailwindcss } from "react-icons/si";
import ImgNextt from "../public/next.svg"

const AboutUS = () => {
      return (
            <div id='aboutUS' className='my-44 text-center'>

                  <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                        <div>
                              <p className='uppercase text-sm tracking-widest text-gray-600'>
                                    LET&#39;S BUILD SOMETHING TOGETHER
                              </p>
                              <h1 className='py-4 text-gray-700'>
                                    Hi, We Are <span className='text-[#5651e5]'>SicaaDev </span>
                              </h1>
                              <h1 className='py-2 text-gray-700'>A Full-Stack Web & Mobile App Developement Team</h1>
                              <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
                                    We Are focused on building responsive web & mobile applications
                                    integrating back-end technologies.
                              </p>

                              <div className='sm:flex items-center sm:justify-between sm:max-w-[530px] grid grid-cols-2 max-w-[180px]  m-auto py-4'>

                                    <div className='cursor-pointer hover:scale-110 ease-in duration-300 my-5 flex flex-col items-center'>
                                          <Image src={ImgNextt} alt='/' width='50' height='40' />
                                          <p>Next.js</p>

                                    </div>


                                    <div className='cursor-pointer hover:scale-110 ease-in duration-300 my-5 flex flex-col items-center'>
                                          <Image src={ImgNextt} alt='/' width='50' height='40' />
                                          <p>Next.js</p>
                                    </div>


                                    <div className='cursor-pointer hover:scale-110 ease-in duration-300 my-5 flex flex-col items-center'>
                                          <Image src={ImgNextt} alt='/' width='50' height='40' />
                                          <p>Next.js</p>
                                    </div>


                                    <div className='cursor-pointer hover:scale-110 ease-in duration-300 my-5 flex flex-col items-center'>
                                          <Image src={ImgNextt} alt='/' width='50' height='40' />
                                          <p>Next.js</p>
                                    </div>

                                    <div className='cursor-pointer hover:scale-110 ease-in duration-300 my-5 flex flex-col items-center'>
                                          <Image src={ImgNextt} alt='/' width='50' height='40' />
                                          <p>Next.js</p>
                                    </div>

                                    <div className='cursor-pointer hover:scale-110 ease-in duration-300 my-5 flex flex-col items-center'>
                                          <Image src={ImgNextt} alt='/' width='50' height='40' />
                                          <p>Next.js</p>
                                    </div>

                              </div>
                        </div>
                  </div>
                  
                  <div className='flex justify-center items-center'>
                        <motion.svg
                              initial={{ opacity: 0.2, y: 0 }}
                              animate={{ opacity: 1, y: "10px" }}
                              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              width={50}
                              height={50}
                        >
                              <path
                                    d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                    stroke="#000000"
                                    strokeWidth="1"
                              ></path>
                              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                              <path
                                    d="M15 11L12 14L9 11"
                                    stroke="#000000"
                                    strokeWidth="1"
                              ></path>
                        </motion.svg>
                  </div>
            </div>
      );
};

export default AboutUS;