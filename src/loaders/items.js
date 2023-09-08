export default async function itemLoader ({params}) {
    
    try {
        const response = await fetch(`http://localhost:3333/product/${params.itemId}`);
        const item = await response.json();
        return item;
    } catch(err) {
        console.log(err)
    }
}