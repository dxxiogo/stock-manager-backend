import InventoryOverview from "../components/InventoryOverview";
import useInvetory from "../hooks/useInvetory";
import RecentsItemsTable from "../components/RecentsItemsTable";
import ItemsRunningOutTable from "../components/ItemsRunningOutTable";

export default function Dashboard () {
    const {itemsRunningOut, recentsItems} = useInvetory();

    return (
        <div className="dashboard p-5 grow">
            <h1 className="font-light text-[2.5rem] text-zinc-50">Dashboard</h1>
            <InventoryOverview/>
            <div className=" p-5">
                <RecentsItemsTable recentsItems={recentsItems}/>
                <ItemsRunningOutTable itemsRunningOut={itemsRunningOut}/>
            </div>

        </div>
    )
}