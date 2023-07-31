import { useContext} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ItemsContext } from "../../contexts/ItemsContext";
import Form from "../../components/Form";


export default function UpdateItem () {
    const navigate = useNavigate();
    const {itemId} = useParams();
    const {items, updateItem} = useContext(ItemsContext);
    const item  = items.find(({id}) => id === +itemId );

    console.log(item)

    function submitForm ({name, amount, price, category, description}) {
        const id = +item.id;
        updateItem({id, name, amount, price, category, description});
        return navigate("/StockItems/Items");
    }

    if(!item) {
        return <h2>Ops! Item não encontrado</h2>
    }

    return (
        <>
            <h3 className="mt-8 text-2xl font-light">Atualizar - {item.name}</h3>
            <div className="p-12">
            <Form handleSubmit={submitForm} inicialValues={item}/> 
            </div>
        </>
    )
}