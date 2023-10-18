import { Router } from "express";
import { usersManager } from "../managers/users.manager.js";

const router = Router()

router.get("/",async (req,res)=>{
    try{
        const users = await usersManager.findAll()
        res.status(200).json({message:"Users",users})
    }catch(err){
        res.status(500).json({message:err.message})
    }
})

router.post("/",async (req,res) => {
    try{
        const createdUser = await usersManager.createOne(req.body)
        res.status(200).json({message:"User created", user: createdUser})
    }catch(err){
        res.status(500).json({message:err.message})
    }
})

export default router