// api/posts.js
import connectDB from "@/app/lib/mongocon";
import mongoose from "mongoose";
import { revalidatePath } from 'next/cache';
// import Post from "@/app/lib/schemas/post";// Update the path accordingly
// var Post = mongoose.model('testpost')
var post=require('../../../lib/schemas/post')
export async function GET(request) {
    try {
       await connectDB()
        const posts = await post.find();
        revalidatePath("/blog");
        return Response.json(posts);
    } catch (error) {
        console.error(error);
        return Response.json({ error: "An error occurred while fetching posts" });
    }
}
