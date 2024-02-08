// api/posts.js
import connectDB from "@/app/lib/mongocon";
import mongoose from "mongoose";
// import Post from "@/app/lib/schemas/post";// Update the path accordingly
// var Post = mongoose.model('testpost')
var post=require('../../../lib/schemas/post')
export async function GET(request) {
    try {
       await connectDB()
        const posts = await post.find();
        return Response.json(posts);
    } catch (error) {
        console.error(error);
        return Response.json({ error: "An error occurred while fetching posts" });
    }
}
export const dynamic = 'force-dynamic' 