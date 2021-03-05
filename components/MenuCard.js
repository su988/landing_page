import React from 'react';

export default function MenuCard({ name, price, tag, img }) {
  return (
    <div className={`bg-white w-72 lg:w-96 shadow-2xl mb-8 text-lg`}>
      <img src={img} alt='' className={'w-72 h-72 lg:w-96'} />
      <div className={`flex justify-between py-4 px-6 font-bold`}>
        <h6>{name}</h6>
        <span>{price}$</span>
      </div>
      <p className={`px-6 pb-6`}>{tag}</p>
    </div>
  );
}
