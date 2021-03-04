import React, { useState } from 'react';
import Hamburger from './Hamburger';

export default function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <nav className='flex flex-col lg:flex-row justify-between items-center h-20 pt-5 lg:px-16 '>
      <div className='flex justify-between w-10/12 lg:w-max'>
        <img src='/nav_logo.png' alt='Wrapped Green Logo' />

        <div id='hamburgerbtn' className='lg:hidden' onClick={toggleHamburger}>
          <Hamburger hamburgerOpen={hamburgerOpen} />
        </div>
      </div>
      <ul
        className={`${
          hamburgerOpen ? 'flex' : 'hidden'
        } bg-red-50 w-screen lg:w-max lg:flex flex-col lg:flex-row items-center py-10 lg:py-0 lg:text-2xl font-bold text-primary tracking-widest leading-loose`}
      >
        <li className='lg:pr-16'>About Us</li>
        <li className='lg:pr-16'>Menu</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
