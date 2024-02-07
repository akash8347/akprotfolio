import connectDB from "@/app/lib/mongocon";
import mongoose from "mongoose";

// var Post = mongoose.model('testpost');
import Post from "@/app/lib/schemas/post";

export async function POST(request){
    try {
        await connectDB();

        const data = await request.json();
        console.log("Received data:", data);

        const newPost = new Post({
            title: data.title,
            content: data.value
        });

        const post = await newPost.save();
        console.log("New post saved:", post);

        return Response.json({ got: "response successfully", post });
    } catch (error) {
        console.error("Error:", error);
        return Response.json({ error: "An error occurred while saving the post" });
    }
}
