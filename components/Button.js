import React from 'react';
import { IoMdArrowRoundForward } from 'react-icons/io';

export default function Button({ color, text }) {
  return (
    <button
      className={`flex items-center ${color} px-5 lg:px-7 pt-2 lg:pt-3 pb-3 lg:pb-4 rounded-lg text-white lg:text-xl`}
    >
      <p className={`mr-2`}>{text}</p>
      <IoMdArrowRoundForward />
    </button>
  );
}
