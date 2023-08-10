import moment from "moment/moment";
import useStock from "./useStock";

function calculateRecentsItems (date) {
    const currentDate = moment(moment().format("YYYY-MM-DD"));
    return currentDate.diff(moment(date), "days");
}

export default function useInvetory () {
    const {items} = useStock();
    console.log(items);    

    const itemsRunningOut = items.filter(item => item.amount <= 10);
    const recentsItems =  items.filter(item => {
             if(calculateRecentsItems(item.date) <= 15) {
                 return item;
             }
         });
     const totalInvetory = items.reduce((acc, item) => acc + +item.amount, 0);

    
       
    return {itemsRunningOut, recentsItems, totalInvetory};
}


// Para facilitar no uso do useContext, para que não precise sempre usar useConetext e passar um parâmetro, criar um hook facilitará