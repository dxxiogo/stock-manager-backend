import { useState } from "react"

export default function AddNewItem () {

    const [name, setName] = useState("");
    const [amount, setAmount] = useState(0);
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div>
            <form action="">
                <div>
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" id="name"/>
                </div>
                <div>
                    <label htmlFor="amount">Quantidade</label>
                    <input type="number" name="amount" id="amount" />
                </div>
                <div>
                    <label htmlFor="price">Preço</label>
                    <input type="number" name="price" id="price"/>
                </div>
                <div>
                    <label htmlFor="category">Categoria</label>
                    <select name="category" id="category">
                        <option value="">Selecione uma categoria</option>
                        <option value="Jogos">Jogos</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="description">Descrição</label>
                    <textarea name="description" id="description" ></textarea>
                </div>
            </form>
        </div>
    )
}