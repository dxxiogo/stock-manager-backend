import { useContext, useState } from "react"
import { ItemsContext } from "../contexts/ItemsContext";
import moment from "moment/moment";

function calculateRecentsItems (date) {
    const currentDate = moment(moment().format("YYYY-MM-DD"));
    return currentDate.diff(moment(date), "days");
}

export default function useInvetory () {
    const [itemsRunningOut, setItemsRunningOut] = useState([]);
    const [recentsItems, setRecentsItems] = useState([]);
    const [totalInvetory, setTotalInvetory] = useState(0);
    const [diversityOfItems, setDiversityOfItems] = useState(0);

    const {items} = useContext(ItemsContext);

    function updateData () {
        setItemsRunningOut(state => items.filter(item => item.amount <= 10));
        setRecentsItems(state => {
           return items.filter(item => {
                if(calculateRecentsItems(item.date) <= 15) {
                    return item;
                }
            } )
        });
        setTotalInvetory(items.reduce((acc, item) => acc + +item.amount, 0));
        setDiversityOfItems(items.length);
    }
       
    return {itemsRunningOut, recentsItems, totalInvetory, diversityOfItems, updateData};
}