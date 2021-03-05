import React from 'react';
import MenuCard from './MenuCard';

export default function Menu() {
  return (
    <section
      className={`mb-96 -mt-96 lg:mt-20 mx-10 flex flex-col items-center text-primary`}
    >
      <h4 className={`text-orange pb-2 lg:pb-3 lg:text-3xl`}>Menu</h4>
      <h3 className={`text-2xl lg:text-6xl font-bold pb-2 lg:pb-4`}>
        Explore Our Best Food
      </h3>
      <p className={`pb-12 lg:text-2xl`}>See our best selling meals!</p>
      <div className={`flex flex-col lg:flex-row`}>
        <div className={`mr-6`}>
          <MenuCard
            name='Mighty Burger'
            price='8'
            tag='Served with fries and drinks'
            img='/menu_photo1.png'
          />
        </div>
        <div className={`mr-6`}>
          <MenuCard
            name={`Chickpae's Salad`}
            price='4'
            tag='Served with fries and drinks'
            img='/menu_photo2.png'
          />
        </div>
        <div>
          <MenuCard
            name={`Chickpae's Wrap`}
            price='3'
            tag='Served with fries and drinks'
            img='/menu_photo_3.png'
          />
        </div>
      </div>
    </section>
  );
}
