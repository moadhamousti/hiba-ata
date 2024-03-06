"use client"

import Link from 'next/link'
import styles from './authLinks.module.css'
import { useState } from 'react';

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const status = "notauthenticated"
  return (
    <>
      {status === "notauthenticated" ? (
        <button href="/" className={styles.button}>Login</button>
      ):(
        <>
        <Link href="/post" className={styles.link}>Post</Link>
        <span className={styles.link}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={()=>setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">About</Link>
          <Link href="/">Features</Link>
          <Link href="/">Contact</Link>
          {status === "notauthenticated" ? (
            <button href="/" className={styles.button}>Login</button>
          ):(
            <>
            <Link href="/post">Post</Link>
            <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks


