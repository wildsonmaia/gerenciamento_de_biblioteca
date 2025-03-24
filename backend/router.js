const express = require("express")
const bodyParser = require("body-parser")
const dados = require("./db.json")
const router = express.Router()
const jsonParser = bodyParser.json()

const fs = require('fs');
const path = require('path');

// Caminho para o arquivo db.json
const dbPath = path.join(__dirname, 'db.json');

// Função para ler o conteúdo do arquivo
const readDB = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(dbPath, 'utf8', (err, data) => {
            if (err) {
                reject('Erro ao ler o arquivo: ' + err);
            } else {
                try {
                    const db = JSON.parse(data);
                    resolve(db);
                } catch (parseError) {
                    reject('Erro ao analisar o JSON: ' + parseError);
                }
            }
        });
    });
};

// Função para escrever no arquivo
const writeDB = (db) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(dbPath, JSON.stringify(db, null, 2), (err) => {
            if (err) {
                reject('Erro ao escrever no arquivo: ' + err);
            } else {
                resolve('Operação concluída com sucesso!');
            }
        });
    });
};

router.get("/", (req, res) => {
    res.send("Seja bem-vindo à nossa biblioteca!")
})

router.get("/livros", (req, res) => {
    res.send(dados)
})

router.get("/livros/:id", (req, res) => {
    const id = req.params.id
    res.send(dados[id - 1])
})

router.post("/livros", jsonParser, async (req, res) => {
    try {
      const body = req.body;

      dados.push(body);
      await writeDB(dados);
  
      res.status(201).send(body);
    } catch (error) {
      res.status(500).send({ message: "Erro ao adicionar o livro", error });
    }
  });

  // PARA FAZER
router.put("/livros/:id", jsonParser, async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const body = req.body
        const index = dados.findIndex(livro => livro.id === id)
        if (index !== -1) {
            dados[index] = { ...dados[index], ...body }
            await writeDB(dados);
            res.send(dados[index])
        } else {
            res.status(404).send({ message: "Livro não encontrado" })
        }
    } catch (error) {
        res.status(500).send({ message: "Erro ao atualizar o livro", error });
    }
})

router.delete("/livros/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const index = dados.findIndex((livro) => livro.id === id);
      if (index !== -1) {
        const removedBook = dados.splice(index, 1);
        await writeDB(dados);
        res.send(removedBook);
      } else {
        res.status(404).send({ message: "Livro não encontrado" });
      }
    } catch (error) {
      res.status(500).send({ message: "Erro ao remover o livro", error });
    }
  });

module.exports = router