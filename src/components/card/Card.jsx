import Image from 'next/image'
import styles from './card.module.css'
import Link from 'next/link'

const Card = () => {
  return (
    <div className={styles.cardContainer}>
        <div className={styles.imageContainer}>
            <Image className={styles.image} src='/p1.jpeg' alt='' fill/>
        </div>
        <div className={styles.GrayContainer}>
            
        </div>
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>07.03.2024 - </span>
                <span className={styles.category}>EQUIPEMENT MEDICAL</span>
            </div>
            <Link href=''>
                <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
            </Link>
            {/* <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Assumenda consequuntur vitae fugiat consectetur tempore
                 minima sapiente, iure architecto voluptates quidem, voluptate, 
                 dignissimos earum! Dolore quasi vel cupiditate impedit officia asperiores!
            </p> */}
            <Link href='/post' className={styles.link}>Read More</Link>
        </div>
    </div>
  )
}

export default Card