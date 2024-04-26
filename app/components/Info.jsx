import React from 'react'
import lap from "../public/laptop.png"
import debug1 from "../public/debug1.png"
import debug2 from "../public/debug2.png"
import debug3 from "../public/debug3.png"
import sbo3 from "../public/sbo3.png"
import Image from 'next/image';
const Info = () => {
      const workInfoData = [
            {
                  image: lap,
                  title: "placeholder ",
                  text: "placeholder ",
            },
            {
                  image: debug2,
                  title: "placeholder ",
                  text: "placeholder ",
            },
            {
                  image: sbo3,
                  title: "placeholder",
                  text: "placeholder ",
            },
      ];
      return (
            <div id='work' className="mt-60">
                  <div className="text-center">
                        <p className="text-center font-bold text-yellow-300 text-2xl mb-2">Work</p>
                        <h1 className="text-center text-6xl font-bold mb-8 text-gray-800  ">Lorem ipsum dolor sit amet</h1>
                        <p className="font-serif text-xl text-gray-700 w-2/6 mx-auto">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        </p>
                  </div>
                  <div className="mt-20 flex justify-center items-center flex-wrap">
                        {workInfoData.map((data) => (
                              <div className="w-72 min-h-96 max-h-96 bg-white p-6 flex flex-col justify-center items-center rounded-2xl m-4" key={data.title}>
                                    <div className="">
                                          <Image className='max-h-52 max-w-52' src={data.image} />
                                    </div>
                                    <h2 className='m-3 font-semibold'>{data.title}</h2>
                                    <p className='flex-1 flex items-center '>{data.text}</p>
                              </div>
                        ))}
                  </div>
            </div>
      );

}

export default Info
