// post.js
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const PostSchema = new Schema({
    title: String,
    content: String
});



 module.exports = mongoose.models.testpost || mongoose.model('testpost', PostSchema);
