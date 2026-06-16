// mongocon.js
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);

        console.log('Connected to database');
    } catch (error) {
        console.error(error);
    }
}

module.exports = connectDB;
