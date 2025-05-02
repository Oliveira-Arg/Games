// importar módulo express
const express = require('express');

// função do express para manipular as rotas
const rotaProduto1 = express.Router();

// usado para trabalhar com caminhos de arquivos
const path = require('path');

// rota para acessar o produto1.html
rotaProduto1.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../', 'pages', 'produto1.html'));
});

// exportar toda a configuração das rotas
module.exports = rotaProduto1;
