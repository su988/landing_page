import React from 'react';
import Button from '../components/Button';
import styles from '../styles/Home.module.css';

export default function AboutUs() {
  return (
    <section className={`relative -mt-10 lg:mt-24 text-primary`}>
      <div>
        <div
          className={`${styles.about_circle} absolute hidden lg:block bg-pastel_green rounded-full -left-72`}
        ></div>
        <img
          src='/about_veg2x.png'
          alt=''
          className={`${styles.about_image} hidden lg:block absolute top-12 left-12 `}
        />
        <img
          src='/about_veg.png'
          alt=''
          className={`lg:hidden absolute -right-32 top-12`}
        />

        <div className={`ml-12 absolute lg:left-2/4 lg:top-40`}>
          <h6 className={`text-orange pb-2 lg:text-3xl`}>About us</h6>
          <h4 className={`pb-4 text-3xl lg:text-6xl font-bold `}>
            Few words about us
          </h4>
          <p className={`w-60 lg:w-3/4 lg:text-2xl pb-6`}>
            We are not ordinary food-truck. We create a place overflowing with
            positive energy that it expresses important tous values. Get to know
            them specifically.
          </p>
          <Button text='Learn More' color='bg-button_green' />
        </div>
      </div>
    </section>
  );
}
