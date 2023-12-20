import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";



async function viewProductController (req: Request, res: Response) {

    const id = req.params.id;

    try {
        const product = await prismaClient.product.findUnique({
           where: {
              id
           }
        })
        res.status(201).json(product);

    } catch (err) {
        res.send({err})
    }

}

export {viewProductController};