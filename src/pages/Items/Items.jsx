import { TableHead } from "../../components/TableHead"
export default function Items () {
    return (
      <>
        <TableHead>
            <li>ID</li>
            <li>Nome</li>
            <li>Em estoque</li>
            <li>Categoria</li>
            <li>Ações</li>
        </TableHead>
        <table>
            <tbody>
                <tr>
                    <td>64786847675647</td>
                    <td>7 Wonrdes</td>
                    <td>8 unid.</td>
                    <td>Jogos</td>
                    <td>
                        <button>Ver</button>
                        <button>Atualizar</button>
                        <button>Excluir</button>
                    </td>
                </tr>
            </tbody>
        </table>
      
      </>  
    )
}