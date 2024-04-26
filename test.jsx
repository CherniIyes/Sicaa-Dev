
































"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
      const [nav, setNav] = useState(false);
      const [color, setColor] = useState('transparent');
      const [textColor, setTextColor] = useState('white');
      const [shadow, setShadow] = useState(false);
      const [navBg, setNavBg] = useState('#ecf0f3');
      const [linkColor, setLinkColor] = useState('#1f2937');

      const handleNav = () => {
            setNav(!nav);
      };

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

      return (
            <div
                  style={{ backgroundColor: `${color}` }}
                  className='fixed left-0 top-0 w-full z-10 ease-in duration-300'
            >
                  <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
                        <Link href='/'>
                              <h1 style={{ color: `${textColor}` }} className='font-bold text-4xl'>
                                    SicaaDev
                              </h1>
                        </Link>
                        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
                              <li className='p-4'>
                                    <Link href='/'>Home</Link>
                              </li>
                              <li className='p-4'>
                                    <Link href='/#work'>Work</Link>
                              </li>
                              <li className='p-4'>
                                    <Link href='/'>Contact</Link>
                              </li>
                        </ul>








                        {/* Hamburger Icon */}
                        <div onClick={handleNav} className='block sm:hidden z-10'>
                              {nav ? (
                                    <AiOutlineClose className='hover:cursor-pointer' size={20} style={{ color: `${textColor}` }} />
                              ) : (
                                    <AiOutlineMenu className='hover:cursor-pointer' size={20} style={{ color: `${textColor}` }} />
                              )}
                        </div>



                        {/* Mobile Menu */}
                        {/* Overlay */}

                        <div
                              className={
                                    nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/30 ease-in duration-300' : ''
                              }
                        >
                              {/* Side Drawer Menu */}
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
                                                      <AiOutlineClose className='text-black' />
                                                </div>
                                          </div>
                                          <div className='border-b border-gray-300 my-4'>
                                                <p className='w-[85%] md:w-[90%] py-4 text-black'>
                                                      Let&#39;s build something legendary together
                                                </p>
                                          </div>
                                    </div>
                                    <div className='py-4 flex flex-col'>
                                          <ul className='uppercase'>
                                                <Link href='/'>
                                                      <li onClick={() => setNav(false)} className='py-4 text-black text-sm'>
                                                            Home
                                                      </li>
                                                </Link>
                                                <Link href='/#about'>
                                                      <li onClick={() => setNav(false)} className='py-4 text-black text-sm'>
                                                            About
                                                      </li>
                                                </Link>
                                                <Link href='/#skills'>
                                                      <li onClick={() => setNav(false)} className='py-4 text-black text-sm'>
                                                            Skills
                                                      </li>
                                                </Link>
                                                <Link href='/#projects'>
                                                      <li onClick={() => setNav(false)} className='py-4 text-black text-sm'>
                                                            Projects
                                                      </li>
                                                </Link>
                                                <Link href='/resume'>
                                                      <li onClick={() => setNav(false)} className='py-4 text-black text-sm'>
                                                            Resume
                                                      </li>
                                                </Link>
                                                <Link href='/#contact'>
                                                      <li onClick={() => setNav(false)} className='py-4 text-black text-sm'>
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
                                                                  <FaLinkedinIn className='text-black' />
                                                            </div>
                                                      </a>
                                                      <a
                                                            href='https://github.com/fireclint'
                                                            target='_blank'
                                                            rel='noreferrer'
                                                      >
                                                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                                                  <FaGithub className='text-black' />
                                                            </div>
                                                      </a>
                                                      <Link href='/#contact'>
                                                            <div
                                                                  onClick={() => setNav(!nav)}
                                                                  className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                                                            >
                                                                  <AiOutlineMail className='text-black' />
                                                            </div>
                                                      </Link>
                                                      <Link href='/resume'>
                                                            <div
                                                                  onClick={() => setNav(!nav)}
                                                                  className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                                                            >
                                                                  <BsFillPersonLinesFill className='text-black' />
                                                            </div>
                                                      </Link>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>






















                  </div >
            </div >
      );
};

export default Navbar;
