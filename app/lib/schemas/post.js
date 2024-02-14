// post.js
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const PostSchema = new Schema({
    title: String,
    content: String,
    
},
{ timestamps: true } 
);



 module.exports = mongoose.models.testpost || mongoose.model('testpost', PostSchema);
