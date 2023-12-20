import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";



async function createProductController (req: Request, res: Response) {

    const {name, inStock, category, price, description} = req.body

    try {
        const product = await prismaClient.product.create({
            data: {
                name,
                category,
                price,
                inStock, 
                description
            }
        })
        res.status(201).json(product);
    } catch (err) {
        res.send({err})
    }

}

export {createProductController};