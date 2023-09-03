import { Router } from "express";


const router = Router();


router.get('/products');

router.post('/product');

router.put('/product/:id');

router.delete('/product:id');

router.get('/product/:id');


export {router}
