const path = require("path");
const fs = require("fs");

const caminhoDoArquivo = path.join(__dirname, "..", "..", "mock", "alunos.json");

const obterAlunos = (callback) => {
  fs.readFile(caminhoDoArquivo, "utf-8", (erro, dado) => {
    if (erro) {
      return callback(erro, null);
    }
    callback(null, dado);
  });
};

module.exports = { obterAlunos };