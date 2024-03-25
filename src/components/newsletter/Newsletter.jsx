
import React from 'react';

const Newsletter = () => {
  return (
    <div className="flex items-center justify-center mt-24 ">
        <div className="max-w-full  w-full mx-auto">
            <div className="p-14 max-w-full  w-full bg-[#EF507F] text-center rounded-xl overflow-hidden">
                <h2 className="font-bold text-2xl text-[--bg]">“STAY UPDATED ON OUR LATEST EFFORTS TO SHARE MEDICAL SUPPLIES AND EQUIPMENT SUBSCRIBING TO OUR NEWSLETTER”</h2>
                <form className="relative mt-10  mx-auto   bg-nonesparent h-12 rounded-full shadow-md w-full sm:w-full">
                    <input id="email" className="absolute bg-transparent border-2 border-solid border-[--b] pl-6 text-lg  top-0 left-0 sm:w-full mx-auto w-full  outline-none  h-12 rounded-full text-[--bg]  " type='email' placeholder='Your email address...'></input>
                </form>
                    <button role="button" aria-label="Subscribe" className="relative  mt-10 right-0 top-0   w-full  sm:w-96  h-12      text-3xl  font-semibold shadow-md  shadow-[--textColor] dark:shadow-[--bg] text-[#EF507F] bg-[--bg]   hover:text-[--bg] hover:bg-[#EF507F] border-2 border-solid border-[--bg] rounded-full">Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Newsletter;