import React from 'react';

export default function ImageGallery() {
  return (
    <section className={`mt-16`}>
      <h4
        className={`text-2xl lg:text-6xl text-primary font-bold text-center pb-6 lg:pb-10`}
      >
        Good food = happy clients
      </h4>
      <div className={`flex flex-wrap lg:justify-center`}>
        <img
          src='/galery_photo1.png'
          alt=''
          className={`w-2/4 lg:w-100 lg:mb-6 lg:mr-6`}
        />
        <img
          src='/galery_photo2.png'
          alt=''
          className={`w-2/4 lg:w-100 lg:mb-6 lg:mr-6`}
        />

        <img
          src='/galery_photo3.png'
          alt=''
          className={`w-2/4 lg:w-100 lg:mb-6`}
        />
        <img
          src='/galery_photo4.png'
          alt=''
          className={`w-2/4 lg:w-100 lg:mb-6 lg:mr-6`}
        />

        <img
          src='/galery_photo5.png'
          alt=''
          className={`w-2/4 lg:w-100 lg:mb-6 lg:mr-6`}
        />
        <img
          src='/galery_photo6.png'
          alt=''
          className={`w-2/4 lg:w-100 lg:mb-6`}
        />
      </div>
    </section>
  );
}
