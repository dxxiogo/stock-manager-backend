import { useContext } from "react"
import { TableHead } from "../../components/TableHead"
import { ItemsContext } from "../../contexts/ItemsContext"
import ItemRow from "../../components/ItemRow"

export default function Items () {
    const {items} = useContext(ItemsContext);
    console.log(items)


    return (
      <>
        <table>
            <TableHead>
                <td>ID</td>
                <td>Nome</td>
                <td>Em estoque</td>
                <td>Categoria</td>
                <td>Ações</td>
            </TableHead>
            <tbody>
                {items.map(({id, name, amount, category, price, description}) => (
                   <ItemRow id={id} name={name} description={description} category={category} amount={amount} price={price} key={id}/>
                ))} 
            </tbody>
        </table>
      
      </>  
    )
}