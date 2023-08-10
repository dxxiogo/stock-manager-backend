export default function itemLoader ({params}) {
    const items = JSON.parse(localStorage.getItem("items"));

    const item = items.find(({id}) => id === +params.itemId);
    
    return item;
}