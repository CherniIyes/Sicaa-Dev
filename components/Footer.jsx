import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div id='contact'  className='bg-white text-black mt-24'>
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap">SicaaDev™</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase cursor-default">Resources</h2>
              <ul className="text-gray-700 dark:text-gray-700 font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline">Tailwind CSS</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase cursor-default">Follow us</h2>
              <ul className="text-gray-500 dark:text-gray-700 font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline ">Github</a>
                </li>
                <li>
                  <a href="/" className="hover:underline">Discord</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase cursor-default">Legal</h2>
              <ul className="text-gray-500 dark:text-gray-700 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-sm text-gray-500 sm:text-center dark:text-gray-700 cursor-default">© 2025 <a href="/" className="hover:underline">SicaaDev™</a>. All Rights Reserved.</div>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="https://www.facebook.com/profile.php?id=61558877354559" className="text-gray-900 hover:scale-150 ease-in-out duration-300 ms-5">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/siccadev/" className="text-gray-900 hover:scale-150 ease-in-out duration-300 ms-5">
              <FaInstagram />
            </a>
            <a href="mailto:siccadev@gmail.com" className="text-gray-900 hover:scale-150 ease-in-out duration-300 ms-5">
              <FaEnvelope />
            </a>
            <a href="https://www.linkedin.com/in/sicca-dev-a6a952307/" className="text-gray-900 hover:scale-150 ease-in-out duration-300 ms-5">
              <FaLinkedin />
            </a>
            <a href="https://github.com/siccadev" className="text-gray-900 hover:scale-150 ease-in-out duration-300 ms-5">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
