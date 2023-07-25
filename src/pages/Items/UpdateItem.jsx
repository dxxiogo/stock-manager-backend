import { useContext} from "react";
import { useLoaderData} from "react-router-dom"
import { ItemsContext } from "../../contexts/ItemsContext";
import Form from "../../components/Form";


export default function UpdateItem () {
    const {updateItem} = useContext(ItemsContext);
    const item = useLoaderData();

    
    function submitForm ({name, amount, price, category, description}) {
        const id = +item.id;
        updateItem({id, name, amount, price, category, description});
    }

    if(!item) {
        return <h2>Ops! Item não encontrado</h2>
    }
    return (
        <div>
           <Form handleSubmit={submitForm} inicialValues={item}/> 
        </div>
    )
}