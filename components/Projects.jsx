"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

import b from "../public/b.jpg";
import c from "../public/c.jpg";
import cc from "../public/cc.png";
import a from "../public/a.jpg";
import bb from "../public/bb.png";
import aaa from "../public/aaa.png";
import Flou from "../public/Flou.png";

const Info = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const workInfoData = [
    {
      image: Flou,
      title: "Flouzy",
      description: "A cryptocurrency tracker web application built with React and Tailwind CSS.",
      link: "https://github.com/CherniIyes/Crypto-Currency",
    },
    {
      image: c,
      title: "Visit-Tunisia",
      description: "A travel agency website for promoting tourism in Tunisia, developed using React.",
      link: "https://github.com/khalilcherni/Visit-Tunisia-Travel-Agency-",
    },
    {
      image: a,
      title: "Taswirty",
      description: "An image gallery application allowing users to upload and manage photos.",
      link: "https://github.com/CherniIyes/Taswirty",
    },
    {
      image: cc,
      title: "E-commerce",
      description: "An e-commerce platform built with React and Redux for state management.",
      link: "https://github.com/abdelhakbarbouche/Parfumerie-Barbouch-",
    },
    {
      image: bb,
      title: "Geography game",
      description: "An educational geography quiz game to test users' knowledge.",
      link: "https://github.com/firaslamouchi21/Geography-Game",
    },
    {
      image: aaa,
      title: "Drive",
      description: "Master driving with our comprehensive lessons and practical tips.",
      link: "https://github.com/IyeddAmri/driving-schoool",
    },
  ];

  return (
    <div id='projects' className="my-10">
      <div className="text-center">
        <p className="font-bold text-yellow-300 text-2xl">Our Projects</p>
        <h1 className="text-4xl font-bold text-gray-800">Discover Our Work</h1>
      </div>
      <div className="mt-20 flex justify-evenly items-center flex-wrap">
        {workInfoData.map((data, index) => (
          <div
            key={data.title}
            className={`w-96 min-h-96 max-h-96 bg-white p-6 flex flex-col justify-center items-center rounded-2xl m-4 transition-transform duration-300 transform hover:scale-105 max-w-xl  ${hoveredIndex !== null && hoveredIndex !== index ? 'scale-90' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <a href={data.link} target="_blank" rel="noopener noreferrer">
              <Image src={data.image} alt={data.title} className='max-h-80 max-w-80' />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300">
                <FaGithub className="text-white text-3xl" />
              </div>
            </a>
            <div className="p-4 bg-white flex justify-between items-center min-h-28 max-h-28">
              <div>
                <h2 className="text-xl font-semibold">{data.title}</h2>
                <p className="text-sm text-gray-600 mt-2">{data.description}</p>
              </div>
              <a href={data.link} target="_blank" rel="noopener noreferrer" className="text-black">
                <FaGithub className="text-3xl" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;