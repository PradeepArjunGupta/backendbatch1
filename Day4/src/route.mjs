import express from 'express';
import { createUser } from './controllers/userController.mjs';
const router = express.Router();
router.get('/',(req,res)=>{
    res.send("hey this is backend")
})
router.post('/register',createUser)
export default router;