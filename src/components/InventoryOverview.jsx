import InventoryInsight from "./InventoryInsight"
import useStock from "../hooks/useStock";
import useInvetory from "../hooks/useInvetory";

export default function InventoryOverview () {
    const {items} = useStock();
    const {itemsRunningOut, recentsItems, totalInvetory} = useInvetory();
         


    return (
        <div className="flex align-center gap-10 justify-between p-5">
           <InventoryInsight title="Diversidade de Itens" amount={items.length}/>
           <InventoryInsight title="Inventário Total" amount={totalInvetory}/>
           <InventoryInsight title="Itens Recentes" amount={recentsItems.length}/>
           <InventoryInsight title="Itens acabando" amount={itemsRunningOut.length}/>  
        </div>
    )
}