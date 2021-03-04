import React from 'react';
import Button from '../components/Button';
import styles from '../styles/Home.module.css';

export default function Header() {
  return (
    <header
      className={`h-screen bg-gradient-to-b from-primary relative overflow-hidden absolute top-16 lg:top-20`}
    >
      <div
        className={`${styles.header_circle} bg-dark_green rounded-full absolute -top-80 -left-14 lg:-top-40 lg:left-2/4`}
      ></div>

      <img
        src='/header_bg.png'
        alt='Wrapped Green Logo'
        className={`absolute -top-10 -right-48 lg:right-10 lg:top-10 h-3/5 lg:h-5/6`}
      />

      <div
        className={`absolute left-12 lg:left-16 top-36 lg:top-48 text-white lg:text-primary`}
      >
        <h1 className={`font-black text-3xl lg:text-7xl w-60 lg:w-2/3 pb-5 `}>
          Healthy & Fresh Food For You
        </h1>
        <p className={`w-40 lg:w-5/12 pb-6 lg:text-xl `}>
          Created for lovers of healthy, delicious and non-obvious food.
        </p>
        <Button text='Check Menu' color='bg-button_orange' />
      </div>

      <img
        src='/header_chilli.png'
        alt='Wrapped Green Logo'
        className={`hidden lg:block absolute bottom-0 -left-10`}
      />
    </header>
  );
}
