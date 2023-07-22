import { useContext, useState } from "react"
import { ItemsContext } from "../../contexts/ItemsContext";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

export default function AddNewItem () {

    const [name, setName] = useState("");
    const [amount, setAmount] = useState(0);
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const {addItem} = useContext(ItemsContext);

    function submitForm (eve) {
        eve.preventDefault();
        const id = Math.floor(Math.random() * 5000);
        addItem({id, name, amount, price, category, description});
        setName('');
        setAmount(0);
        setPrice(0);
        setCategory("Selecione uma categoria");
        setDescription('');
    }

    return (
        <div>
            <form onSubmit={submitForm} >
                <Input id="name" type="text" labelContent="Nome:" value={name} handleChange={(eve) => setName(eve.target.value)}/>
                <Input id="amount" type="number" labelContent="Quantidade:" value={amount} handleChange={(eve) => setAmount(eve.target.value)}/>
                <Input id="price" type="number" labelContent="Preço:" value={price} handleChange={(eve) => setPrice(eve.target.value)}/>
                <Select id="category" labelContent="Categoria:" value={category} handleChange={(eve) => setCategory(eve.target.value)}>
                    <option value="Jogos">Jogos</option>    
                </Select>
                <Textarea id="description" labelContent="Descrição" value={description} handleChange={(eve) => setDescription(eve.target.value)}/>
                <button>Salvar</button>
            </form>
        </div>
    )
}