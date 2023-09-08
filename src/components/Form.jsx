/* eslint-disable react/prop-types */
import { useState } from "react";
import Input from "../components/Input";
import Select from "../components/Select";
import Textarea from "../components/Textarea";
import Button from "./Button";

export default function Form ({handleSubmit, inicialValues}) {
    
    const [name, setName] = useState(inicialValues?.name ?? "");
    const [inStock, setinStock] = useState( inicialValues?.inStock ?? 0);
    const [price, setPrice] = useState(inicialValues?.price ?? 0);
    const [category, setCategory] = useState(inicialValues?.category ?? "");
    const [description, setDescription] = useState(inicialValues?.description ?? "");

    const categories = [
        'Eletrônicos',
        'Roupas',
        'Calçados',
        'Alimentos',
        'Bebidas',
        'Acessórios',
        'Limpeza',
        'Ferramentas',
        'Brinquedos',
        'Móveis',
        'Livros'
    ];

    function submitForm (eve) {
        eve.preventDefault();
        handleSubmit({name, inStock: +inStock, price, category, description});
    }
   
    return (
        <>
           <form onSubmit={submitForm}>
            <div className="flex gap-10 flex-wrap lg:gap-6 max-md:gap-6 " >
                <Input id="name" type="text" labelContent="Nome:" value={name} handleChange={(eve) => setName(eve.target.value)} />
                <Input id="inStock" type="number" labelContent="Quantidade:" value={inStock} handleChange={(eve) => setinStock(eve.target.value)}/>
                <Input id="price" type="number" labelContent="Preço:" value={price} handleChange={(eve) => setPrice(eve.target.value)}/>
                <Select id="category" labelContent="Categoria:" value={category} handleChange={(eve) => setCategory(eve.target.value)}>
                    {
                        categories.map(category => (
                            <option value={category} key={category}>{category}</option>
                        ))
                    }
                </Select>
            </div>
            <Textarea id="description" labelContent="Descrição" value={description} handleChange={(eve) => setDescription(eve.target.value)}/>
            <Button content="Salvar" className="bg-sky-400 mt-4"/>
          </form>
        </>
    )
}