import { useContext } from "react";
import { ItemsContext } from "../../contexts/ItemsContext";
import ItemRow from "../../components/ItemRow";
import Table from "../../components/Table";  

export default function Items () {
  const {items} = useContext(ItemsContext);
  
    return (
      <>
        <Table headers={["ID", "Nome", "Em estoque", "Categoria", "Preço", "Ações"]}>
          {
            items.map(({id, name, amount, category, price, description}) => (
              <ItemRow id={id} name={name} description={description} category={category} amount={amount} price={price} key={id}/>
            ))
          } 
        </Table>
      
      </>  
    )
}