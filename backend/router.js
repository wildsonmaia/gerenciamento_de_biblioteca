const express = require("express")
const bodyParser = require("body-parser")
const dados = require("./db.json")
const router = express.Router()
const jsonParser = bodyParser.json()

router.get("/", (req, res) => {
    res.send("Seja bem-vindo à nossa biblioteca!")
})

router.get("/livros", (req, res) => {
    res.send(dados)
})

router.get("/livros/:id", (req, res) => {
    const id = req.params.id
    res.send(dados.livros[id - 1])
})

router.post("/livros", jsonParser, (req, res) => {
    const body = req.body
    dados.livros.push(body)
    res.json(dados).send("Livro criado")
})

router.put("/livros/:id", jsonParser, (req, res) => {
    const id = req.params.id
    const body = req.body
    const index = dados.livros.findIndex(livro => livro.id === id)
    if (index !== -1) {
        dados.livros[index] = { ...dados.livros[index], ...body }
        res.send(dados.livros[index])
    } else {
        res.status(404).send({ message: "Livro não encontrado" })
    }
})

router.delete("/livros/:id", jsonParser, (req, res) => {
    const id = req.params.id
    const index = dados.livros.findIndex(livro => livro.id === id)
    if (index !== -1) {
        const data = dados.livros.splice(index, 1)
        res.send(data)
    } else {
        res.status(404).send({ message: "Livro não encontrado" })
    }
})

module.exports = router