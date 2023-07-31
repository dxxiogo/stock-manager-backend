import { useContext } from "react"
import { ItemsContext } from "../contexts/ItemsContext"
import { Link } from "react-router-dom";
import Button from "./Button";

export default function ItemRow ({id, name, amount, category, price, description}) {
    const {removeItem} = useContext(ItemsContext);
    
    return (
        <tr className=" h-10 px-10 text-center">
            <td className="px-4" >{id}</td>
            <td className="px-4">{name}</td>
            <td>{amount}</td>
            <td>{category}</td>
            <td>R${price}</td>
            <td className="flex align-center gap-10  justify-center p-2">
                <Link to={`/StockItems/view/${id}`}><Button content="Ver" className="bg-sky-400"/></Link>
                <Link to={`/StockItems/update/${id}`}><Button content="Atualizar" className="bg-slate-50 text-black"/></Link>
                <Button content="Excluir" onClick={() => removeItem(id)} className= "bg-red-600"/>
            </td>
        </tr>
    )
}