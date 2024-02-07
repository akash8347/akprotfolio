// app/lib/blogdata.js
let blogData = []; // Initialize an empty array to store blog data

export const saveBlogData = (title,content) => {
  // Assuming data is a string, you may need to parse it if it's not already parsed
  // You can customize how you want to save the data here
  blogData.push({ title:title,content: content }); // Push the new data into the array
  // You might want to save the data to localStorage or send it to a server here
};

export const getBlogData = () => {
  return blogData;
}