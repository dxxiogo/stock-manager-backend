import { useContext } from "react"
import { ItemsContext } from "../contexts/ItemsContext"
import { Link } from "react-router-dom";
import Button from "./Button";

export default function ItemRow ({id, name, amount, category, price, description}) {
    const {removeItem} = useContext(ItemsContext);
    
    return (
        <tr className="w-full h-10 p-2">
            <td>{id}</td>
            <td>{name}</td>
            <td>{amount}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{description}</td>
            <td>
                <Link to={`/StockItems/view/${id}`}><Button content="Ver"/></Link>
                <Link to={`/StockItems/update/${id}`}><Button content="Atualizar"/></Link>
                <Button content="Excluir" onClick={() => removeItem(id)} className= "bg-red-600"/>
            </td>
        </tr>
    )
}