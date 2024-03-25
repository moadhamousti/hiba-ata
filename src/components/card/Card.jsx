
import Link from 'next/link';

  const Card = () =>{
  return (
    <div className="w-full pt-5 px-4 mb-8 mx-auto">
      
      <Link href={'/SinglePost'}>
      <div className="relative flex max-w-[26rem]  gap-5 flex-col rounded-xl bg-[--bg] bg-clip-border  text-gray-700  shadow-md	  shadow-[--textColor]">
        <div className="relative m-0 overflow-hidden rounded-t-xl bg-transparent bg-clip-border text-gray-700 ">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
            alt="ui/ux review check"
          />
          
        </div>
        <div className="p-4">
          <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-[--textColor] antialiased">
            UI/UX Review Check
          </h4>
          <p className="mt-3  font-sans text-xl font-normal leading-relaxed text-[--softTextColor]  text-wrap antialiased">
            Because it's about motivating the doers. Because I'm here to follow my
            dreams and inspire others... <Link href={'/SinglePost'} className='text-[#EF507F]  text-base'>Read more</Link>
          </p>
        </div>
        <div className="flex items-start  justify-between  gap-2 p-4 ">
          <div className="sm:flex items-center   ">
            
            <div className='flex'>
            <img
              alt="tania andrew"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
              className="relative inline-block mr-1 h-9 w-9 rounded-full border-2   border-rose-500 object-cover object-center hover:z-10"
              data-tooltip-target="author-2"
            />
            <div className=''>
              <p className="text-sm font-semibold leading-5 text-[--textColor]">
              NAME
              </p>
              <p className="text-base font-sans leading-5 text-[--softTextColor]">
                Casablanca
              </p>
            </div>
            
          </div>
          </div>
          
          <p className="ml-6 font-sans text-base  text-[--softTextColor] antialiased">
            Jan 10
          </p>
      </div>
    </div>
    </Link>
  </div>
  );
}
 export default Card;
