import express, { response } from "express"
import usersRouter from "./routes/users.router.js"
import productsRouter from "./routes/products.router.js";
import ordersRouter from "./routes/orders.router.js";
//import {__dirname} from "./utils.js"
import { manager } from "./UsersManager.js"
import { engine } from "express-handlebars"
import viewsRouter from "./routes/views.router.js"

const app = express()

//para recibir info por method post
app.use(express.json())

// acceder a informacion en el formulario
app.use(express.urlencoded({ extended: true }))

//plantillas
app.engine('handlebars', engine())
app.set("views","./views")
app.set("view engine","handlebars")

// routes
app.use("/api/users", usersRouter)
app.use("/api/products", productsRouter)
app.use("/api/orders",ordersRouter)
app.use("/api/views", viewsRouter)


app.listen(3000, () => {
    console.log("Server currently running at: http://localhost:3000")
})