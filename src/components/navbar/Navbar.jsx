import React from 'react';
import Link from 'next/link';
import AuthLinks from '../authLinks/AuthLinks';
import ThemeToggle from '../themeToggle/ThemeToggle';
import About from '../../app/about/page';

const Navbar = () => {
  return ( 
    <div className=" p-4 flex  justify-between items-center">
      <div className="text-lg font-bold">
        <Link href={"/"}>Charity</Link>
      </div>
      <div className="flex text-black font-semibold space-x-4  max-sm:hidden ">
        <Link href="/" className="hover:underline underline-offset-8 hover:text-blue-500 focus:underline  focus:text-blue-500  text-[--textColor]   ">Home</Link>
        <Link href='/about' className="hover:underline underline-offset-8 hover:text-blue-500 focus:underline  focus:text-blue-500  text-[--textColor]   "> About US</Link>
       {/* <About/> */}
        <Link href="" className="hover:underline underline-offset-8 hover:text-blue-500 focus:underline  focus:text-blue-500  text-[--textColor]   ">Features</Link>
        <Link href="" className="hover:underline underline-offset-8 hover:text-blue-500 focus:underline  focus:text-blue-500  text-[--textColor]   ">FAQ</Link>
      </div>
      <div className='flex gap-2'>
        <ThemeToggle />
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
