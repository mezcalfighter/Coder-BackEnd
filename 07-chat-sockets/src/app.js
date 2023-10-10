import express from "express"
import {engine} from "express-handlebars"
import {Server} from "socket.io"
import viewsRouter from "./routes/views.router.js"
import {__dirname} from "./utils.js"

const app = express()

app.use(express.json())
app.use(express.urlenconded({extended:true}))
app.use(express.static(__dirname+"/public"))

//handlebars
app.engine("handlebars",engine())
app.set("views",__dirname+"/views")
app.set("view engine","views")

//Router
app.use("/",viewsRouter)

//set start webserver
const PORT = 3000
const httpServer = app.listen(PORT,()=>{
    console.log("Listening @: http://localhost:3000")
})

//Socket - Lado Server
const socketServer = new Server(httpServer)

// Eventos