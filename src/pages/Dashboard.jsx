import InventoryOverview from "../components/InventoryOverview";
import { Link } from "react-router-dom";
import Table from "../components/Table";
import useInvetory from "../hooks/useInvetory";
import { useEffect } from "react";
import Button from "../components/Button";

export default function Dashboard () {
    const {itemsRunningOut, recentsItems, updateData} = useInvetory();

    useEffect(() => {
        updateData();
    }, [])



    return (
        <div className="dashboard p-5">
            <h1 className="font-light text-[2.5rem] text-zinc-50">Dashboard</h1>
            <InventoryOverview/>
            <div className="flex w-full justify-between px-5">
                <Table headers={["Itens Recentes", "Ações"]}>
                   {
                    recentsItems.map(({id, name}) => (
                        <tr key={id} className="text-center">
                            <td className="p-3">{name}</td>
                            <td><Link to={`/StockItems/view/${id}`}><Button content="Ver" className="bg-sky-400"/></Link></td>
                        </tr>
                     ))
                   }     
                </Table>
                <Table headers={["Itens Acabando", "Qtd.", "Ações"]}>
                    {
                      itemsRunningOut.map(({id, name, amount}) => (
                        <tr key={id} className="text-center">
                            <td>{name}</td>
                            <td>{amount}</td>
                            <td><Link to={`/StockItems/view/${id}`}><Button content="Ver" className="bg-sky-400"/></Link></td>
                        </tr>
                     ))   
                    }
                </Table>
            </div>

        </div>
    )
}