import express from 'express';



const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('<h1>Servidor ativo!</h1>');
});

export {server};