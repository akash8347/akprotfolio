"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import Spinner1 from "@/app/Components1/Spinner1";
import Head from "next/head";
import parse from 'html-react-parser';

export default function Page({ params }) {
  const [postData, setPostData] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const res = await fetch(`/api/blog/singlepost/${params.slug}`, {
          next: { revalidate: 60 }
        });
        if (!res.ok) {
          setError('Failed to fetch post data');

        }
        const postData = await res.json();
        console.log(postData.content);
        setPostData(postData);
      } catch (error) {
        console.error('Error fetching post data:', error);
      }
    };

    fetchPostData();
  }, [params.slug]);

  return (
    <>
      <Head>
        <title>{params.slug.replace(/-/g, ' ')}</title>
      </Head>
      {!error && postData ? (
        <div className="min-h-screen mt-10 mx-auto w-[93%] md:w-[60%]">
          <div className="heading">
            <div className="title font-semibold text-xl md:text-3xl">
              {postData.title}
            </div>
            <hr className="mt-3 mb-3 w-[100%]" />
            <div className="flex justify-center items-center mt-5 md:mt-1 mb-4">
              <Image width={100} height={100} className="w-7 h-7 rounded-full mr-3" src="/logo.png" alt="Profile Image" />
              <div>
                <h2 className="text-sm font-semibold">Akash Gohil</h2>
                <p className="text-gray-500 text-xs">Created at: {new Date(postData.createdAt).toLocaleString()}</p>
              </div>
            </div>
            <hr className="mt-3 w-[100%]" />
          </div>
          <div className="Content py-5 px-2 md:py-10 md:px-10 mx-auto shadow-2xl">
            <div className="para md:mb-10">
              {parse(postData.content)}
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen w-full flex justify-center items-center">
       {error?(<p>something gone wring </p>):(<Spinner1/>)}
        </div>
      )}
    </>
  );
}
