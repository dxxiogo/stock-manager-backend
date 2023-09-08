import moment from "moment/moment";
import useStock from "./useStock";

function calculateRecentsItems (date) {
    const currentDate = moment(moment().format("YYYY-MM-DD"));
    return currentDate.diff(moment(date), "days");
}

export default function useInvetory () {
    const {items} = useStock();

    let itemsRunningOut = [];
    let recentsItems = [];
    let totalInvetory = 0;

    if(items.length > 0) {
        itemsRunningOut = items.filter(item => item.inStock <= 10);
        recentsItems =  items.filter(item => {
                 if(calculateRecentsItems(item?.date) <= 15) {
                     return item;
                 }
             });
        totalInvetory = items.reduce((acc, item) => acc + +item.inStock, 0);
    }

    
       
    return {itemsRunningOut, totalInvetory, recentsItems};
}


// Para facilitar no uso do useContext, para que não precise sempre usar useConetext e passar um parâmetro, criar um hook facilitará