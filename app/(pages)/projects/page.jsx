import React from 'react'
import Link from 'next/link'
import Cards from '@/app/Components1/Cards'
import { Suspense } from 'react'
import projdata from '@/app/lib/projdata'
import SkelCard from '@/app/Components1/SkelCard'
// import Loading from './loading'
// import { Metadata } from 'next';
 
export const metadata = {
  title: 'Projects',
};

const Page = () => {
  let data;

  
    data=projdata;


  

  return (
    <>
    {/* <title>Projects</title> */}
    <section className="SECTION-PROJECTS min-h-screen 
       w-[100%] mx-auto bg-white dark:bg-gray-800 md:w-11/12 md:mx-auto mt-5 md:mt-0 mb-10 md:mb-5">

        <div className="heading  w-full mx-auto  flex  justify-center  sm:flex md:flex-col ">
          <div className="test text-center flex flex-col  ">
            <div className="title text-2xl font-semibold md:mt-10 mt-5 md:text-4xl">My projects</div>
            <p className="para text-base md:text-base md:mt-3">Here is All of my projects </p>
          </div>
          {/* <Link href="#" className="text-lg">See all {'->'}</Link> */}
        </div>

    
        <div className="cards-container1 mx-auto w-[90%] lg:w-full flex flex-col lg:flex-row 
        lg:flex-wrap justify-center  flex-wrap">
          {data.map((card) => (
            
            <div key={card.id} className="lg:w-[40%] lg:max-w-xl mx-auto lg:mx-auto">  {/* mx-3 */}
    
              <Cards data={card} />
              
            </div>
          ))}
        </div>


      </section>
    </>
  )
}

export default Page