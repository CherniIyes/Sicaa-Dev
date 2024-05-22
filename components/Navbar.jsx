"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Image from 'next/image';
import sicca from "../public/favicons.ico";
import { motion } from "framer-motion";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const links = [
    { url: "Hero", title: "Home" },
    { url: "aboutUS", title: "About" },
    { url: "aboutUS", title: "Skills" },
    { url: "projects", title: "Projects" },
    { url: "Certificate", title: "Certificate" },
    { url: "contact", title: "Contact" },
];

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent');
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
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 cursor-pointer'>
                <ScrollLink
                    to="Hero"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-70}
                >
                    <div className='flex items-center '>
                        <Image src={sicca} alt='SicaaDev Logo' width={50} />
                        <h1 style={{ color: `${textColor}` }} className='font-bold text-4xl mb-1 ml-2'>
                            SicaaDev
                        </h1>
                    </div>
                </ScrollLink>

                <div>
                    <ul style={{ color: `${textColor}` }} className='hidden md:flex'>
                        {links.map((link) => (
                            <li key={link.url} className='ml-10 text-sm uppercase hover:border-b'>
                                <ScrollLink
                                    to={link.url}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-70}
                                >
                                    {link.title}
                                </ScrollLink>
                            </li>
                        ))}
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
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ' : ''}>
                <div
                    className={
                        nav
                            ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                    }
                >
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <div className='flex items-center'>

                                <div className='flex items-center mr-5'>
                                    <Image src={sicca} alt='SicaaDev Logo' width={50} />
                                    <h1 className='font-bold text-4xl mb-1 ml-2'>
                                        SicaaDev
                                    </h1>
                                </div>
                                <div
                                    onClick={handleNav}
                                    className='rounded-full shadow-lg shadow-gray-400 ml-10 p-2 cursor-pointer'>
                                    <AiOutlineClose />
                                </div>

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
                            {links.map((link) => (
                                <li className='uppercase py-4'>
                                    <ScrollLink
                                        key={link.url}
                                        to={link.url}
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact='true'
                                        offset={-70}
                                        onClick={() => setNav(false)}
                                        className='py-4 text-sm hover:underline'
                                    >
                                        {link.title}
                                    </ScrollLink>
                                </li>
                            ))}
                        </ul>
                        <div className='responsive-pt'>
                            <p className='uppercase tracking-widest text-[#5651e5]'>
                                Let&#39;s Connect
                            </p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <a
                                    href='https://www.linkedin.com/in/sicca-dev-a6a952307/'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <FaLinkedinIn />
                                    </div>
                                </a>
                                <a
                                    href='https://github.com/siccadev'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <FaGithub />
                                    </div>
                                </a>

                                <a href="mailto:siccadev@gmail.com">
                                    <div onClick={() => setNav(!nav)}
                                        className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <AiOutlineMail />
                                    </div>
                                </a>
                                <ScrollLink to='Certificate' smooth={true} duration={500}>
                                    <div
                                        onClick={() => setNav(!nav)}
                                        className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                                    >
                                        <BsFillPersonLinesFill />
                                    </div>
                                </ScrollLink  >


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Navbar;
