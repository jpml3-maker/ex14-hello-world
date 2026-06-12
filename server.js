const express = require('express');
const app = express();

const express = require('express');
const app = express();

// TODO: Implemente as rotas:
// GET /       → 200, corpo contém "Home"
app.get('/', (req, res) => {
    res.status(200).send('Home');
});
// GET /sobre  → 200, corpo contém "Sobre"
app.get('/sobre', (req, res) => {
    res.status(200).send('Sobre');
});

// GET /contato→ 200, corpo contém "Contato"
app.get('/contato', (req, res) => {
    res.status(200).send('Contato');
});
// Rotas não mapeadas → 404 automático do Express

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
