import Table from "../../components/Table";  
import useStock from "../../hooks/useStock";

export default function Items () {
  const {items} = useStock();

  return (
      <>
        <Table items={items}/>
      </>  
    )
}