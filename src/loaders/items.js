import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContext";

export default function itemLoader ({params}) {
    const {items} = useContext(ItemsContext);
    const item = items.find(({id}) => id === +params.itemId);
    
    return item;
}