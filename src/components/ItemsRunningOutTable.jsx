import { Link } from "react-router-dom";
import Button from "./Button";

export default function itemsRunningOutTable ({itemsRunningOut}) {
    return (
        <table className="text-left">
            <thead className="bg-gray-800 h-12 shadow-2xl mb-4">
                <tr className="">
                    <th>Itens Recentes</th>
                    <th>Quantidade</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {
                    itemsRunningOut.map(({id, name, amount}) => (
                        <tr key={id} className="text-center">
                            <td>{name}</td>
                            <td>{amount}</td>
                            <td><Link to={`/StockItems/view/${id}`}><Button content="Ver" className="bg-sky-400"/></Link></td>
                        </tr>
                    ))   
                }  
            </tbody>
        </table>
    )
}