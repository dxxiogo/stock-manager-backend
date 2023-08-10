import ItemRow from "../../components/ItemRow";
import Table from "../../components/Table";  
import useStock from "../../hooks/useStock";

export default function Items () {
  const {items} = useStock();

  console.log(items)

  return (
      <>
        <Table headers={["ID", "Nome", "Em estoque", "Categoria", "Preço", "Ações"]}>
          {
              items.map(({id, name, amount, category, price}) => (
              <ItemRow 
                id={id} 
                name={name} 
                category={category} 
                amount={amount} 
                price={price} 
                key={id}/>
            ))
          } 
        </Table>
      </>  
    )
}