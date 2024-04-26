import React from 'react';
// import { AiOutlineInstagram } from 'react-icons/ai';
// import {
//       FaFacebookF,
//       FaGit,
//       FaGithub,
//       FaTiktok,
//       FaTwitter,
// } from 'react-icons/fa';
import {
      FaFacebook,
      FaGithub,
      FaInstagram,
      FaTwitter,
      FaLinkedin
} from "react-icons/fa";




const Footer = () => {
      return (
            // <div class="bg-white dark:bg-gray-900">
            <div className='bg-white text-black mt-24'>
                  <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                        <div class="md:flex md:justify-between">
                              <div class="mb-6 md:mb-0">
                                    <a href="/" class="flex items-center">

                                          <span class="self-center text-2xl font-semibold whitespace-nowrap ">SicaaDev™</span>
                                    </a>
                              </div>
                              <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                                    <div>
                                          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">Resources</h2>
                                          <ul class="text-gray-700 dark:text-gray-700 font-medium">
                                                <li class="mb-4">
                                                      <a href="/" class="hover:underline">Flowbite</a>
                                                </li>
                                                <li>
                                                      <a href="/" class="hover:underline">Tailwind CSS</a>
                                                </li>
                                          </ul>
                                    </div>
                                    <div>
                                          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">Follow us</h2>
                                          <ul class="text-gray-500 dark:text-gray-700 font-medium">
                                                <li class="mb-4">
                                                      <a href="/" class="hover:underline ">Github</a>
                                                </li>
                                                <li>
                                                      <a href="/" class="hover:underline">Discord</a>
                                                </li>
                                          </ul>
                                    </div>
                                    <div>
                                          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">Legal</h2>
                                          <ul class="text-gray-500 dark:text-gray-700 font-medium">
                                                <li class="mb-4">
                                                      <a href="#" class="hover:underline">Privacy Policy</a>
                                                </li>
                                                <li>
                                                      <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                                                </li>
                                          </ul>
                                    </div>
                              </div>
                        </div>
                        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                        <div class="sm:flex sm:items-center sm:justify-between">
                              <span class="text-sm text-gray-500 sm:text-center dark:text-gray-700">© 2025 <a href="/" class="hover:underline">SicaaDev™</a>. All Rights Reserved.
                              </span>
                              <div class="flex mt-4 sm:justify-center sm:mt-0">
                                    <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                          <FaFacebook />
                                    </a>
                                    <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                          <FaInstagram />
                                    </a>
                                    <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                          <FaTwitter />
                                    </a>
                                    <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                          <FaLinkedin />
                                    </a>
                                    <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                          <FaGithub />
                                          <span class="sr-only">Dribbble account</span>
                                    </a>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Footer;