import React from 'react';
import styles from '../styles/Hamburger.module.css';

export default function Hamburger({ hamburgerOpen }) {
  return (
    <div className={`${styles.nav_icon} ${hamburgerOpen ? styles.open : ''} `}>
      <span className={`${styles.span1}`}></span>
      <span className={`${styles.span2}`}></span>
      <span className={`${styles.span3}`}></span>
    </div>
  );
}
