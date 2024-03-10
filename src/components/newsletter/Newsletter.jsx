import React from 'react'
import styles from './newsletter.module.css'
// import { Button, Input } from '@mui/material'


const Newsletter = () => {
  return (
    <div className={styles.subscribeWrapper}>
        <div className={styles.container}>
            <div className={styles.subscribeBox}>
                <h2>Subscribe our Newsletter for newest <br/> charity updates</h2>
                <form>
                    <input className={styles.input} type='email' placeholder='Your email address...'></input>
                    <button className={styles.button}>Subscribe</button>
                </form>
            </div>
        </div>
    </div>
    // <></>
  )
}

export default Newsletter