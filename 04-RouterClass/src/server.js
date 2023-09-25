import express, { response } from "express"
import usersRouter from "./routes/users.router.js"
import productsRouter from "./routes/products.router.js";
import ordersRouter from "./routes/orders.router.js";
import { manager } from "./UsersManager.js"

const app = express()

//para recibir info por method post
app.use(express.json())

// routes
app.use("/api/users", usersRouter)
app.use("/api/products", productsRouter)
app.use("/api/orders",ordersRouter)


app.listen(3000, () => {
    console.log("Server currently running at: http://localhost:3000")
})