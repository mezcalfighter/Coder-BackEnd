import http from 'http'

const server = http.createServer()

server.listen(8080,()=>{
    console.log("Server currrently running at: http://localhost:8080")
})

