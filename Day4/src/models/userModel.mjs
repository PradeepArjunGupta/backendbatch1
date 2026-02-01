import mongoose from "mongoose";
const userSchema= new mongoose.Schema({
    name:String,
    email:String, 
    age:Number,
    phone:String,
    password:String
})
const user= mongoose.model('user',userSchema);
export default user;