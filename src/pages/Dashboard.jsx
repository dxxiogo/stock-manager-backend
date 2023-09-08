import InventoryOverview from "../components/InventoryOverview";
import useInvetory from "../hooks/useInvetory";
import RecentsItemsTable from "../components/RecentsItemsTable";
import ItemsRunningOutTable from "../components/ItemsRunningOutTable";
import useStock from "../hooks/useStock";
import { useEffect } from "react";


export default function Dashboard () {
    const {items, setItems} = useStock();
    const {itemsRunningOut, recentsItems} = useInvetory();

    console.log(itemsRunningOut)

    useEffect (() => {
        async function fetchData () {
          try {
            const response =  await fetch('http://localhost:3333/products');
            const products = await response.json();
            setItems(products);
          } catch(err) {
            console.log(err)
          }
        }
        fetchData();
      }, []);

    return (
        <div className="dashboard p-5 grow">
            <h1 className="font-light text-[2.5rem] text-zinc-50">Dashboard</h1>
            <InventoryOverview/>
            <div className=" p-5 flex justify-around  gap-20 max-md:flex-wrap max-md:justify-between">
                <RecentsItemsTable recentsItems={recentsItems}/>
                <ItemsRunningOutTable itemsRunningOut={itemsRunningOut}/>
            </div>

        </div>
    )
}