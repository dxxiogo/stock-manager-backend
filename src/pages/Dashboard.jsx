import  InventoryInsight from "../components/InventoryInsight";
import { TableHead } from "../components/TableHead";

export default function Dashboard () {
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <div>
                <InventoryInsight title="Diversidade de Itens" amount={5}/>
                <InventoryInsight title="Inventário Total" amount={40}/>
                <InventoryInsight title="Itens Recentes" amount={2}/>
                <InventoryInsight title="Itens acabando" amount={1}/>
            </div>
            <hr />
            <div>
                <TableHead>
                    <li>Itens Recentes</li>
                    <li>Ações</li>
                </TableHead>
                <table style={{border: "1px", borderCollapse: "none"}}>
                    <tbody>
                        <tr>
                            <td>
                                7 wordes
                            </td>
                            <td>
                                <button>Ver</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <TableHead>
                    <li>Itens Acabando</li>
                    <li>Qtd.</li>
                    <li>Ações</li>
                </TableHead>
                <table style={{border: "5px", borderCollapse: "none"}}>
                    <tbody>
                        <tr>
                            <td>
                                Senhor dos Anéis
                            </td>
                            <td>
                                8
                            </td>
                            <td>
                                <button>Ver</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}