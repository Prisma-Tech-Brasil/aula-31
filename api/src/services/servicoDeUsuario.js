const repositorioDeUsuario = require("../repositories/repositorioDeUsuario");

exports.obterTodosUsuarios = (callback) => {
  repositorioDeUsuario.encontrarTodosUsuarios((erro, dado) => {
    if (erro) {
      return callback("Erro ao ler arquivo", null);
    }
    callback(null, JSON.parse(dado));
  });
};