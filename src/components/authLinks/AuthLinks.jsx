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

        
      <button className=" py-2 px-4 inline-flex items-center text-[--TextColor] font-semibold  rounded-3xl capitalize border-2 border-[--textColor] border-solid border-light hover:scale-105 transition-all ease duration-200 text-base sm:text-xs   max-sm:hidden">
      GET STARTED
          <svg width="20" height="15" viewBox="0 0 20 17" fill='none' className='ml-2 text-[--textColor] size-min ' xmlns="http://www.w3.org/2000/svg">
          <path d="M19.9872 3.15923C20.0752 2.61399 19.7045 2.1007 19.1592 2.01276L10.2741 0.579667C9.72883 0.491725 9.21553 0.862437 9.12759 1.40768C9.03965 1.95291 9.41036 2.46621 9.9556 2.55415L17.8535 3.82801L16.5797 11.7259C16.4917 12.2712 16.8624 12.7845 17.4077 12.8724C17.9529 12.9604 18.4662 12.5896 18.5541 12.0444L19.9872 3.15923ZM1.58549 16.8107L19.5855 3.81068L18.4145 2.18932L0.414509 15.1893L1.58549 16.8107Z" fill="black"/>
          </svg>          
      </button>

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
    <button className="py-2 px-4 inline-flex items-center text-[--TextColor] font-semibold  rounded-3xl capitalize border-2 border-[--textColor] border-solid border-light hover:scale-105 transition-all ease duration-200 text-sm sm:text-base">
    GET STARTED
        <svg width="20" height="15" viewBox="0 0 20 17" fill='none' className='ml-2 text-[--textColor] ' xmlns="http://www.w3.org/2000/svg">
        <path d="M19.9872 3.15923C20.0752 2.61399 19.7045 2.1007 19.1592 2.01276L10.2741 0.579667C9.72883 0.491725 9.21553 0.862437 9.12759 1.40768C9.03965 1.95291 9.41036 2.46621 9.9556 2.55415L17.8535 3.82801L16.5797 11.7259C16.4917 12.2712 16.8624 12.7845 17.4077 12.8724C17.9529 12.9604 18.4662 12.5896 18.5541 12.0444L19.9872 3.15923ZM1.58549 16.8107L19.5855 3.81068L18.4145 2.18932L0.414509 15.1893L1.58549 16.8107Z" fill="black"/>
        </svg>          
    </button>
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


