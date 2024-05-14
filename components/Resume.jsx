import React from 'react';
import Link from 'next/link';

const names = ['Iyess Cherni', 'Khalil Cherni', 'Abdelhak Barbouche', 'Iyed Amri', 'Firas Lamouchi'];

const certificates = [
  'https://credsverse.com/credentials/d9ec9903-8eac-400e-aa4e-f18c33a0e979?preview=1',
  'https://credsverse.com/credentials/dc5efc73-386d-4165-827d-25cdcc63bf10?preview=1',
  'https://credsverse.com/credentials/9bea193f-56a2-4aa6-8f0e-75ad3c835dab?preview=1&fbclid=IwZXh0bgNhZW0CMTAAAR1xxVL5HT8weqj5Wti8ByIk2ZLfeoXtQ0xEL_6upX3koUnXL-r3rcz4K7M_aem_AZ4Nk4A9LSDqG_BHbmDO3szliPQ1EAo6FV8l3076ey7_j6kR7j10DTSgEfWAjZv2GVEt6dq8yiDdLFWTbVKeRnXI',
  'https://credsverse.com/credentials/c3b56d7c-75a3-4572-be79-ad614858e05d?preview=1',
  'https://credsverse.com/credentials/00a3091d-2642-4994-afa3-e79792d9a8e4?preview=1&fbclid=IwZXh0bgNhZW0CMTAAAR2c7yPyM-hd4cw1sX-OO3N_DVsbP-84yFrpgeIwPdjfloIJd_MchohHxHU_aem_AZ6FXwH0wSwdE3uMPS0ctNWD8NEkRicr0UCVsyNxrWnRAW2pXX6tiYVooUCDIHpNGuHRTTteghuiaBq9B98WIUaf',
];

const images = [
  '/iyess.jpg',
  '/khalil.jpg',
  '/ha9.jpg',
  '/iyed.jpg',
  '/firas.jpg',
];

const ResumeButton = () => {
  return (
    <div id='Resume' className="space-y-4">
      <h2 className="text-xl font-bold mb-4">Names List</h2>
      {names.map((name, index) => (
        <div key={index} className="flex items-center justify-between space-x-4 bg-gray-100 px-4 py-2 rounded-md hover:shadow-lg">
          <div className="flex items-center space-x-4">
            {/* Image container with rounded border */}
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img src={images[index]} alt={name} className="w-full h-full object-cover" />
            </div>
            <p className="text-lg font-medium">{name}</p>
          </div>
          <Link href={certificates[index]} passHref>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer">Certificate</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ResumeButton;
