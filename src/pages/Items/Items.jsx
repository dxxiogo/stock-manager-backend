import Table from "../../components/Table";  
import useStock from "../../hooks/useStock";
import { useEffect } from "react";

export default function Items () {
  const {items} = useStock();

  const {fetchItems} = useStock();

  useEffect (() => {
        fetchItems();
      }, []);

  return (
      <>
        <Table items={items}/>
      </>  
    )
}