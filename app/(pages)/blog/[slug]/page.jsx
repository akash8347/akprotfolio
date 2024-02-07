"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import Spinner1 from "@/app/Components1/Spinner1";

export default function Page({ params }) {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const res = await fetch(`/api/blog/singlepost/${params.slug}`,{ cache: 'force-cache' });
        if (!res.ok) {
          throw new Error('Failed to fetch post data');
        }
        const postData = await res.json();
        console.log(postData)
        setPostData(postData);
      } catch (error) {
        console.error('Error fetching post data:', error);
      }
    };

    fetchPostData();
  }, [params.slug]);

  return (
    <div className="min-h-screen mt-10 mx-auto w-[93%] md:w-[60%] ">
      <div className="heading">
        <div className="title font-semibold text-xl md:text-3xl  ">
          {postData ? postData.title : 'Loading...'}
        </div>
        <hr className="mt-3 mb-3 w-[100%]" />
        <div className="flex justify-center items-center mt-5 md:mt-1 mb-4">
          <Image width={100} height={100} className="w-7 h-7 rounded-full mr-3" src="/akashvgohillogo.png" alt="Profile Image" />
          <div>
            <h2 className="text-sm font-semibold">Akash Gohil</h2>
            <p className="text-gray-500 text-xs">Published on Feb 06, 2023</p>
          </div>
        </div>
        <hr className="mt-3 w-[100%]" />
      </div>
      <div className="Content py-5 px-2  md:py-10 md:px-10 mx-auto shadow-2xl ">

  {postData ? (
    <div dangerouslySetInnerHTML={{ __html: postData.content }} className="para md:mb-10" />
  ) : (
    <div className="h-screen w-full justify-center flex items-center">< Spinner1/></div>
  )}
</div>
    </div>
  );
}
