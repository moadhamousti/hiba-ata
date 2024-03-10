import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import AuthLinks from '../authLinks/AuthLinks'
import ThemeToggle from '../themeToggle/ThemeToggle'
const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-24">
      <div className="text-left text-3xl font-bold lg:text-3xl md:text-x2 text-softTextColor "><Link href='/'>Charity</Link> </div>
      <div className="hidden sm:flex items-center gap-15 lg:gap-10 lg:text-base md:gap-5 sm:gap-4 md:text-md text-blackk">
        <Link href="" className="text-xl">What We Do</Link>
        <Link href="" className="text-xl">Features</Link>
        <Link href="" className="text-xl">FAQ</Link> 
        <Link href="" className="text-xl">Contact</Link>
      </div>
      <div className="flex gap-4">
        {/* <ThemeToggle/> */}
        <AuthLinks/>
      </div>
      
    </div>
  )
}

export default Navbar