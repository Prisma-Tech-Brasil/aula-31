const express = require("express");
const controladorDeUsuario = require("./controllers/controladorDeUsuario");

const app = express();

app.get("/", (_req, res) => {
  res.send("Olá mundo!");
});

app.get("/usuarios", controladorDeUsuario.obterTodosUsuarios);

app.listen(3000, () => console.log("Servidor rodando!"));
