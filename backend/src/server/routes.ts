import { Router } from "express";
import { createProductController } from './controllers/ProductsControllers/CreateProductController'
import { updateProductController } from "./controllers/ProductsControllers/UpdateProductController";
import { deleteProductController } from "./controllers/ProductsControllers/DeleteProductController";
import { viewProductController } from "./controllers/ProductsControllers/ViewProductController";
import { bodyValidation } from "./shared/middleware/bodyValidation";

const router = Router();



router.get('/products', );

router.post('/product', bodyValidation, createProductController);

router.put('/product/:id', updateProductController);

router.delete('/product/:id', deleteProductController);

router.get('/product/:id', viewProductController);


export {router}
