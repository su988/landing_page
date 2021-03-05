import React from 'react';

export default function ContactCard({ img, title, tag }) {
  return (
    <main
      className={`bg-white shadow-2xl w-72 lg:w-96 h-32 lg:h-48 rounded-full text-center mb-10`}
    >
      <img
        src={img}
        alt=''
        className={'w-6 lg:w-10 m-auto mt-3 lg:mt-6 mb-3 lg:mb-6'}
      />
      <p className={`text-xl pb-2 font-bold`}>{title}</p>
      <p className={`text-lg`}>{tag}</p>
    </main>
  );
}
