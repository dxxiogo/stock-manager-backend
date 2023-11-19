import { server } from "./server/Server";
import { router } from "./server/routes";
import { Request, Response, NextFunction } from "express";
import cors from 'cors';
import 'dotenv/config'



server.listen(process.env.PORT || 5000, () => {
    console.log('Servidor rodando na porta 3333');
})


server.use(cors());

server.use(router);


