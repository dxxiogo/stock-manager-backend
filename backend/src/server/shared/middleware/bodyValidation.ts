import { RequestHandler } from "express";
import * as yup from 'yup';

let productSchema = yup.object().shape({
    name: yup.string().required().min(3),
    inStock: yup.number().required().min(1),
    category: yup.string().required(),
    price: yup.number().required(),
    description: yup.string()
})

export const bodyValidation: RequestHandler = async (req, res, next) => {
    try{
        await productSchema.validate(req.body, {abortEarly: false});
        next()
    }catch(err) {
        const yupError = err as yup.ValidationError;
        const validationErrors: Record<string, string> = {}; //O Record é um objeto que dentro do <> é indicado o tipo da chave e do valor

        yupError.inner.forEach(error => { // O inner retorna um array de erros para serem tratados
            if(error.path === undefined) return; // o error.path é uma maneira de acessar o caminho do objeto em que o erro foi identificado, exemplo: person = {name: "Diogo"}, se o erro ocorreu no name, o caminho vai ser person.name

            validationErrors[error.path] = error.message;

        })
        return res.status(404).json({
            errors: validationErrors,
        });
    }
}