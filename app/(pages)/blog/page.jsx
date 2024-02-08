"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import React, { useEffect, useState, Suspense } from 'react';
import DOMPurify from 'dompurify';
import Spinner1 from '../../Components1/Spinner1';

const Page = () => {
    const router = useRouter();
    const [test, setTest] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/blog/getposts",  cache:"no-cache",{
                    method: 'GET',
                });

                const testData = await res.json();
                console.log(testData);
                setTest(testData);
            } catch (error) {
                console.log(error);
            } finally {
                // Set loading to false after data is fetched
                setLoading(false);
            }
        };

        fetchData(); // Call the asynchronous function here
    }, []); 

    const handleClick = (title) => {
        const truncatedTitle = title; // Adjust the number to your preference
        const slug = truncatedTitle.replace(/\s+/g, '-');
        router.push(`/blog/${slug}`);
    };

    return (
        loading ? ( <div className="h-screen w-full justify-center flex items-center"> <Spinner1/></div>  )
       : (
        
            <div className='flex flex-col  w-[95%] md:w-[80%] min-h-screen mx-auto mt-5 mb-10'>
                <h1 className="text-3xl text-center font-bold mt-10 mb-10">My blogs</h1>
               
                <div className="grid grid-cols-1 gap-9 md:grid-cols-1 lg:grid-cols-2 md:gap-4 w-full mx-auto ">
                    {test.map((test, index) => (
                        <div key={index} className="lg:max-w-xl max-w-lg hover:cursor-pointer " >
                            {/* card start */}
                            <div className="dark:bg-gray-900  mx-auto overflow-hidden max-w-lg rounded-lg shadow-md border p-4">
                                <div className='text-2xl mb-1 font-semibold truncate ...'>{test.title}</div>
                                <div dangerouslySetInnerHTML={{ __html: test.content.substring(0, 100) + (test.content.length > 100 ? '...' : '') }} className="text-gray-700 dark:text-gray-300 mb-4 "></div>
                                <div className="flex justify-end">
                                    <div  className="text-blue-500 font-semibold" onClick={() => handleClick(test.title)}>Read More</div>
                                </div>
                                <hr className='h-5 mt-2 mb-1 py-0' />
                                <div className="flex items-center mb-1">
                                    <Image width={100} height={100} className="w-12 h-12 rounded-full mr-3" src="/akashvgohillogo.png" alt="Profile Image" />
                                    <div>
                                        <h2 className="text-lg font-semibold">Akash Gohil</h2>
                                        <p className="text-gray-500 text-sm">Published on Feb 06, 2023</p>
                                    </div>
                                </div>
                            </div>
                            {/* card end */}
                        </div>
                    ))}
                </div>
            </div>
        )
    );
}

export default Page;
