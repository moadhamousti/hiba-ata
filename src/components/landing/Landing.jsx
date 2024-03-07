// Landing.js

import React from 'react';
import styles from './landing.module.css';
import Image from 'next/image';

const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Numquam tenetur tempore
            sint nemo dignissimos facere enim debitis, 
            minima totam, corrupti vitae ad ducimus 
            commodi fugit labore non natus pariatur aliquid.
          </p>
          <button href="/blog" className={styles.button}>See More</button>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
        </div>
      </div>
    </div>
  );
};

export default Landing;
