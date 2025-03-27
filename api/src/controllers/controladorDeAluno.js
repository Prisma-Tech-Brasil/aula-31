const alunoService = require("../services/servicoDeAluno");

const getAlunos = (_req, res) => {
  alunoService.buscarAlunos((erro, alunos) => {
    if (erro) {
      return res.status(400).json({ error: erro });
    }
    res.json(alunos);
  });
};

module.exports = { getAlunos };
