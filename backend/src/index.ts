import { server } from "./server/Server";
import { router } from "./server/routes";




server.listen('3333', () => {
    console.log('Servidor rodando na porta 3333');
})


server.use(router);