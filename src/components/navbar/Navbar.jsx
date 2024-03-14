import React from 'react';
import Link from 'next/link';
import AuthLinks from '../authLinks/AuthLinks';
import ThemeToggle from '../themeToggle/ThemeToggle';

const Navbar = () => {
  return ( 
    <div className=" p-4 flex  justify-between items-center">
      <div className="text-lg font-bold">
        <Link href={"/"}>Charity</Link>
      </div>
      <div className="flex space-x-4 max-sm:hidden ">
        <Link href="" className="hover:text-gray-300">What We Do</Link>
        <Link href="" className="hover:text-gray-300">Features</Link>
        <Link href="" className="hover:text-gray-300">FAQ</Link>
        <Link href="" className="hover:text-gray-300">Contact</Link>
      </div>
      <div className='flex gap-2'>
        <ThemeToggle />
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
