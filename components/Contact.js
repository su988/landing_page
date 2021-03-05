import React from 'react';
import ContactCard from '../components/ContactCard';

export default function Contact() {
  return (
    <section
      className={`mt-20 lg:mb-28 flex flex-col lg:flex-row lg:justify-between justify-center items-center text-primary lg:px-14`}
    >
      <ContactCard
        img='/time_icon.png'
        title='Today 12 pm - 9 pm'
        tag='Working Hours'
      />
      <ContactCard
        img='/location_icon.png'
        title='Piastowska 4, Cracow'
        tag='Find Us'
      />
      <ContactCard img='/phone_icon.png' title='503 204 176' tag='Call to Us' />
    </section>
  );
}
