// import React from 'react'

// const SinglePost = () => {
//   return (
//     <div>
//         <div className="w-full h-full mt-8  ">
//             <h1 className='text-4xl text-[--textColor] font-bold py-2 sm:text-start text-center'>Details post</h1>
//         <div className=" bg-[--bg]  sm:flex py-14 sm:items-center items-start grid grid-cols-1 gap-6">
//         <div className="sm:w-1/2 w-full pb-4 sm:translate-y-0 translate-y-full">
//             <img src="imagePost.png" alt="post image"  className='sm:translate-y-0  translate-y-10'/>
//             {/* className='w-[60434px] h-[403px]' */}
//         </div>
//         <div className="sm:w-1/2 sm:translate-y-0  -translate-y-full w-full">
//             <div className='flex justify-between items-center '>
//                 <div className='flex gap-1 items-center'>
//                     <img src="userPic.png" alt="user Picture" className='w-[60px] h-[60px]'/>
//                     <div className=''>
//                         <p className='sm:text-2xl text-base '>Youssra smith</p>
//                         <p className='sm:text-base text-xs '>Casablanca</p>
//                     </div>
//                 </div>
//                 <p className='sm:text-base text-xs '>2h ago</p>
//             </div>
//         <p className='py-8'>Crafted with precision and innovation, this cutting-edge equipment is designed to elevate your fitness journey to unprecedented heights. Whether you're a seasoned athlete or just embarking on your wellness quest</p>
//         <div className='pb-6'>
//         <p className='flex gap-1 pb-4'>
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <g clip-path="url(#clip0_260_106)">
//         <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 13.89 2.525 15.66 3.438 17.168L2.546 20.2C2.49478 20.3741 2.49141 20.5587 2.53624 20.7346C2.58107 20.9104 2.67245 21.0709 2.80076 21.1992C2.92907 21.3276 3.08958 21.4189 3.26542 21.4638C3.44125 21.5086 3.62592 21.5052 3.8 21.454L6.832 20.562C8.39068 21.5051 10.1782 22.0025 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM9.738 14.263C11.761 16.285 13.692 16.552 14.374 16.577C15.411 16.615 16.421 15.823 16.814 14.904C16.8636 14.7897 16.8816 14.6641 16.8661 14.5405C16.8507 14.4168 16.8023 14.2996 16.726 14.201C16.178 13.501 15.437 12.998 14.713 12.498C14.5618 12.3935 14.3761 12.3516 14.1947 12.381C14.0133 12.4105 13.8503 12.509 13.74 12.656L13.14 13.571C13.1085 13.6202 13.0593 13.6555 13.0026 13.6696C12.9459 13.6837 12.8859 13.6756 12.835 13.647C12.428 13.414 11.835 13.018 11.409 12.592C10.983 12.166 10.611 11.6 10.402 11.219C10.3761 11.1706 10.3686 11.1144 10.3809 11.0609C10.3932 11.0074 10.4245 10.9602 10.469 10.928L11.393 10.242C11.5249 10.1273 11.61 9.9682 11.6321 9.79486C11.6542 9.62153 11.6118 9.44611 11.513 9.302C11.065 8.646 10.543 7.812 9.786 7.259C9.68831 7.1882 9.57386 7.14406 9.45393 7.13091C9.334 7.11776 9.21271 7.13606 9.102 7.184C8.182 7.578 7.386 8.588 7.424 9.627C7.449 10.309 7.716 12.24 9.738 14.263Z" fill="#EF507F"/>
//         </g>
//         <defs>
//         <clipPath id="clip0_260_106">
//         <rect width="24" height="24" fill="white"/>
//         </clipPath>
//         </defs>
//         </svg>
// +212-509432746
//         </p>
//         <p className='flex gap-1'>
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M20 8L12 13L4 8V6L12 11L20 6M20 4H4C2.89 4 2 4.89 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4Z" fill="#EF507F"/>
// </svg>
// Youss.ra22@gmail.com
//         </p>
//         </div>
//         <div className='sm:flex  gap-5'>
//         <button role="button" aria-label="Subscribe" className="relative  mt-4 right-0 top-0   w-1/2  sm:w-96  h-12 text-[--bg] bg-[#00A4BF]  shadow-md   text-2xl  font-medium  hover:text-[#00A4BF] hover:bg-[--bg] border-2 border-[--bg ] hover:border-[#00A4BF] rounded-full">Subscribe</button>
//         <button role="button" aria-label="Subscribe" className="relative  mt-4 right-0 top-0   w-1/2  sm:w-96  h-12 text-[--bg] bg-[#00A4BF]  shadow-md   text-2xl  font-medium  hover:text-[#00A4BF] hover:bg-[--bg] border-2 border-[--bg ] hover:border-[#00A4BF] rounded-full">Subscribe</button>

