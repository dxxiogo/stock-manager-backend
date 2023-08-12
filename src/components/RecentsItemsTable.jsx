import { Link } from "react-router-dom";
import Button from "./Button";


export default function RecentsItemsTable ({recentsItems}) {
    return (
        <table className="text-left ">
            <thead className="bg-gray-800 h-12 shadow-2xl">
                <tr>
                    <th className="pl-2">Itens Recentes</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {
                    recentsItems.map(({id, name}) => (
                        <tr key={id} className="">
                            <td className="p-3">{name}</td>
                            <td><Link to={`/StockItems/view/${id}`}><Button content="Ver" className="bg-sky-400"/></Link></td>
                        </tr>
                    ))
                }    
             </tbody>
        </table>
    )
}