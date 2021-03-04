import React from 'react';
import styles from '../styles/Header.module.css';
import { IoMdArrowRoundForward } from 'react-icons/io';

export default function Header() {
  return (
    <header
      className={`h-screen bg-gradient-to-b from-primary relative overflow-hidden`}
    >
      <div
        className={`${styles.header_circle} bg-dark_green rounded-full absolute -top-80 -left-14 lg:-top-40 lg:left-2/4`}
      ></div>

      <img
        src='/header_bg.png'
        alt='Wrapped Green Logo'
        className={`absolute -right-56 lg:right-10 lg:top-10`}
      />

      <div
        className={`absolute left-16 top-36 lg:top-48 text-white lg:text-primary`}
      >
        <h1 className={`font-black text-3xl lg:text-7xl w-60 lg:w-2/3 pb-5`}>
          Healthy & Fresh Food For You
        </h1>
        <p className={`w-40 lg:w-5/12 pb-6 lg:text-xl`}>
          Created for lovers of healthy, delicious and non-obvious food.
        </p>
        <button
          className={`flex items-center bg-button px-5 pt-2 pb-3 rounded-lg text-white lg:text-xl`}
        >
          <p className={`mr-2`}>Check Menu</p>
          <IoMdArrowRoundForward />
        </button>
      </div>
    </header>
  );
}
