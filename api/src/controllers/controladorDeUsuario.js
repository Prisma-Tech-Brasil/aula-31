const servicoDeUsuario = require("../services/servicoDeUsuario");

exports.obterTodosUsuarios = async (_req, res) => {
  servicoDeUsuario.obterTodosUsuarios((erro, usuarios) => {
    if (erro) {
      return res.status(400).json({ error: erro });
    }
    res.json(usuarios);
  });
};
