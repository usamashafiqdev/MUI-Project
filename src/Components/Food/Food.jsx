import React from 'react'
import Food1 from '../../assets/biryani2.png';

import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";



const Banner = () => {
  return (
    <>
  <div className='min-h[500px]'>
    <div>
      <div className='container dark:bg-black bg-white'>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>

          {/* Image Secton */}

          <div>
            <img 
            src={Food1} 
            alt=""
            className='max-w-[430px] w-full me-auto drop-shadow-[-10px_10px_10px rgba(0,0,0,0.1)]' />
          </div>

          {/* Text Section */}

          {/* <div className='flex flex-col justify-center gap-6 sm:pt-0'>
            <h1 className='text-3xl sm:text-4xl font-bold'>
              This is the Banner
            </h1>

            <p className='text-sm text-gray-500 tracking-wide leading-5'></p>

            <div className='flex gap-6'>
              <div>
                <GrSecure className = 'text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-500 dark:bg-violet-400'/>
              </div>

               <div>
                <IoFastFood className = 'text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-500 dark:bg-orange-400'/>
              </div>

               <div>
                <GiFoodTruck className = 'text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-500 dark:bg-green-400'/>
              </div>


            </div>
            <div>
              <button className='bg-gradient-to-r from-primary px-6 py-3 to-secondry text-white  rounded-full hover:scale-105 duration-200'>Order Now</button>
            </div>

          </div> */}



          <div className="flex flex-col items-center justify-center gap-4 px-4 py-6 sm:gap-6 sm:px-8 sm:pt-0 md:gap-8">
  {/* Heading */}
  <h1 className="text-2xl font-bold text-center sm:text-3xl md:text-4xl text-black dark:text-white">
    This is the Banner
  </h1>

  {/* Description (empty in original) */}
  <p className="text-sm text-cent text-black dark:text-white max-w-prose sm:text-base">
    kxysfjhfkwkf
  </p>

  {/* Icons Row */}
  <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
    {/* Security Icon */}
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center p-3 rounded-full bg-violet-500 shadow-sm h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 dark:bg-violet-400">
        <GrSecure className="text-xl sm:text-2xl md:text-3xl" />
      </div>
      <span className="mt-2 text-xs sm:text-sm">Security</span>
    </div>

    {/* Fast Food Icon */}
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center p-3 rounded-full bg-orange-500 shadow-sm h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 dark:bg-orange-400">
        <IoFastFood className="text-xl sm:text-2xl md:text-3xl" />
      </div>
      <span className="mt-2 text-xs sm:text-sm">Fast Food</span>
    </div>

    {/* Delivery Icon */}
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center p-3 rounded-full bg-green-500 shadow-sm h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 dark:bg-green-400">
        <GiFoodTruck className="text-xl sm:text-2xl md:text-3xl" />
      </div>
      <span className="mt-2 text-xs sm:text-sm">Delivery</span>
    </div>
  </div>

  {/* Button */}
  <button className="px-5 py-2 text-sm font-medium text-white rounded-full bg-gradient-to-r from-primary to-secondry hover:scale-105 transition-transform duration-200 sm:px-6 sm:py-3 sm:text-base">
    Order Now
  </button>
</div>



          {/*  */}

          <div>
            

          </div>

          
        </div>
      </div>
    </div>

  </div>
    
    
    
    </>
  )
}

export default Banner