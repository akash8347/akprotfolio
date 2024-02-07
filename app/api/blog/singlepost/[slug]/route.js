import mongoose from "mongoose";
import Post from "@/app/lib/schemas/post";
export async function GET(request, { params }){
    const slug = params.slug
    console.log(slug)
    const slug1 = params.slug.replace(/-/g, ' ');
   try {
    const result=await Post.findOne({title:slug1})
    return Response.json(result);

   } catch (error) {
    return Response.json({error});

   }
   
    
   
}