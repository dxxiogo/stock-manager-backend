import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";


async function getProducts (req: Request, res: Response) {

    try {
        const products = await prismaClient.product.findMany();
        res.status(201).json(products);

    } catch (err) {
        res.send({err})
    }

}

export {getProducts};