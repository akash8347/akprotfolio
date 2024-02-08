"use client"
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation';
import { signOut } from "next-auth/react"
import Spinner1 from '@/app/Components1/Spinner1';
import Image from 'next/image';

const DynamicReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const Page = () => {
  const router = useRouter();
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const { data: session, status } = useSession();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(value.length<=100){
      document.getElementById('span').innerHTML="blog post must be hundred charachters long"
      return
    }
    try {
      const res = await fetch("/api/blog/posts", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, value })
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error)
    }
   
  }

  if (status === "authenticated") {
    return (
      <>
      <div className="test w-[95%] md:w-[60%] mx-auto min-h-screen">
      <div className="test flex justify-center items-center">
        <div className="test py-2 my-3 font-semibold flex items-center ">
          {`Hello ${session.user.name}`}<span className='ml-2'>
            <Image alt='owner' className='h-7 w-7 rounded-3xl' src={session.user.image}
             height={100} width={100}/>
          </span>
          </div>

          <div className="test  ">
          <button className="text-purple-700 hover:text-white
                border border-purple-700 hover:bg-purple-800 focus:ring-4
                focus:outline-none focus:ring-purple-300 font-medium 
                rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
                 dark:border-purple-400 dark:text-purple-400
                   dark:hover:text-white
               dark:hover:bg-purple-500 dark:focus:ring-purple-900 shadow-2xl
              ml-3 transiction duration-300 ease-in-out mt-3
               "
           onClick={() => signOut()}>Sign out</button>

          </div>
      </div>
      <div className="text  w-full">
        <form onSubmit={handleSubmit}>
          <input type="text" className='border border-purple-500 w-full py-3 px-3 mb-3 ' name="title" required placeholder='enter post main title' value={title} onChange={(e) => setTitle(e.target.value)} />
          <DynamicReactQuill theme="snow"  value={value} onChange={setValue} />
          <div id='span'></div>
          <button className="text-purple-700 hover:text-white
                border border-purple-700 hover:bg-purple-800 focus:ring-4
                focus:outline-none focus:ring-purple-300 font-medium 
                rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
                 dark:border-purple-400 dark:text-purple-400
                   dark:hover:text-white
               dark:hover:bg-purple-500 dark:focus:ring-purple-900 shadow-2xl
               transiction duration-300 ease-in-out mt-3
               " type="submit" value="Submit">submit</button>
        </form>
        </div>
        </div>
      </>
    );
  } else if (status === "loading") {
    return <div className='min-h-screen flex justify-center items-center'><Spinner1/></div>  ;
  } else {
    // Redirect to sign-in Page if not authenticated
    router.push("/api/auth/signin");
    return null; // Return null while redirecting
  }
};

export default Page;
