// importar módulo express
const express = require('express');

// função do express para manipular as rotas
const rotaProduto2 = express.Router();

// usado para trabalhar com caminhos de arquivos
const path = require('path');

// rota para acessar o produto2.html
rotaProduto2.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../', 'pages', 'produto2.html'));
});

// exportar toda a configuração das rotas
module.exports = rotaProduto2;
