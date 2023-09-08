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

// server.use((req: Request, res: Response, next: NextFunction) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:5173/');

//     res.header("Acess-Control-Allow-Methods", "GET, PUT, POST, DELETE")
//     // Outros cabeçalhos e métodos CORS podem ser configurados aqui, se necessário
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

//     server.use(cors());
//     next();
// });
