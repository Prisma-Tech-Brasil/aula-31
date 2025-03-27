const alunoRepository = require("../repositories/repositorioDeAluno");

const buscarAlunos = (callback) => {
  alunoRepository.obterAlunos((erro, dado) => {
    if (erro) {
      return callback("Erro ao ler arquivo", null);
    }
    callback(null, JSON.parse(dado));
  });
};

module.exports = { buscarAlunos };