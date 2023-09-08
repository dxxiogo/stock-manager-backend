import { Link } from "react-router-dom";
import Button from "./Button";

export default function itemsRunningOutTable ({itemsRunningOut}) {
    return (
        <table className="text-left w-1/2 max-md:w-full">
            <thead className="bg-gray-800 h-12 shadow-2xl mb-4 rounded">
                <tr className="max-md:text-sm text-center">
                    <th className="pl-2">Itens Acabando</th>
                    <th>Quantidade</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {
                    itemsRunningOut.map(({id, name, inStock}) => (
                        <tr key={id} className="text-center">
                            <td>{name}</td>
                            <td>{inStock}</td>
                            <td><Link to={`/StockItems/view/${id}`}><Button content="Ver" className="bg-sky-400 max-[420px]:w-12"/></Link></td>
                        </tr>
                    ))   
                }  
            </tbody>
        </table>
    )
}