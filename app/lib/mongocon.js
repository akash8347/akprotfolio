// mongocon.js
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const connectDB = async () => {
    try {
        // await mongoose.connect(process.env.MONGODB_URL);
                await mongoose.connect("mongodb+srv://akash1:mnjabc@cluster0.rb4oopg.mongodb.net/portfolio?retryWrites=true&w=majority");

        console.log('Connected to database');
    } catch (error) {
        console.error(error);
    }
}

module.exports = connectDB;
