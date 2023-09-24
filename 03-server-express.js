import express from "express"
import { manager } from "./02-sync-example.js"

const app = express()

// req => params, query , body
app.get("/api/users", async (req, res)=>{
    const users = await manager.getUsers()
    res.json({message:"user found",users})
})

app.get("/api/users/:id", async (req,res) => {
    const user = await manager.getUserById(parseInt(req.params.id))
    res.json({message:"User found", user})
})

app.listen(3000, () => {
    console.log("Server currently running at: http://localhost:3000")
})