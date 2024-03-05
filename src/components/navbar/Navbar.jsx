import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import AuthLinks from '../authLinks/AuthLinks'
import ThemeToggle from '../themeToggle/themeToggle'
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Charity</div>
      <div className={styles.links}>
        <Link href=''>About</Link>
        <Link href=''>Features</Link>
        <Link href=''>Contact</Link>
        <AuthLinks/>
        <ThemeToggle/>
      </div>
      <div className={styles.button}></div>
    </div>
  )
}

export default Navbar