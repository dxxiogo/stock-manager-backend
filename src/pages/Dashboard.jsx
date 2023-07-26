import InventoryOverview from "../components/InventoryOverview";
import { Link } from "react-router-dom";
import Table from "../components/Table";
import useInvetory from "../hooks/useInvetory";
import { useEffect } from "react";

export default function Dashboard () {
    const {itemsRunningOut, recentsItems, updateData} = useInvetory();

    useEffect(() => {
        updateData();
    }, [])



    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <InventoryOverview/>
            <div>
                <Table headers={["Itens Recentes", "Ações"]}>
                   {
                    recentsItems.map(({id, name}) => (
                        <tr key={id}>
                            <td>{name}</td>
                            <td><Link to={`/StockItems/view/${id}`}><button>Ver</button></Link></td>
                        </tr>
                     ))
                   }     
                </Table>
                <Table headers={["Itens Acabando", "Qtd.", "Ações"]}>
                    {
                      itemsRunningOut.map(({id, name, amount}) => (
                        <tr key={id}>
                            <td>{name}</td>
                            <td>{amount}</td>
                            <td><Link to={`/StockItems/view/${id}`}><button>Ver</button></Link></td>
                        </tr>
                     ))   
                    }
                </Table>
            </div>

        </div>
    )
}