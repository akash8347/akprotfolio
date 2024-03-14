"use client"
import { FaGithubSquare } from "react-icons/fa";
import Image from "next/image";
import Mynav from "/comCompo/Mynav";
// import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Cards from "./Components1/Cards";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import Accord from "./Components1/Accord";
import '@radix-ui/themes/styles.css';
import Alert1 from "@/app/Components1/Alert1"

import { Flex, Text, Button, Tabs, Box } from '@radix-ui/themes';
import MyTabs from "./Components1/MyTabs";
import data from "./lib/projdata";
import Spinner1 from '@/app/Components1/Spinner1';
import React, { useState } from 'react'
import {useRouter} from "next/navigation";

export default function Home() {
  const router=useRouter()
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [subject, setSubject] = useState('');
  const [msg, setMsg] = useState('');
  const [pend, setpend] = useState(false)
  const [alert, setAlert] = useState(false);
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setpend(true)
    const data = {
      name,
      mail,
      subject,
      msg
    }
    try {
      let res = await fetch("api/mail", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
      })
      const result = res.json();
      console.log(result)
      setpend(false)
      setAlert(true);
    } catch (error) {
      setpend(false)
      console.log(error)
    }



  }

const handlex=()=>{
  setAlert(false)
}

  return (

    <div className=" ">
      <main className="HERO  flex w-11/12 md:w-10/12 mx-auto min-h-screen mt-5 md:mt-20
     bg-white dark:bg-gray-800 flex-col  md:flex-row md:min-h-[500px]">
        <div className="left dark:bg-gray-800  flex-1  md:w-11/12 w-full md:flex-1 mb-5 lg:mb-0 lg:mx-10 lg:mt-10  ">
          <div className=" content flex flex-col mt-16 md:mt-5  ">
            <div className="name text-2xl  font-semibold lg:text-4xl   md:text-3xl transition ease-in-out duration-300">
              Hey, I&apos;m Akash Gohil
            </div>
            <div className="para leading-relaxed mt-2 md:mt-4">
              <p className="font-medium text-xl md:text-2xl " >Full stack Engineer</p>
              <p className="font-normal mt-2 md:text-md">I Love building Complex softwares.</p>
              <p className="font-normal leading-normal md:text-md">I have an excellent problem solvings skills and i build softwares that solves real world problems. </p>
            </div>
            <div className="icons flex mt-5 ml-1 mb-4">
              {/* <FontAwesomeIcon className=" text-3xl" icon={faGithub}/> */}
              <FaEnvelopeOpenText onClick={()=>window.open('mailto:akashgohil.av@gmail.com')} className="text-3xl mr-3 cursor-pointer" />
              <FaLinkedin onClick={()=>router.push("https://www.linkedin.com/in/akash-gohil-196879229/")} className="cursor-pointer mx-3" style={{
                fontSize: "2.050rem",
                lineHeight: "2.25rem",
              }} />
            </div>
            <div className="button">

              <button type="button" className="text-purple-700 hover:text-white
                border border-purple-700 hover:bg-purple-800 focus:ring-4
                focus:outline-none focus:ring-purple-300 font-medium 
                rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
                 dark:border-purple-400 dark:text-purple-400
                   dark:hover:text-white
               dark:hover:bg-purple-500 dark:focus:ring-purple-900 shadow-2xl
               transiction duration-300 ease-in-out mt-3
               "  onClick={()=>router.push('/projects')}>Explore my projects</button>
            </div>
          </div>
        </div>

        <div className="right    flex-1 lg:mr-0 md:flex-1 lg:mx-10 lg:px-15 py-0 lg:pt-7 ">
          <Image src="/download.svg" alt="akash" width={50} height={50} className="w-7/12 md:w-9/12 mx-auto" />
        </div>
      </main>



      <section className="aboutme 
    
    ">
        <div className="  min-h-screen md:min-h-[500px]  mt-0 md:mt-0  about-container dis">
          <div className="min-h-screen    md:min-h-[500px]  md:w-9/12 w-[90%] flex flex-col
           lg:flex-row mx-auto  md:items-center  lg:pb-5 lg:justify-between justify-evenly lg:mx-auto">

            {/* <!-- Part 1: Image of Me --> */}

            <div className="flex  md:pl-20 md:items-center md:pr-5  min-w-1/2 md:w-[45%] mx-auto">

              <Image src="/20240215_155825_0000.png" alt="Image of Me" width={600}
                height={50} className="w-72 h-72 lg:w-80
             lg:h-80  rounded-full shadow-lg "/>

            </div>

            <div className="flex   bg-gradient-to-r   shadow-2xl 
            md:min-h-32 min-h-0   text-center md:flex-1 md:items-center
          md:w-[80%] w-[99%]  md:justify-center  md:mx-auto  ">

              <MyTabs />


            </div>

          </div>
        </div>


      </section>





      <section className="SECTION-PROJECTS min-h-screen 
       w-[100%] mx-auto bg-white dark:bg-gray-800 md:w-11/12 md:mx-auto mt-5 md:mt-0 mb-10 md:mb-5">

        <div className="heading mt-10  w-[90%] mx-auto flex  flex-wrap justify-between items-center">
          <div className="test  flex flex-col  ">
            <div className="title text-2xl font-semibold   md:text-4xl">My projects</div>
            <p className="para text-base md:text-base md:mt-3">Here is All of my projects </p>
          </div>
          <div className="test   ">
            <Link href="/projects" className="text-lg   ">See all {'->'}</Link>
          </div>
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

     

      <section id="contact" className="min-h-screen md:mt-32 w-full ">
   
        <div className="flex md:flex-row flex-col bg-gradient-to-r from-purple-500 via-indigo-600 rounded-2xl to-purple-700 items-center p-12 w-[90%] md:w-[80%] mx-auto px-3 md:px-10 justify-around md:justify-between">

          <div className="part1 md:min-h-[600px] text-center flex-1 md:w-[50%] mx-10 md:mx-0 md:justify-center">
            <div className="text-4xl font-semibold mt-9 mb-10 md:mb-16">Contact me</div>
            <div className="email text-lg mb-4 md:mb-10  flex justify-center items-center">
              <MdEmail className="mr-2" /> Akashgohil.av@gmail.com
            </div>
            <div className="email text-lg  flex justify-center items-center mb-10">
              <IoCallSharp className="mr-2" /> 91+ 9723996853
            </div>
            <div className="icons justify-center flex mt-5 ml-1 mb-10">
              <FaGithub onClick={()=>router.push("https://github.com/akash8347")} className="text-white mr-10 cursor-pointer" style={{ fontSize: "2.050rem", lineHeight: "2.25rem" }} />
              <FaEnvelopeOpenText onClick={()=>window.open('mailto:akashgohil.av@gmail.com')}  className="text-white mr-5 cursor-pointer" style={{ fontSize: "1.940rem", lineHeight: "2.25rem" }} />
              <FaLinkedin onClick={()=>router.push("https://www.linkedin.com/in/akash-gohil-196879229/")} className="text-white mx-5 cursor-pointer" style={{ fontSize: "2.050rem", lineHeight: "2.25rem" }} />
            </div>
          </div>

          <div className="part2  flex-1 w-full mx-10 md:w-[50%] border border-black bg-gradient-to-r rounded-xl from--300 via--500 to--600 ">
         
            <div className=" w-full md:px-6 px-4 bg-white py-5 rounded-xl">
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                    placeholder="example@domain.com"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="subject"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Subject
                  </label>
                  <input
                    required
                    type="text"
                    name="subject"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Enter your subject"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="message"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Message
                  </label>
                  <textarea
                    required
                    rows="4"
                    name="message"
                    id="message"
                    placeholder="Type your message"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-1 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  ></textarea>
                </div>
                <div>
                  <button
                    className="hover:shadow-form rounded-md bg-[#6A64F1] py-2 px-5 text-base font-semibold text-white outline-none"
                 type="submit" >
                    {
                      pend ? (<Spinner1 />) : ("submit") 
                    }

                  </button>
                  
                </div>
              </form>
              {alert && <Alert1 onClose={handlex}/>}
            </div>
          </div>

        </div>
      </section>
      

    </div>

  );
}
