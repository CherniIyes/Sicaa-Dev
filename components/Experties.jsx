import React from 'react';

const Experties = () => {
  return (
    <div className='min-w-[330px] max-w-2xl mx-auto'>
      <div className="flex justify-between h-48 ">
        {/* LEFT */}
        <div className="w-1/3 ">
          {/* JOB TITLE */}
          <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
            Senior JavaScript Engineer
          </div>
          {/* JOB DESC */}
          <div className="p-3 text-sm italic">
            I led web development, offering expertise in JavaScript
            frameworks.
          </div>
          {/* JOB DATE */}
          <div className="p-3 text-red-400 text-sm font-semibold">
            2024 - Present
          </div>
          {/* JOB COMPANY */}
          <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
            Apple
          </div>
        </div>
        {/* CENTER */}
        <div className="w-1/6 flex justify-center">
          {/* LINE */}
          <div className="w-1 h-full bg-gray-600 rounded relative">
            {/* LINE CIRCLE */}
            <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-1/3 "></div>
      </div>
      {/* EXPERIENCE LIST ITEM */}
      <div className="flex justify-between h-48">
        {/* LEFT */}
        <div className="w-1/3 "></div>
        {/* CENTER */}
        <div className="w-1/6 flex justify-center">
          {/* LINE */}
          <div className="w-1 h-full bg-gray-600 rounded relative">
            {/* LINE CIRCLE */}
            <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-1/3 ">
          {/* JOB TITLE */}
          <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
            Senior React Developer
          </div>
          {/* JOB DESC */}
          <div className="p-3 text-sm italic">
            I spearheaded React-based application development,
            leveraging advanced skills.
          </div>
          {/* JOB DATE */}
          <div className="p-3 text-red-400 text-sm font-semibold">
            2019 - 2024
          </div>
          {/* JOB COMPANY */}
          <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
            Microsoft
          </div>
        </div>
      </div>
      {/* EXPERIENCE LIST ITEM */}
      <div className="flex justify-between h-48">
        {/* LEFT */}
        <div className="w-1/3 ">
          {/* JOB TITLE */}
          <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
            Freelancer
          </div>
          {/* JOB DESC */}
          <div className="p-3 text-sm italic">
            I provided web solutions, applying a range of technologies
            to address client requirements.
          </div>
          {/* JOB DATE */}
          <div className="p-3 text-red-400 text-sm font-semibold">
            2010 - 2019
          </div>
        </div>
        {/* CENTER */}
        <div className="w-1/6 flex justify-center">
          {/* LINE */}
          <div className="w-1 h-full bg-gray-600 rounded relative">
            {/* LINE CIRCLE */}
            <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-1/3 "></div>
      </div>
    </div>
  );
};

export default Experties;