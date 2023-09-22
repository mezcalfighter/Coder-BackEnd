import express from "express"

const app = express()

// req => params, query, body
app.get("/", (req, res) => {
    res.send("Hello World")
})

// /api/character => buscar todos los personajes o crear un personaje
app.get("/", (req, res) => {
    res.send("Hello World")
})

app.post("/api/character", (req, res) => {
    res.send("Hello World")
})
app.get("/user", (req, res) => {
    res.send("Hello User")
})

app.listen(3000, () => {
    console.log("Server currently running at: http://localhost:3000")
})