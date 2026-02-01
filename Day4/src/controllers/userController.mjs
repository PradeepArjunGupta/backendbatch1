import userModel from "../models/userModel.mjs";
const createUser=async (req, res)=>{
    let data=req.body;
    let user= await userModel.create(data);
    res.send({message:"ok",data:user});
}
export {createUser}