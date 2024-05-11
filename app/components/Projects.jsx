import React from 'react'
import b from "../public/b.jpg"

import c from "../public/c.jpg"
import cc from "../public/cc.png"
import a from "../public/a.jpg"
import bb from "../public/bb.png"
import Image from 'next/image';
const Info = () => {
      const workInfoData = [
            {
                  image: b,
                  title: "Floucy ",
                //   text: " A website where users can check the current live value of the most relevant and their favorite cryptocurrencies. ",
            },
            {
                  image: c,
                  title: "Visit-Tunisia ",
                //   text: "Explore Tunisia for an unforgettable holiday experience with booking options for excellent hotels, discovering top locations, and seamless support for inquiries and assistance. ",
            },
            {
                  image: a,
                  title: "Taswirty",
                //   text: "placeholder ",
            },
            {
                image: cc,
                title: "E-commerce",
              //   text: "placeholder ",
          },
          {
            image: bb,
            title: "Geography game",
          //   text: "placeholder ",
      },
      ];
      return (
            <div id='work' className="mt-60 ">
                  <div className="text-center">
                        <p className="text-center font-bold text-yellow-300 text-2xl mb-2">Our Projects</p>
                        <h1 className="text-center text-6xl font-bold mb-8 text-gray-800  ">Lorem ipsum dolor sit amet</h1>
                        <p className="font-serif text-xl text-gray-700 w-2/6 mx-auto">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        </p>
                  </div>
                  <div className="mt-20 flex justify-center items-center flex-wrap ">
                        {workInfoData.map((data) => (
                              <div className="h-400 w-400  bg-white p-6 flex flex-col justify-center items-center rounded-2xl m-4 hover:scale-105 ease-in-out duration-300" key={data.title}>
                                    <div className="">
                                          <Image className='max-h-54 max-w-52' src={data.image} />
                                    </div>
                                    <h2 className='m-2 font-semibold'>{data.title}</h2>
                                    <p className=' flex items-center text-left mt-0 max-w-12  '>{data.text}</p>
                              </div>
                        ))}
                  </div>
            </div>
      );

}

export default Info
