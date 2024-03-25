import React from 'react';
import styles from './about.module.css'
import About from './About';
import OurVision from '@/components/Vision/page';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <About/>
      <OurVision/>
    </div >
  );
};

export default AboutPage;
