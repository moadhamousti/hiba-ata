import React from 'react';
// import styles from './about.module.css'

const About = () => {
  return (
    // <div className=" px-6 py-8 mt-8">
    //   <img src="aboutBg.png" alt="" />
    // </div>
    // <div className={styles.container}>

    <div className=' w-full h-[100vh] sm:h-[100vh] relative    overflow-hidden '>
    <article className='flex  flex-col  items-start justify-center sm:mx-10  h-[60vh] sm:h-[85vh]'>
      <div className='absolute top-0 left-0 bottom-0 right-0 h-full w-full  z-0'
          style={{backgroundImage: "url('aboutBg.png')", backgroundSize: 'cover', backgroundPosition:'center' }} />
  
  <div 
          className='absolute bottom-0 top-0 left-0 w-full h-full   bg-gradient-to-b from-transparent to-[--softTextColor] opacity-80 z-10' 
        />
        <div className='w-full text-[--bg] lg:w-full p-1 sm:p-2 md:p-3 lg:p-4 flex flex-col items-start justify-center z-10 min-h-9'>
              <h1 className='font-bold py-4 capitalize text-xl sm:text-xl md:text-3xl lg:text-5xl'>ABOUT US</h1>
  
          <p className=' sm:inline-block mt-4 md:text-lg lg:text-xl w-5/12 text-left'>
          At <span className='font-extrabold '> Heba&aTaa</span>, our mission is to Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro alias ut explicabo reprehenderit voluptatem omnis aliquam rerum aspernatur eos,itaque maxime quibusdam molestiae soluta.
          </p>
                  {/* <button className="py-2 px-4 inline-flex items-center mt-6  rounded-3xl capitalize xt-[--TextColor] font-semibold border-2 border-solid border-[--bg] hover:scale-105 transition-all ease duration-200 text-sm sm:text-base max-md:text-xs max-md:font-normal">
                    GET STARTED
                        <svg width="20" height="17" viewBox="0 0 20 17"  className='ml-2 hidden  ' xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.9872 3.15923C20.0752 2.61399 19.7045 2.1007 19.1592 2.01276L10.2741 0.579667C9.72883 0.491725 9.21553 0.862437 9.12759 1.40768C9.03965 1.95291 9.41036 2.46621 9.9556 2.55415L17.8535 3.82801L16.5797 11.7259C16.4917 12.2712 16.8624 12.7845 17.4077 12.8724C17.9529 12.9604 18.4662 12.5896 18.5541 12.0444L19.9872 3.15923ZM1.58549 16.8107L19.5855 3.81068L18.4145 2.18932L0.414509 15.1893L1.58549 16.8107Z" fill="black"/>
                        </svg>     
                        
                        <svg width="20" height="17" viewBox="0 0 20 17"  className='ml-2  dark:hidden' xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.9872 3.15923C20.0752 2.61399 19.7045 2.1007 19.1592 2.01276L10.2741 0.579667C9.72883 0.491725 9.21553 0.862437 9.12759 1.40768C9.03965 1.95291 9.41036 2.46621 9.9556 2.55415L17.8535 3.82801L16.5797 11.7259C16.4917 12.2712 16.8624 12.7845 17.4077 12.8724C17.9529 12.9604 18.4662 12.5896 18.5541 12.0444L19.9872 3.15923ZM1.58549 16.8107L19.5855 3.81068L18.4145 2.18932L0.414509 15.1893L1.58549 16.8107Z" fill="white"/>
                        </svg>               
                    </button> */}
        </div>
      
      </article>
    </div >
    // {/* </div > */}
                );}

export default About;
