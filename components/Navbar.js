import React, { useState } from 'react';
import Hamburger from './Hamburger';

export default function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <nav className='bg-white flex flex-col lg:flex-row justify-between items-center h-20 pt-5 lg:px-16 py-6'>
      <div className='flex justify-between w-10/12 lg:w-max'>
        <img
          src='/nav_logo.png'
          alt='Wrapped Green Logo'
          className={`w-28 h-10 lg:w-36 lg:h-12`}
        />

        <div className='lg:hidden cursor-pointer' onClick={toggleHamburger}>
          <Hamburger hamburgerOpen={hamburgerOpen} />
        </div>
      </div>
      <ul
        className={`${
          hamburgerOpen ? 'flex' : 'hidden'
        } bg-white z-10 w-screen lg:w-max lg:flex flex-col lg:flex-row items-center py-10 lg:py-0 text-xl lg:text-2xl font-bold text-primary tracking-widest leading-loose`}
      >
        <li className='py-4 lg:py-0 lg:pr-16 cursor-pointer'>About Us</li>
        <li className='pb-4 lg:pb-0 lg:pr-16 cursor-pointer'>Menu</li>
        <li className='pb-4 lg:pb-0 cursor-pointer'>Contact</li>
      </ul>
    </nav>
  );
}