//         </div>
//         </div>
//         </div>
//         </div>
      
//     </div>
//   )
// }

// export default SinglePost


///////////////////////////////////////////

import React from 'react';

const SinglePost = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="w-full mt-8">
        <h1 className="text-4xl font-bold py-2 text-center sm:text-left">Details post</h1>
        <div className="sm:flex py-14 items-start grid grid-cols-1 gap-6">
          <div className="w-full sm:w-1/2 pb-4 sm:translate-y-0 translate-y-full">
            <img src="imagePost.png" alt="post image" className="w-full h-auto sm:translate-y-0  translate-y-10" />
          </div>
          <div className="w-full sm:w-1/2 sm:translate-y-0  -translate-y-full">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img src="userPic.png" alt="user Picture" className="w-12 h-12 rounded-full" />
                <div>
                  <p className="text-xl">Youssra smith</p>
                  <p className="text-sm">Casablanca</p>
                </div>
              </div>
              <p className="text-sm">2h ago</p>
            </div>
            <p className="py-4">
              Crafted with precision and innovation, this cutting-edge equipment is designed to elevate your fitness journey to unprecedented heights. Whether you're a seasoned athlete or just embarking on your wellness quest
            </p>
            <div className="pb-4">
              <p className="flex items-center gap-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_260_106)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 13.89 2.525 15.66 3.438 17.168L2.546 20.2C2.49478 20.3741 2.49141 20.5587 2.53624 20.7346C2.58107 20.9104 2.67245 21.0709 2.80076 21.1992C2.92907 21.3276 3.08958 21.4189 3.26542 21.4638C3.44125 21.5086 3.62592 21.5052 3.8 21.454L6.832 20.562C8.39068 21.5051 10.1782 22.0025 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM9.738 14.263C11.761 16.285 13.692 16.552 14.374 16.577C15.411 16.615 16.421 15.823 16.814 14.904C16.8636 14.7897 16.8816 14.6641 16.8661 14.5405C16.8507 14.4168 16.8023 14.2996 16.726 14.201C16.178 13.501 15.437 12.998 14.713 12.498C14.5618 12.3935 14.3761 12.3516 14.1947 12.381C14.0133 12.4105 13.8503 12.509 13.74 12.656L13.14 13.571C13.1085 13.6202 13.0593 13.6555 13.0026 13.6696C12.9459 13.6837 12.8859 13.6756 12.835 13.647C12.428 13.414 11.835 13.018 11.409 12.592C10.983 12.166 10.611 11.6 10.402 11.219C10.3761 11.1706 10.3686 11.1144 10.3809 11.0609C10.3932 11.0074 10.4245 10.9602 10.469 10.928L11.393 10.242C11.5249 10.1273 11.61 9.9682 11.6321 9.79486C11.6542 9.62153 11.6118 9.44611 11.513 9.302C11.065 8.646 10.543 7.812 9.786 7.259C9.68831 7.1882 9.57386 7.14406 9.45393 7.13091C9.334 7.11776 9.21271 7.13606 9.102 7.184C8.182 7.578 7.386 8.588 7.424 9.627C7.449 10.309 7.716 12.24 9.738 14.263Z" fill="#EF507F"/>
            </g>
            <defs>
            <clipPath id="clip0_260_106">
            <rect width="24" height="24" fill="white"/>
            </clipPath>
            </defs>
            </svg>
                +212-509432746
              </p>
              <p className="flex items-center gap-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 8L12 13L4 8V6L12 11L20 6M20 4H4C2.89 4 2 4.89 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4Z" fill="#EF507F"/>
                </svg>
                Youss.ra22@gmail.com
              </p>
            </div>
            <div className="flex gap-5">
              <button className="w-full sm:w-1"></button>
            <div className="flex gap-5">
            <button role="button" aria-label="Subscribe" className="w-full p-2 sm:w-1/2 h-12 text-[--bg] bg-[#00A4BF] shadow-md text-2xl font-medium  hover:text-[#00A4BF] hover:bg-[--bg] border-2 border-[--bg ] hover:border-[#00A4BF] rounded-full">Subscribe</button>
            <button role="button" aria-label="Subscribe" className="w-full p-2 sm:w-1/2 h-12 text-[--bg] bg-[#00A4BF] shadow-md text-2xl font-medium  hover:text-[#00A4BF] hover:bg-[--bg] border-2 border-[--bg ] hover:border-[#00A4BF] rounded-full">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
);
};

export default SinglePost;
