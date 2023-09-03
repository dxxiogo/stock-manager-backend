import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";



async function deleteProductController (req: Request, res: Response) {

    const id = req.params.id;

    try {
        await prismaClient.product.delete({
           where: {
            id
           }
        })
        res.status(200).send('Sucess Deleted!');

    } catch (err) {
        res.send({err})
    }

}

export {deleteProductController};