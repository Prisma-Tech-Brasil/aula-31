const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const caminhoDoArquivo = path.join(__dirname, "mock", "alunos.json");

app.get("/", (_req, res) => {
  res.send("Olá mundo!");
});

app.get("/alunos", (_req, res) => {
  fs.readFile(caminhoDoArquivo, "utf-8", (erro, dado) => {
    if (erro) {
      return res.status(400).json({ error: "Erro ao ler arquivo" });
    }

    return res.type("json").send(dado);
  });
});

app.listen(3000, () => console.log("Servidor rodando!"));
