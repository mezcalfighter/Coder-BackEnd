import express from "express"
import path from "path"
import {engine} from "express-handlebars"
import {Server} from "socket.io"
import viewsRouter from "../07-chat-sockets/src/routes/views.router.js"
import {__dirname} from "../07-chat-sockets/src/utils.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname + '/public'));

//handlebars
app.engine("handlebars",engine())
app.set("views", __dirname + '/views')
app.set("view engine","handlebars")

//Router
app.use("/",viewsRouter)

//set start webserver
const PORT = 3000
const httpServer = app.listen(PORT,()=>{
    console.log("Listening @: http://localhost:3000")
})

//Socket - Lado Server
const socketServer = new Server(httpServer)

//Guardar mensajes
const messages = []

// Eventos
socketServer.on("connection",(socket)=>{
    socket.on("newUser",(user)=>{
        socket.broadcast.emit("userConnected",user)
        socket.emit("successLogin",user)
    })
    socket.on("message",(infoMessage)=>{
        messages.push(infoMessage)
        socketServer.emit("pushMessage",messages)
    })
})
