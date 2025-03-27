const express = require("express");
const alunoController = require("./controllers/controladorDeAluno");

const app = express();

app.get("/", (_req, res) => {
  res.send("Olá mundo!");
});

app.get("/alunos", alunoController.getAlunos);

app.listen(3000, () => console.log("Servidor rodando!"));
