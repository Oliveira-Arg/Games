// Importação do express
const express = require('express');

// Criando o app do express
const app = express();

// Middleware para servir arquivos estáticos da pasta 'public'
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Rota para o arquivo produto-obtido.html
app.get('/produto-obtido', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'src', 'pages', 'produto-obtido.html'));
});

// Importação das rotas
const rotaProduto1 = require('./src/routes/Produto1');
const rotaProduto2 = require('./src/routes/Produto2');

// Rota para a página inicial
app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'src', 'pages', 'index.html'));
});

// Gerenciamento das rotas
app.use('/produto1', rotaProduto1);
app.use('/produto2', rotaProduto2);

// Rodar o servidor
const localhost = '127.0.0.1';
const port = 3000;

app.listen(port, localhost, () => {
  console.log(`Servidor rodando em http://${localhost}:${port}/`);
});
