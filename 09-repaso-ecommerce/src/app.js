import express from "express"
import handlebars from "express-handlebars"
import { __dirname } from "./utils.js"
import productsRouter from "./routes/products.router.js"
import viewsRouter from "./routes/views.router.js"
import usersRouter from "./routes/users.router.js"

//Import DB
import "./db/configDB.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.engine("handlebars",handlebars.engine())
app.set("views",__dirname+"/views")
app.set("view engine","handlebars")

app.use("/api/products",productsRouter)
app.use("/api/users",usersRouter)
app.use("/api/views",viewsRouter)

app.listen(8080,()=>{
    console.log("Escuchando en el puerto 8080, http://localhost:8000")
})