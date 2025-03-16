const express = require("express")
const cors = require('cors')
const router = require("./router")

const server = express()
const port = 3000
const host = "localhost"

server.use(cors())
server.use(router)

const url = `http://${host}:${port}`

// Servidor
server.listen(port, () => {
    console.log(`${url}`)
})