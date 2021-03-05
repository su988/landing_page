import React from 'react';

export default function Footer() {
  return (
    <footer className='flex flex-col items-center mt-40 relative bg-gray-4 lg:h-96 lg:overflow-hidden'>
      <img
        src='/wrapped_green_logo2.png'
        alt=''
        className={`w-24 h-24 lg:w-36 lg:h-36 -mb-10 lg:-mb-40`}
      />

      <img
        src='/nav_background_mobile.svg'
        alt=''
        className={` w-screen mt-5`}
      />
      <div className={`flex flex-col absolute top-44 lg:top-64 lg:pt-4`}>
        <ul
          className={`flex justify-center px-8 mb-8 text-white text-lg lg:text-2xl font-bold`}
        >
          <li className={`mr-10`}>About</li>
          <li className={`mr-10`}>Menu</li>
          <li>Contact</li>
        </ul>
        <div className={`flex justify-center`}>
          <img src='/facebook.svg' alt='' className={'w-5 lg:w-6 mr-14'} />
          <img src='/twitter.svg' alt='' className={'w-5 lg:w-6 mr-14'} />
          <img src='/instagram.svg' alt='' className={'w-5 lg:w-6'} />
        </div>
      </div>
    </footer>
  );
}
