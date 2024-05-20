"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Image from 'next/image';
import sicca from "../public/sicca.png";
import { motion } from "framer-motion";
const links = [
      { url: "/", title: "Home" },
      { url: "/about", title: "About" },
      { url: "/portfolio", title: "Portfolio" },
      { url: "/contact", title: "Contact" },
];




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














      const topVariants = {
            closed: {
                  rotate: 0,
            },
            opened: {
                  rotate: 45,
                  backgroundColor: "rgb(255,255,255)",
            },
      };
      const centerVariants = {
            closed: {
                  opacity: 1,
            },
            opened: {
                  opacity: 0,
            },
      };

      const bottomVariants = {
            closed: {
                  rotate: 0,
            },
            opened: {
                  rotate: -45,
                  backgroundColor: "rgb(255,255,255)",
            },
      };

      const listVariants = {
            closed: {
                  x: "100vw",
            },
            opened: {
                  x: 0,
                  transition: {
                        when: "beforeChildren",
                        staggerChildren: 0.2,
                  },
            },
      };

      const listItemVariants = {
            closed: {
                  x: -10,
                  opacity: 0,
            },
            opened: {
                  x: 0,
                  opacity: 1,
            },
      };

      return (
            <div style={{ backgroundColor: `${color}` }} className={color ? 'fixed w-full h-20  z-[100] ease-in-out duration-300' : 'fixed w-full h-20 z-[100]'}>


                  <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                        {/* <Image className='max-h-52 max-w-52' src={sicca} /> */}
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
                                          <Link href='/#aboutUS'>About</Link>
                                    </li>
                                    <li className='ml-10 text-sm uppercase hover:border-b'>
                                          <Link href='/#skills'>Skills</Link>
                                    </li>
                                    <li className='ml-10 text-sm uppercase hover:border-b'>
                                          <Link href='/#projects'>Projects</Link>
                                    </li>
                                    <li className='ml-10 text-sm uppercase hover:border-b'>
                                          <Link href='/#Resume'>Certificate</Link>
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








                        {/* <div className="md:hidden">
                              <button
                                    className="w-10 h-8 flex flex-col justify-between z-50 relative"
                                    onClick={() => setNav((prev) => !prev)}
                              >
                                    <motion.div
                                          variants={topVariants}
                                          animate={nav ? "opened" : "closed"}
                                          style={{ backgroundColor: `${textColor}` }}
                                          className="w-10 h-1 rounded origin-left"
                                    ></motion.div>
                                    <motion.div
                                          variants={centerVariants}
                                          animate={nav ? "opened" : "closed"}
                                          style={{ backgroundColor: `${textColor}` }}
                                          className="w-10 h-1  rounded"

                                    ></motion.div>
                                    <motion.div
                                          variants={bottomVariants}
                                          animate={nav ? "opened" : "closed"}
                                          style={{ backgroundColor: `${textColor}` }}
                                          className="w-10 h-1  rounded origin-left"
                                    ></motion.div>
                              </button>
                              {nav && (
                                    <motion.div
                                          variants={listVariants}
                                          initial="closed"
                                          animate="opened"
                                          className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
                                    >
                                          {links.map((link) => (
                                                <motion.div
                                                      variants={listItemVariants}
                                                      className=""
                                                      key={link.title}
                                                >
                                                      <Link href={link.url}>{link.title}</Link>
                                                </motion.div>
                                          ))}
                                    </motion.div>
                              )}
                        </div> */}







                        {/* Mobile Menu */}
                        {/*Mobile Menu Overlay */}
                        <div
                        className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
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
                                          <Link href='/Resume'>
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


