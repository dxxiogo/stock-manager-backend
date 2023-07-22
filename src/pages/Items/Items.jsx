import { useContext } from "react"
import { TableHead } from "../../components/TableHead"
import { ItemsContext } from "../../contexts/ItemsContext"
import ItemRow from "../../components/ItemRow"

export default function Items () {
    const {items} = useContext(ItemsContext)
    console.log(items)


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
                {items.map(({id, name, amount, category, price, description}) => (
                   <ItemRow id={id} name={name} description={description} category={category} amount={amount} price={price} key={id}/>
                ))} 
            </tbody>
        </table>
      
      </>  
    )
}