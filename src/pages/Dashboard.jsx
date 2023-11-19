import InventoryOverview from "../components/InventoryOverview";
import useInvetory from "../hooks/useInvetory";
import RecentsItemsTable from "../components/RecentsItemsTable";
import ItemsRunningOutTable from "../components/ItemsRunningOutTable";
import useStock from "../hooks/useStock";
import { useEffect } from "react";


export default function Dashboard () {
    const {fetchItems} = useStock();
    const {itemsRunningOut, recentsItems} = useInvetory();


    useEffect (() => {
        fetchItems();
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