"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';



const Navbar = () => {
      const [nav, setNav] = useState(false);
      const [color, setColor] = useState('transparent');
      const [navBg, setNavBg] = useState('#ecf0f3');
      const [linkColor, setLinkColor] = useState('#1f2937');
      const [textColor, setTextColor] = useState('white');
      useEffect(() => {
            const changeColor = () => {
                  if (window.scrollY >= 90) {
                        setColor('#ffffff');
                        setTextColor('#000000');
                  } else {
                        setColor('transparent');
                        setTextColor('#ffffff');
                  }
            };
            window.addEventListener('scroll', changeColor);
      }, []);


      const handleNav = () => {
            setNav(!nav);
      };



      return (
            <div style={{ backgroundColor: `${color}` }} className={color ? 'fixed w-full h-20  z-[100] ease-in-out duration-300' : 'fixed w-full h-20 z-[100]'}>


                  <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                        <Link href='/'>
                              <h1 style={{ color: `${textColor}` }} className='font-bold text-4xl'>
                                    SicaaDev
                              </h1>
                        </Link>
                        <div>
                              <ul style={{ color: `${textColor}` }} className='hidden md:flex'>
                                    <li className='ml-10 text-sm uppercase hover:border-b'>
                                          <Link href='/'>Home</Link>
                                    </li>
                                    <li className='ml-10 text-sm uppercase hover:border-b'>
                                          <Link href='/#about'>About</Link>
                                    </li>
                                    <li className='ml-10 text-sm uppercase hover:border-b'>
                                          <Link href='/#skills'>Skills</Link>
                                    </li>
                                    <li className='ml-10 text-sm uppercase hover:border-b'>
                                          <Link href='/#projects'>Projects</Link>
                                    </li>
                                    <li className='ml-10 text-sm uppercase hover:border-b'>
                                          <Link href='/resume'>Resume</Link>
                                    </li>
                                    <li className='ml-10 text-sm uppercase hover:border-b'>
                                          <Link href='/#contact'>Contact</Link>
                                    </li>
                              </ul>

                              {/* Mobile Menu Icon */}
                              <div
                                    style={{ color: `${textColor}` }}
                                    onClick={handleNav}
                                    className='md:hidden'
                              >
                                    {nav ? (
                                          <></>
                                    ) : (
                                          <AiOutlineMenu className='hover:cursor-pointer' size={20} style={{ color: `${textColor}` }} />
                                    )}
                              </div>
                        </div>
                  </div>





                  {/* Mobile Menu */}
                  {/*Mobile Menu Overlay */}
                  <div
                        className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>

                        {/*  Mobile Menu Sidebar */}
                        <div
                              className={
                                    nav
                                          ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                                          : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                              }
                        >
                              <div>
                                    <div className='flex w-full items-center justify-between'>
                                          <Link href='/'>

                                                <h1 className='font-bold text-4xl text-[#5651e5]'>
                                                      SicaaDev
                                                </h1>

                                          </Link>
                                          <div
                                                onClick={handleNav}
                                                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
                                          >
                                                <AiOutlineClose />
                                          </div>
                                    </div>
                                    <div className='border-b border-gray-300 my-4'>
                                          <p className='w-[85%] md:w-[90%] py-4'>
                                                Let&#39;s build something legendary together
                                          </p>
                                    </div>
                              </div>
                              <div className='py-4 flex flex-col'>
                                    <ul className='uppercase'>
                                          <Link href='/'>
                                                <li onClick={() => setNav(false)} className='py-4 text-sm hover:underline'>
                                                      Home
                                                </li>
                                          </Link>
                                          <Link href='/#about'>
                                                <li onClick={() => setNav(false)} className='py-4 text-sm hover:underline'>
                                                      About
                                                </li>
                                          </Link>
                                          <Link href='/#skills'>
                                                <li onClick={() => setNav(false)} className='py-4 text-sm hover:underline'>
                                                      Skills
                                                </li>
                                          </Link>
                                          <Link href='/#projects'>
                                                <li onClick={() => setNav(false)} className='py-4 text-sm hover:underline'>
                                                      Projects
                                                </li>
                                          </Link>
                                          <Link href='/resume'>
                                                <li onClick={() => setNav(false)} className='py-4 text-sm hover:underline'>
                                                      Resume
                                                </li>
                                          </Link>
                                          <Link href='/#contact'>
                                                <li onClick={() => setNav(false)} className='py-4 text-sm hover:underline'>
                                                      Contact
                                                </li>
                                          </Link>
                                    </ul>
                                    <div className='pt-40'>
                                          <p className='uppercase tracking-widest text-[#5651e5]'>
                                                Let&#39;s Connect
                                          </p>
                                          <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                                <a
                                                      href='https://www.linkedin.com/in/clint-briley-50056920a/'
                                                      target='_blank'
                                                      rel='noreferrer'
                                                >
                                                      <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                                            <FaLinkedinIn />
                                                      </div>
                                                </a>
                                                <a
                                                      href='https://github.com/fireclint'
                                                      target='_blank'
                                                      rel='noreferrer'
                                                >
                                                      <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                                            <FaGithub />
                                                      </div>
                                                </a>
                                                <Link href='/#contact'>
                                                      <div
                                                            onClick={() => setNav(!nav)}
                                                            className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                                                      >
                                                            <AiOutlineMail />
                                                      </div>
                                                </Link>
                                                <Link href='/resume'>
                                                      <div
                                                            onClick={() => setNav(!nav)}
                                                            className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                                                      >
                                                            <BsFillPersonLinesFill />
                                                      </div>
                                                </Link>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div >
      );
};

export default Navbar;


