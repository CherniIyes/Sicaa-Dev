"use client";
import React from 'react';
import Link from 'next/link';

const resumes = [
  { name: 'Iyes Cherni', file: 'Iyes_Cherni_Resume.pdf', image: 'iyess.png', certificate: 'https://credsverse.com/credentials/d9ec9903-8eac-400e-aa4e-f18c33a0e979?preview=1' },
  { name: 'Khalil Cherni', file: 'Khalil-Cherni.pdf', image: 'khalil.png', certificate: 'https://credsverse.com/credentials/dc5efc73-386d-4165-827d-25cdcc63bf10?preview=1' },
  { name: 'Abdelhak Barbouche', file: 'Developer.pdf', image: 'ha9.png', certificate: 'https://credsverse.com/credentials/9bea193f-56a2-4aa6-8f0e-75ad3c835dab?preview=1&fbclid=IwZXh0bgNhZW0CMTAAAR1xxVL5HT8weqj5Wti8ByIk2ZLfeoXtQ0xEL_6upX3koUnXL-r3rcz4K7M_aem_AZ4Nk4A9LSDqG_BHbmDO3szliPQ1EAo6FV8l3076ey7_j6kR7j10DTSgEfWAjZv2GVEt6dq8yiDdLFWTbVKeRnXI' },
  { name: 'Iyed Amri', file: 'iyed_amris_resume.pdf', image: 'iyed.png', certificate: 'https://credsverse.com/credentials/c3b56d7c-75a3-4572-be79-ad614858e05d?preview=1' },
  { name: 'Firas Lamouchi', file: 'Khalil-Cherni.pdf', image: 'firas.png', certificate: 'https://credsverse.com/credentials/00a3091d-2642-4994-afa3-e79792d9a8e4?preview=1&fbclid=IwZXh0bgNhZW0CMTAAAR2c7yPyM-hd4cw1sX-OO3N_DVsbP-84yFrpgeIwPdjfloIJd_MchohHxHU_aem_AZ6FXwH0wSwdE3uMPS0ctNWD8NEkRicr0UCVsyNxrWnRAW2pXX6tiYVooUCDIHpNGuHRTTteghuiaBq9B98WIUaf' },
];

const ResumeDownload = () => {
  const handleDownload = (file) => {
    const link = document.createElement('a');
    link.href = `/${file}`; // Path to your CV file in the public folder
    link.download = file;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center justify-center p-5 bg-white min-h-screen" id="Certificate">
    <h1 className="text-4xl font-extrabold mb-8 text-gray-900 leading-tight">
  Explore Our Talent Pool
</h1>
      <div className="w-full max-w-xl">
        {resumes.map((resume, index) => (
          <div key={index} className="bg-white p-5 rounded-lg shadow-lg mb-5 transition-transform transform hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center mb-5">
              <img src={`/${resume.image}`} alt={resume.name} className="w-20 h-20 rounded-full mr-4" /> {/* Adjusted image size */}
              <h2 className="text-xl font-bold text-gray-800">{resume.name}</h2>
            </div>
            <div className="flex flex-col md:flex-row justify-between"> {/* Wrapped buttons in a flex column for mobile */}
              <Link href={resume.certificate} passHref legacyBehavior>
                <a className="flex justify-center items-center px-4 py-2 bg-gray-800 text-white font-bold rounded hover:bg-transparent hover:text-gray-800 transition-all border-2 border-gray-800 mb-2 md:mb-0"> {/* Added margin for mobile */}
                  View Certificate
                </a>
              </Link>
              <button
                onClick={() => handleDownload(resume.file)}
                className="flex justify-center items-center px-4 py-2 bg-gray-800 text-white font-bold rounded hover:bg-transparent hover:text-gray-800 transition-all border-2 border-gray-800"
              >
                Download Resume
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeDownload;
