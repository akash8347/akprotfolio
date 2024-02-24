"use client"
import React from 'react'
import Image from 'next/image'
import Accord from '@/app/Components1/Accord'
import MyTabs from '@/app/Components1/MyTabs'
const About = () => {
  return (

    <>
    <title>About | Akash Gohil</title>
      <div className=" min-h-screen mt-3 md:mt-0  about-container dis">
        <div className="   min-h-screen md:w-10/12 w-[100%]  
       flex flex-col lg:flex-row mx-auto items-center 
      lg:pb-32
       lg:justify-around lg:mx-auto">

          {/* <!-- Part 1: Image of Me --> */}

          <div className="flex justify-center items-center lg:pr-20  min-w-1/2 flex-1
         mx-auto">

            <Image src="/logo.png" alt="Image of Me" width={600}
              height={50} className="w-72 h-72 lg:w-80
             lg:h-80  rounded-full shadow-lg "/>

          </div>

          <div className="flex text bg-gradient-to-r dark:text-gray-200  to-purple-700 shadow-2xl  min-h-0 md:min-h-40 text-center flex-1 items-center
          md:w-[80%] w-[90%]  justify-center  md:mx-auto mb-10 md:mb-0 md:py-10
          dark:bg-gradient-to-tl dark:from-purple-800 dark:via-violet-900 dark:to-purple-800
           rounded-lg ">
            <div className="flex   md:w-[90%] mx-3 md:mx-12 w-[100%]
          rounded md:mt-10 lg:mt-0  shadow-2xl">
              <Accord />
            </div>



          </div>

        </div>
      </div>


    </>
  )
}

export default About