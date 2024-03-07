import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'
const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>About</b>
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Numquam tenetur tempore
            sint nemo dignissimos facere enim debitis, 
            minima totam, corrupti vitae ad ducimus 
            commodi fugit labore non natus pariatur aliquid.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default About