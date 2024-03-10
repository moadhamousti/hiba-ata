import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className='mt-[50px] px-0 py-[20px] flex items-center justify-between text-[#626262]'>
      <div className='flex-[1] flex flex-col gap-[14px]'>
        <div className='flex items-center gap-[10px]'>
          {/* <Image src="/logo.png" alt="lama blog" width={50} height={50} /> */}
          <h1 className='text-[24px]'>Charity</h1>
        </div>
        <p className='font-light'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
          porro sequi, totam minima consequuntur, aspernatur deleniti vero
          repellendus dorales.
        </p>
        <div className='mt-[10px] flex gap-[10px]'>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/tiktok.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className='flex-1 flex justify-end gap-4 md:gap-20 sm:gap-50'>
        <div className='flex flex-col gap-4 font-light'>
          <span className="font-bold">Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className='flex flex-col gap-4 font-light'>
          <span className="font-bold">Community</span>
          <Link href="/">Support</Link>
          <Link href="/">Whats New</Link>
          <Link href="/">Sponsors</Link>
          <Link href="/">Policy</Link>
        </div>
        <div className='flex flex-col gap-4 font-light'>
          <span className="font-bold">Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;