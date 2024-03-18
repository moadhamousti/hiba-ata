import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="">
    <div className="mt-10  flex items-center justify-between sm:flex-row gap-10 sm:gap-0 text-gray-500 border-b-2 border-gray-400 pb-8 mb-4">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Charity blog" width={52} height={52} />
        </div>
        <div className="flex mt-2 gap-2">
          <Link href="/" ><Image src="/facebook.png"   alt="Facebook" width={44} height={44} /></Link>
          <Link href="/" ><Image src="/instagram.png" alt="Instagram" width={44} height={44} /></Link>
          <Link  href="/"><Image src="/twitter.png" alt="Tiktok" width={44} height={44} /></Link>
        </div>
      </div>

        <div className="flex flex-end gap-2 mb-2 pb-16 font-normal text-[--softTextColor]">
          <Link href="/">Home</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>

    </div>
  );
};

export default Footer;