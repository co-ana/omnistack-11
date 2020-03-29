const express = require('express'); // importa o pacote
const routes = require('./routes'); // importa rotas

const app = express(); // instancia o pacote

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);