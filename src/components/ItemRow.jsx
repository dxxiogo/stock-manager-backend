import { Link } from "react-router-dom";
import Button from "./Button";
import useStock from "../hooks/useStock";

// eslint-disable-next-line react/prop-types
export default function ItemRow ({id, name, amount, category, price}) {
    const {removeItem} = useStock();
    
    return (
        <tr className=" h-10 px-10 text-sm text-center">
            <td className="px-4 py-2" >{id}</td>
            <td className="max-md:px-20 px-4 py-2 ">{name}</td>
            <td className="px-4 py-2 max-md:hidden">{amount}</td>
            <td className="px-4 py-2 max-md:hidden">{category}</td>
            <td className="px-4 py-2 max-md:hidden">R${price}</td>
            <td className="flex align-center gap-10  justify-center p-2 max-lg:gap-3 max-lg:text-sm">
                <Link to={`/StockItems/view/${id}`}><Button content="Ver" className="bg-sky-400 max-lg:w-14"/></Link>
                <Link to={`/StockItems/update/${id}`}><Button content="Atualizar" className="bg-slate-50 text-black max-[375px]:hidden"/></Link>
                <Button content="Excluir" onClick={() => removeItem(id)} className= "bg-red-600 max-lg:w-14"/>
            </td>
        </tr>
    )
}