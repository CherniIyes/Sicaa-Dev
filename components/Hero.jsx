"use client"
import React, { useRef } from 'react';

const Hero = ({ heading, message }) => {
  const containerRef = useRef();

  const scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById("aboutUS");
    const yOffset = -100; // Adjust this value as needed to account for fixed elements at the top
    const y = aboutUsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div id='Hero' className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      {/* overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      {/* overlay */}
      <div className='p-5 text-white z-[2]'>
        <h2 className='text-5xl font-bold'>{heading}</h2>
        <p className='py-5 text-xl'>{message}</p>
        <button onClick={scrollToAboutUs} className='px-8 py-2 border hover:cursor-pointer inline-block'>
          Get Started
        </button>
      </div>
    </div>
  );




}

export default Hero;
