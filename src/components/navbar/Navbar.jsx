import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import AuthLinks from '../authLinks/AuthLinks'
import ThemeToggle from '../themeToggle/ThemeToggle'
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Charity</div>
      <div className={styles.links}>
        <Link href='' className={styles.link}>What We Do</Link>
        <Link href='' className={styles.link}>Features</Link>
        <Link href='' className={styles.link}>FAQ</Link>
        <Link href='' className={styles.link}>Contact</Link>

      </div>
      <div className={styles.button}>
        <ThemeToggle/>
        <AuthLinks/>
      </div>
      
    </div>
  )
}

export default Navbar