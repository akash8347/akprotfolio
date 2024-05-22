import connectDB from "@/app/lib/mongocon";
import mongoose from "mongoose";
import Post from "@/app/lib/schemas/post";
export async function GET(request, { params }){
    const slug = params.slug
    console.log('HIT SINGLE POST API')
    const slug1 = params.slug.replace(/-/g, ' ');
   try {
       await connectDB()
       console.log('HIT SINGLE POST API')

    const result=await Post.findOne({title:slug1})
    console.log(result);
    return Response.json(result);

   } catch (error) {
    return Response.json({error});

   }
   
    
   
}
