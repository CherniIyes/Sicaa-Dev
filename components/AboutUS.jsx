import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiTailwindcss } from "react-icons/si";
import ImgNextt from "../public/next.svg"

const AboutUS = () => {
      return (
            <div id='home' className='my-52 text-center'>
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
            </div>
      );
};

export default AboutUS;