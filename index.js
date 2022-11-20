require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.API_PORT;

app.listen(port, ()=>{
    console.log(`App rodando na porta ${port}.`);
});

const pontoController = require('./controladores/PontoController');

app.post('/pontos', pontoController.addPonto);

app.get('/pontos', pontoController.getPontos);

app.get('/', pontoController.sincronizar);