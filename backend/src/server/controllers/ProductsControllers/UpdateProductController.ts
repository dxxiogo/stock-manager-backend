import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";



async function updateProductController (req: Request, res: Response) {

    const id = req.params.id;
    const {name, inStock, category, price, description} = req.body

    try {
        const product = await prismaClient.product.update({
            where: {
                id
            },
            data: {
                name,
                category,
                price,
                inStock,
                description
            }
        })
        res.status(200).json(product);

    } catch (err) {
        res.send({err})
    }

}

export {updateProductController};