"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import coding from "../public/coding.gif";
import test from "../public/test.gif";
import game from "../public/game.gif";

const Info = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const workInfoData = [
    {
      image: coding,
      title: "Coding",
      text: "Creating awesome code.",
    },
    {
      image: test,
      title: "Testing",
      text: "Ensuring code quality.",
    },
    {
      image: game,
      title: "Gaming",
      text: "Developing fun games.",
    },
  ];

  return (
    <div id='work' className="my-24 px-4">
      <div className="text-center">
        <p className="font-bold text-yellow-300 text-2xl mb-2">Work</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gray-800">Lorem ipsum dolor sit amet</h1>
        <p className="font-serif text-xl text-gray-700 mx-auto max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </p>
      </div>
      <div className=" flex justify-center items-center flex-wrap">
        {workInfoData.map((data, index) => (
          <div
            className={`w-full sm:w-72 min-h-96 max-h-96 bg-white p-6 flex flex-col justify-center items-center rounded-2xl m-4 transition-transform duration-300 transform hover:scale-105 ${hoveredIndex !== null && hoveredIndex !== index ? 'scale-90' : ''}`}
            key={data.title}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onTouchStart={() => setHoveredIndex(index)}
            onTouchEnd={() => setHoveredIndex(null)}
          >
            <div className="relative w-full h-52 flex justify-center items-center">
              <Image
                className="max-h-52 max-w-52 object-contain"
                src={data.image}
                alt={data.title}
                style={{ display: hoveredIndex === index ? 'none' : 'block' }}
              />
              {hoveredIndex === index && (
                <Image
                  className="max-h-52 max-w-52 object-contain"
                  src={data.image}
                  alt={data.title}
                  style={{ display: 'block' }}
                />
              )}
            </div>
            <h2 className='m-3 font-semibold text-gray-800'>{data.title}</h2>
            <p className='flex-1 flex items-center text-gray-600'>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Info;
