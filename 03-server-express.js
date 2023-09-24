import express, { response } from "express"
import { manager } from "./02-sync-example.js"

const app = express()

//para recibir info por method post
app.use(express.json())

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

app.post("/api/users", async (req,res)=>{
    try{
        const {first_name, course, age, password} = req.body
        if(!first_name, !course, !age, !password){
            return res.status(404).json({message:"Some data is missing"})
        }
        const response = await manager.createUser(req.body)
        res.status(200).json({message:"User created",user:response})
    }catch(err){
        res.status(500).json({message:err.message})
    }
})

app.delete("/api/users/:id", async (req,res)=>{
    try{
        const {id} = req.params
        if(!id){
            return res.status(404).json({message:"Missing id"})
        }
        const deletedUser = await manager.deleteUser(parseInt(id))
        res.status(200).json({message:"Deleted user", user:deletedUser})
    }catch(err){
        res.status(500).json({message:err.message})
    }
})

app.listen(3000, () => {
    console.log("Server currently running at: http://localhost:3000")
})