import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaEnvelope, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div id='contact' className='bg-white text-black mt-24'>
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <span className="self-center text-3xl font-bold whitespace-nowrap text-black-500">SicaaDev</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-black-500 uppercase">Follow us</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4 flex items-center">
                  <FaGithub className="mr-2 text-gray-800" />
                  <a href="https://github.com/siccadev" target="_blank" rel="noopener noreferrer" className="hover:underline">Github</a>
                </li>
                <li className="flex items-center">
                  <FaLinkedin className="mr-2 text-gray-800" />
                  <a href="https://www.linkedin.com/in/sicca-dev-a6a952307/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-black-500 uppercase">Social Media</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4 flex items-center">
                  <FaFacebook className="mr-2 text-gray-800" />
                  <a href="https://www.facebook.com/profile.php?id=61558877354559" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
                </li>
                <li className="flex items-center">
                  <FaInstagram className="mr-2 text-gray-800" />
                  <a href="https://www.instagram.com/siccadev/" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-black-500 uppercase">Contact</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4 flex items-center">
                  <FaEnvelope className="mr-2 text-gray-800" />
                  <a href="mailto:siccadev@gmail.com" className="hover:underline">siccadev@gmail.com</a>
                </li>
                <li className="flex items-center">
                  <FaWhatsapp className="mr-2 text-gray-800" />
                  <a href="https://wa.me/92825238" target="_blank" rel="noopener noreferrer" className="hover:underline">WhatsApp</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-sm text-gray-500 sm:text-center">© 2024 <a href="/" className="hover:underline">SicaaDev</a>. All Rights Reserved.</div>
          <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-6">
            <a href="https://www.facebook.com/profile.php?id=61558877354559" className="text-gray-800 hover:text-black-500 ease-in-out duration-300">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.instagram.com/siccadev/" className="text-gray-800 hover:text-black-500 ease-in-out duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="mailto:siccadev@gmail.com" className="text-gray-800 hover:text-black-500 ease-in-out duration-300">
              <AiOutlineMail size={24}/>
            </a>
            <a href="https://www.linkedin.com/in/sicca-dev-a6a952307/" className="text-gray-800 hover:text-black-500 ease-in-out duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/siccadev" className="text-gray-800 hover:text-black-500 ease-in-out duration-300">
              <FaGithub size={24} />
            </a>
            <a href="https://wa.me/92825238" className="text-gray-800 hover:text-black-500 ease-in-out duration-300">
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
