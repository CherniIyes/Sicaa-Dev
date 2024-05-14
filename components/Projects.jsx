import React from 'react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon from react-icons/fa

import b from "../public/b.jpg";
import c from "../public/c.jpg";
import cc from "../public/cc.png";
import a from "../public/a.jpg";
import bb from "../public/bb.png";
import aaa from "../public/aaa.png";

const Info = () => {
  const workInfoData = [
    {
      image: b,
      title: "Floucy",
      link: "https://github.com/CherniIyes/Crypto-Currency", // GitHub repository link for Floucy
    },
    {
      image: c,
      title: "Visit-Tunisia",
      link: "https://github.com/khalilcherni/Visit-Tunisia-Travel-Agency-", // GitHub repository link for Visit-Tunisia
    },
    {
      image: a,
      title: "Taswirty",
      link: "https://github.com/CherniIyes/Taswirty", // GitHub repository link for Taswirty
    },
    {
      image: cc,
      title: "E-commerce",
      link: "https://github.com/yourusername/e-commerce", // GitHub repository link for E-commerce
    },
    {
      image: bb,
      title: "Geography game",
      link: "https://github.com/yourusername/geography-game", // GitHub repository link for Geography game
    },
    {
      image: aaa,
      title: "Taf7it",
      link: "https://github.com/yourusername/taf7it", // GitHub repository link for Taf7it
    },
  ];

  return (
    <div id='projects' className="mt-60">
      <div className="text-center">
        <p className="font-bold text-yellow-300 text-2xl mb-2">Our Projects</p>
        <h1 className="text-6xl font-bold mb-8 text-gray-800">Lorem ipsum dolor sit amet</h1>
        <p className="font-serif text-xl text-gray-700 w-2/3 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </p>
      </div>
      <div className="mt-20 flex justify-center items-center flex-wrap">
        {workInfoData.map((data) => (
          <div key={data.title} className="h-400 w-400 bg-white p-6 flex flex-col justify-center items-center rounded-2xl m-4 hover:scale-105 ease-in-out duration-300">
            <a href={data.link} target="_blank" rel="noopener noreferrer" className="relative">
              <Image className='max-h-54 max-w-52' src={data.image} alt={data.title} />
              <FaGithub className="absolute top-2 right-2 text-gray-600 cursor-pointer hover:text-gray-800 transition duration-300" size={24} />
            </a>
            <h2 className='m-2 font-semibold'>{data.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
