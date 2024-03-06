// Landing.js

import React from 'react';
import styles from './landing.module.css';

const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <h1 className={styles.bigText}>Welcome to Our Website</h1>
        <button className={styles.button}>Join Us</button>
      </div>
      <div className={styles.rightSection}>
        <img className={styles.image} src="/path/to/image.jpg" alt="Welcome Image" />
      </div>
    </div>
  );
};

export default Landing;
