import express from "express"
import { manager } from "./02-sync-example.js"

const app = express()

// req => params, query , body
app.get("/api/users", async (req, res)=>{
    try{
        const users = await manager.getUsers(req.query)
        res.status(200).json({message:"user found",users})
    }catch(err){
        res.status(500).json({message:err})
    }
})

app.get("/api/users/:id", async (req,res) => {
    try{
        const user = await manager.getUserById(parseInt(req.params.id))
        if(!user){
            return res.status(404).json({message:"User not found with id provided"})
        } 
        res.status(200).json({message:"User found", user})
    }catch(err){
        res.status(500).json({message:err})
    }
})



app.listen(3000, () => {
    console.log("Server currently running at: http://localhost:3000")
})