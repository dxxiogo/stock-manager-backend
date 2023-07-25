import { useEffect } from "react";
import  InventoryInsight from "../components/InventoryInsight";
import { TableHead } from "../components/TableHead";
import useInvetory from "../hooks/useInvetory";
import { Link } from "react-router-dom";

export default function Dashboard () {

    const {itemsRunningOut, recentsItems, totalInvetory, diversityOfItems, updateData} = useInvetory();

    useEffect(() => {
        updateData();
    }, [])

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <div>
                <InventoryInsight title="Diversidade de Itens" amount={diversityOfItems}/>
                <InventoryInsight title="Inventário Total" amount={totalInvetory}/>
                <InventoryInsight title="Itens Recentes" amount={recentsItems.length}/>
                <InventoryInsight title="Itens acabando" amount={itemsRunningOut.length}/>
            </div>
            <hr />
            <div>
                <table style={{border: "1px", borderCollapse: "none"}}>
                <TableHead>
                    <td>Itens Recentes</td>
                    <td>Ações</td>
                </TableHead>
                
                    <tbody>
                        {
                            recentsItems.map(({id, name}) => (
                                <tr key={id}>
                                    <td>{name}</td>
                                    <td><Link to={`/StockItems/view/${id}`}><button>Ver</button></Link></td>
                                </tr>
                             ))
                        }
                    </tbody>
                </table>
            </div>
            <div>
                <table style={{border: "5px", borderCollapse: "none"}}>
                    <TableHead>
                        <td>Itens Acabando</td>
                        <td>Qtd.</td>
                        <td>Ações</td>
                    </TableHead>
                    <tbody>
                        {
                             itemsRunningOut.map(({id, name, amount}) => (
                                <tr key={id}>
                                    <td>{name}</td>
                                    <td>{amount}</td>
                                    <td><Link to={`/StockItems/view/${id}`}><button>Ver</button></Link></td>
                                </tr>
                             ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}