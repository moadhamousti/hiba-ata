// Landing.js

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Landing = () => {
  return (
    <div className="mt-8 relative  w-3/3 rounded-3xl overflow-hidden max-md:hidden ">
      <div className="bg-[url('/give.jpeg')] h-[739px] w-3/3 bg-cover 	">
        <div className="absolute rounded-3xl  bg-[#cbc2c252] bottom-0 ">
          <div className=' p-6'>
          <div className='items-end flex justify-start '>
            <div className='w-90 '>
            <h2 className=' text-white text-6xl font-semibold  truncate text-wrap align-baseline  '>
              JOIN US IN SHARING MEDICAL SUPPLIES AND EQUIPMENT
            </h2>
          </div>
          <div className="">

              <img src="/ArrowDown.svg" alt="Arrow Down" className='w-8 h-auto items-end' />
          </div>
          </div>
              <p className='text-white text-2xl mt-6'>
                We are <span className='font-extrabold '> Heba&aTaa</span>, providing medical supplies and equipment.
              </p>
                <button className=" text-white text-2xl  py-2 px-4 border-2 w-fit		 rounded-3xl	mt-6 inline-flex items-center">
                  GET STARTED
                      <svg width="20" height="17" viewBox="0 0 20 17" fill="none" className='ml-2' xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.9872 3.15923C20.0752 2.61399 19.7045 2.1007 19.1592 2.01276L10.2741 0.579667C9.72883 0.491725 9.21553 0.862437 9.12759 1.40768C9.03965 1.95291 9.41036 2.46621 9.9556 2.55415L17.8535 3.82801L16.5797 11.7259C16.4917 12.2712 16.8624 12.7845 17.4077 12.8724C17.9529 12.9604 18.4662 12.5896 18.5541 12.0444L19.9872 3.15923ZM1.58549 16.8107L19.5855 3.81068L18.4145 2.18932L0.414509 15.1893L1.58549 16.8107Z" fill="white"/>
                      </svg>          
                </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Landing;