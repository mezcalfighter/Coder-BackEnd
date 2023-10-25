import { Router } from "express";
import { usersManager } from "../managers/users.manager.js";

const router = Router()

router.get("/",async (req,res)=>{
    try{
        const result = await usersManager.findAll()
        res
            .status(200)
            .json({message:"Users",users:result})
    }catch(err){
        res.status(500).json({error:err.message})
    }
})

router.get("/:idUser",async (req,res)=>{
    const {idUser} = req.params
    try{
        const result = await usersManager.findById(idUser)
        res
            .status(200)
            .json({message:"Users",users:result})
    }catch(err){
        res.status(500).json({error:err.message})
    }
})

router.delete("/:idUser",async (req,res)=>{
    const {idUser} = req.params
    try{
        const result = await usersManager.deleteOne(idUser)
        res
            .status(200)
            .json({message:"User deteted",users:result})
    }catch(err){
        res.status(500).json({error:err.message})
    }
})

router.post("/",async (req,res)=>{
    const {first_name, last_name, email, password} = req.body
    if(!first_name || !last_name || !email){
        return res.status(400).json({message:"Some Data is missing"})
    }
    try{
        const createdUser = await usersManager.createOne(req.body)
        // res
        //     .status(200)
        //     .json({message:"User Created",users:result})
        res.redirect(`/api/views/home/${createdUser.id}`)
    }catch(err){
        res.status(500).json({error:err.message})
    }
})

export default router