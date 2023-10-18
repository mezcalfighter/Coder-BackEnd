import express from "express"
import usersRouter  from "./routes/users.router.js"

//db connection
import "./db/configDB.js"

//raise express srv
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routes
app.use("/api/users",usersRouter)

app.listen(8080,()=>{
    console.log("Contectado a: http://localhost:8080")
})