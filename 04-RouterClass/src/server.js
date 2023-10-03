import express, { response } from "express"
import usersRouter from "./routes/users.router.js"
import productsRouter from "./routes/products.router.js";
import ordersRouter from "./routes/orders.router.js";
//import { manager } from "./UsersManager.js"
import { dirname } from "path"
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()

//para recibir info por method post
app.use(express.json())

console.log(__dirname+"/public")
//Habilitar que la carpeta public sea static
app.use(express.static( __dirname + "/public"))

// routes
app.use("/api/users", usersRouter)
app.use("/api/products", productsRouter)
app.use("/api/orders",ordersRouter)


app.listen(3000, () => {
    console.log("Server currently running at: http://localhost:3000")
})