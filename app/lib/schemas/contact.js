import mongoose from "mongoose";

var Schema=mongoose.Schema;
const contactSchema=new Schema({
name:String,
msg:String,
mail: String,
subject:String
})

module.exports = mongoose.models.testcontact || mongoose.model('testcontact', contactSchema);
