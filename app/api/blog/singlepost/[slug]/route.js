import connectDB from "@/app/lib/mongocon";
import mongoose from "mongoose";
import Post from "@/app/lib/schemas/post";
import { NextResponse } from "next/server";
export async function GET(request, { params }){
    const slug = params.slug
    console.log('HIT SINGLE POST API')
    const slug1 = params.slug.replace(/-/g, ' ');
   try {
       await connectDB()
       console.log('HIT SINGLE POST API')

    const result=await Post.findOne({title:slug1})
    if(!result){
        return NextResponse.json({error:"invalid request"},{status: 400})
    }
    console.log(result);
    return NextResponse.json(result,{status:200});

   } catch (error) {
    return NextResponse.json({error},{status:500});

   }
   
    
   
}
