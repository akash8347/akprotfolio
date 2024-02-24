"use client"
import React, { useState } from 'react'
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
// import nodemailer from 'nodemailer';
import Spinner1 from '@/app/Components1/Spinner1';
import { faL } from '@fortawesome/free-solid-svg-icons';
import Fade from '@/app/Components1/Fade';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Alert1 from '@/app/Components1/Alert1';
import { useRouter } from 'next/navigation';
const Page = () => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [subject, setSubject] = useState('');
  const [msg, setMsg] = useState('');
  const [pend, setpend] = useState(false)
  const [alert, setAlert] = useState(false);
  const router=useRouter();


  const handleSubmit = async (e) => {
    e.preventDefault();
  
 if(name.length <=2){
  setAlert(true)
   
  return;
 }
    const data = {
      name,
      mail,
      subject,
      msg
    }
    try {
      setpend(true)
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
    <>
    <title>Contact me | Akash Gohil</title>
    <section id="contact" className="min-h-screen md:mt-10 mt-5 mb-5 md:mb-10 w-full">
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
              <FaEnvelopeOpenText onClick={()=>window.open('mailto:akashgohil.av@gmail.com')}  className="text-white mr-5  cursor-pointer" style={{ fontSize: "1.940rem", lineHeight: "2.25rem" }} />
              <FaLinkedin onClick={()=>router.push("https://www.linkedin.com/in/akash-gohil-196879229/")} className="text-white mx-5 cursor-pointer" style={{ fontSize: "2.050rem", lineHeight: "2.25rem" }} />
          </div>
        </div>

        <div className="part2  flex-1 w-full mx-10 md:w-[50%] border border-black bg-gradient-to-r rounded-xl from--300 via--500 to--600">
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
             type='submit'     className="hover:shadow-form rounded-md bg-[#6A64F1] py-2 px-5 text-base font-semibold text-white outline-none"
                >
                  {
                    pend ? (<Spinner1 />) : ("submit")
                  }
                </button>
              </div>
            </form>
            {alert && <Alert1 data={"your form has been submitted successfully"} onClose={handlex}/>}
          </div>
        </div>

      </div>
    </section>
    </>
  )
}

export default Page