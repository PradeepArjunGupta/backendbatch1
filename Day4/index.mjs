import express from 'express';
import router from './src/route.mjs';
import mongoose from 'mongoose';
const app= express();
app.use(express.json());
// step 1 to connect to db
mongoose.connect("mongodb+srv://gauravpandey:x5ElKBSvDXR03ZzT@cluster0.ixc8ix9.mongodb.net/day4").then(()=>console.log("database connected")).catch((err)=>console.log(err));
app.use('/',router);
app.listen(8080, ()=>{
    console.log("server stated on port 8080");
})
