const http = require("http");
const path = require("path");
const fs = require("fs");

const caminhoDoArquivo = path.join(__dirname, "mock", "alunos.json");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Olá mundo!");
  } else if (req.method === "GET" && req.url === "/alunos") {
    fs.readFile(caminhoDoArquivo, "utf-8", (erro, dado) => {
      if (erro) {
        res.writeHead(400, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ error: "Erro ao ler arquivo" }));
      }
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(dado);
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Rota não encontrada");
  }
});

server.listen(3000, () => console.log("Servidor rodando!"));
