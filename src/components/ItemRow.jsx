import { useContext } from "react"
import { ItemsContext } from "../contexts/ItemsContext"
import { Link } from "react-router-dom";

export default function ItemRow ({id, name, amount, category, price, description}) {
    const {removeItem} = useContext(ItemsContext);
    
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{amount}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{description}</td>
            <td>
                <Link to={`view/${id}`}><button>Ver</button></Link>
                <Link to={`update/${id}`}><button>Atualizar</button></Link>
                <button onClick={() => removeItem(id)}>Excluir</button>
            </td>
        </tr>
    )
}