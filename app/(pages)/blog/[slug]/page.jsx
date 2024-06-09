import Head from 'next/head';
import Image from 'next/image';
import parse from 'html-react-parser';

// Fetch post data based on the slug



const fetchPostData = async (params) => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/blog/singlepost/${params.slug}`);
    if (res.ok) {
      return await res.json();
    } else {
      return { error: `Failed to fetch post data with status: ${res.status}` };
    }
  } catch (error) {
    console.error('Error fetching post data:', error);
    return { error: 'An error occurred while fetching the post data' };
  }
};


export function generateMetadata({params}){
return{
  title:params.slug
}
}

export default async function Page({ params }) {
  const postData = await fetchPostData(params);

  if (postData.error) {
    return (
      <>
        <Head>
          <title>Error - {params.slug.replace(/-/g, ' ')}</title>
        </Head>
        <div className="h-screen w-full flex justify-center items-center">
          <p>{postData.error}</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{postData.title} | Akash Gohil</title>
      </Head>
      {postData ? (
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
          <p>Something went wrong</p>
        </div>
      )}
    </>
  );
}
