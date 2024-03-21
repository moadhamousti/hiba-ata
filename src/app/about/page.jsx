import React from 'react';
import styles from './about.module.css'
import About from './About';
import OurVision from '@/components/Vision/page';

const AboutPage = () => {
  return (
    // <div className=" px-6 py-8 mt-8">
    //   <img src="aboutBg.png" alt="" />
    // </div>
    <div className={styles.container}>
      <About/>
      <OurVision/>
    </div >
  );
};

export default AboutPage;
