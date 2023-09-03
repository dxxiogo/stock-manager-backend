import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

 export class createProductController {

    async handle (req: Request, res: Response) {

        const {name, inStock, category, price} = req.body

        try {
            const product = await prismaClient.product.create({
                data: {
                    name,
                    category,
                    price,
                    inStock
                }
            })
            res.status(201).send(product);

        } catch (err) {
            res.send({err})
        }

    }
}